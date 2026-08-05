/* ADAS cut-off prediction live 3D scene.
 * Static dusk road with the Kia holding the lane ahead; the yellow Polo
 * crosses from the right through the ego corridor on a loop. An SVG overlay
 * drawn from real projections carries the AR bracket, the measured label and
 * the predicted crossing line; the page-level warning sign lights up while
 * the Polo is inside the corridor.
 * Loads lazily; on failure the original SVG diagram remains. */

import * as THREE from 'three';
import { GLTFLoader } from './vendor/loaders/GLTFLoader.js';
import { MeshoptDecoder } from './vendor/meshopt_decoder.module.js';

const SVGNS = 'http://www.w3.org/2000/svg';
const AMBER = '#d9a05f';
const GREEN = '#5fc998';

export async function init(stage) {
  const canvas = document.createElement('canvas');
  canvas.className = 'gl3d';
  stage.insertBefore(canvas, stage.firstChild);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x3a2b24, 30, 110);

  const camera = new THREE.PerspectiveCamera(50, 800 / 560, 0.1, 220);
  camera.position.set(0.0, 1.38, 0);
  camera.lookAt(0, 1.05, -30);

  // dusk sky, same recipe as the carpet scene
  const skyCanvas = document.createElement('canvas');
  skyCanvas.width = 1024; skyCanvas.height = 512;
  const sctx = skyCanvas.getContext('2d');
  const g = sctx.createLinearGradient(0, 0, 0, 512);
  g.addColorStop(0.00, '#4a4152');
  g.addColorStop(0.38, '#9e93a4');
  g.addColorStop(0.50, '#d0a8a5');
  g.addColorStop(0.565, '#e8a05f');
  g.addColorStop(0.60, '#5a3d28');
  g.addColorStop(1.00, '#171109');
  sctx.fillStyle = g; sctx.fillRect(0, 0, 1024, 512);
  const sg = sctx.createRadialGradient(512, 288, 4, 512, 288, 130);
  sg.addColorStop(0, 'rgba(255,214,160,.9)'); sg.addColorStop(1, 'rgba(255,214,160,0)');
  sctx.fillStyle = sg; sctx.fillRect(0, 0, 1024, 512);
  const skyTex = new THREE.CanvasTexture(skyCanvas);
  skyTex.mapping = THREE.EquirectangularReflectionMapping;
  skyTex.colorSpace = THREE.SRGBColorSpace;
  scene.background = skyTex;
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromEquirectangular(skyTex).texture;
  scene.environmentIntensity = 0.75;

  const sun = new THREE.DirectionalLight(0xffb27a, 2.2);
  sun.position.set(6, 4.2, -60);
  scene.add(sun, sun.target);
  sun.target.position.set(0, 0, 0);
  scene.add(new THREE.HemisphereLight(0x9e93a4, 0x241a12, 0.55));

  const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
  const load = url => new Promise((res, rej) => loader.load(url, res, undefined, rej));
  const base = 'media/3d/';
  const [roadG, kiaG, poloG] = await Promise.all([
    load(base + 'road.glb'), load(base + 'kia.glb'), load(base + 'polo.glb'),
  ]);
  const prep = gltf => { const o = gltf.scene; o.traverse(n => { if (n.isMesh && n.material && n.material.transparent && n.material.opacity < 0.05) n.visible = false; }); return o; };

  // static road
  const roadProto = prep(roadG);
  roadProto.rotation.y = Math.PI / 2;
  for (let i = 0; i < 3; i++) {
    const t = i === 0 ? roadProto : roadProto.clone(true);
    t.position.set(0, 0, -54 * i + 14);
    scene.add(t);
  }

  // the Kia holds the lane ahead, static
  const kia = prep(kiaG); kia.rotation.y = Math.PI;
  kia.position.set(0.3, 0, -14); scene.add(kia);

  // the Polo crosses from the right, nose pointing left (its travel direction)
  const polo = prep(poloG);
  polo.rotation.y = -Math.PI / 2;
  const poloMats = [];
  polo.traverse(n => {
    if (n.isMesh && n.material) {
      n.material = n.material.clone();
      n.material.transparent = true;
      poloMats.push({ m: n.material, o: n.material.opacity });
    }
  });
  scene.add(polo);

  // ---------- AR overlay ----------
  const overlay = document.createElementNS(SVGNS, 'svg');
  overlay.setAttribute('viewBox', '0 0 800 560');
  overlay.setAttribute('preserveAspectRatio', 'none');
  overlay.setAttribute('class', 'ar3d');
  stage.appendChild(overlay);

  const paths = [];
  for (let i = 0; i < 4; i++) {
    const pth = document.createElementNS(SVGNS, 'path');
    pth.setAttribute('fill', 'none'); pth.setAttribute('stroke-width', '2.4');
    pth.setAttribute('stroke', AMBER);
    overlay.appendChild(pth); paths.push(pth);
  }
  const predLine = document.createElementNS(SVGNS, 'line');
  predLine.setAttribute('stroke', AMBER); predLine.setAttribute('stroke-width', '2.4');
  predLine.setAttribute('stroke-dasharray', '9 8');
  overlay.appendChild(predLine);
  const predPoint = document.createElementNS(SVGNS, 'circle');
  predPoint.setAttribute('r', '7'); predPoint.setAttribute('fill', 'none');
  predPoint.setAttribute('stroke', AMBER); predPoint.setAttribute('stroke-width', '2.4');
  overlay.appendChild(predPoint);
  const tagBox = document.createElementNS(SVGNS, 'rect');
  tagBox.setAttribute('rx', '4'); tagBox.setAttribute('height', '22');
  tagBox.setAttribute('fill', 'rgba(8,8,18,.88)'); tagBox.setAttribute('stroke', AMBER);
  overlay.appendChild(tagBox);
  const tagText = document.createElementNS(SVGNS, 'text');
  tagText.setAttribute('class', 'svglabel'); tagText.setAttribute('font-size', '13.5');
  tagText.setAttribute('text-anchor', 'middle'); tagText.setAttribute('fill', AMBER);
  overlay.appendChild(tagText);
  const corridorLbl = document.createElementNS(SVGNS, 'text');
  corridorLbl.setAttribute('class', 'svglabel'); corridorLbl.setAttribute('font-size', '11.5');
  corridorLbl.setAttribute('x', '24'); corridorLbl.setAttribute('y', '536');
  corridorLbl.setAttribute('fill', 'rgba(240,234,228,.45)');
  corridorLbl.textContent = 'SIDEWAYS MOTION MEASURED · CROSSING TIME PREDICTED';
  overlay.appendChild(corridorLbl);

  const sign = document.getElementById('crossSign');

  // ---------- projection ----------
  const v3 = new THREE.Vector3();
  const VB = { w: 800, h: 560 };
  const toSvg = (x, y, z) => {
    v3.set(x, y, z).project(camera);
    return [(v3.x * 0.5 + 0.5) * VB.w, (1 - (v3.y * 0.5 + 0.5)) * VB.h];
  };
  const bbox = new THREE.Box3();

  // ---------- sizing ----------
  const fit = () => {
    const w = stage.clientWidth, h = stage.clientHeight;
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    camera.aspect = w / h; camera.updateProjectionMatrix();
  };
  fit();
  addEventListener('resize', fit);

  // ---------- loop: approach from the right, cut across, clear ----------
  const T = 9;                                       // seconds per pass
  const CROSS_Z = -9.5;
  let visible = false, rafId = 0, lastTick = 0;
  function frame(ts) {
    if (!visible) return;
    rafId = requestAnimationFrame(frame);
    if (ts - lastTick < 33) return;
    lastTick = ts;
    const t = performance.now() / 1000;
    const u = (t % T) / T;

    // stays on the asphalt: crosses curb-to-curb, fading in and out at the edges
    const X_IN = 4.35, X_OUT = -4.6;
    let x = X_IN, fade = 0;
    if (u >= 0.2 && u < 0.72) {
      const k = (u - 0.2) / 0.52;
      x = X_IN + (X_OUT - X_IN) * k;
      fade = Math.min(1, Math.min((u - 0.2) / 0.06, (0.72 - u) / 0.06));
    }
    polo.position.set(x, 0, CROSS_Z);
    polo.visible = fade > 0.01;
    for (const pm of poloMats) pm.m.opacity = pm.o * fade;

    camera.position.y = 1.38 + Math.sin(t * 2.1) * 0.005;

    // AR overlay
    const tracked = fade > 0.55;
    const inCorridor = Math.abs(x - 0.3) < 2.9;
    if (tracked) {
      bbox.setFromObject(polo);
      let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
      for (const cx of [bbox.min.x, bbox.max.x]) for (const cy of [bbox.min.y, bbox.max.y]) for (const cz of [bbox.min.z, bbox.max.z]) {
        const [sx, sy] = toSvg(cx, cy, cz);
        x0 = Math.min(x0, sx); y0 = Math.min(y0, sy); x1 = Math.max(x1, sx); y1 = Math.max(y1, sy);
      }
      const pad = 5; x0 -= pad; y0 -= pad; x1 += pad; y1 += pad;
      const L = Math.min(16, (x1 - x0) * .3);
      const d = [
        `M${x0} ${y0 + L} L${x0} ${y0} L${x0 + L} ${y0}`,
        `M${x1 - L} ${y0} L${x1} ${y0} L${x1} ${y0 + L}`,
        `M${x1} ${y1 - L} L${x1} ${y1} L${x1 - L} ${y1}`,
        `M${x0 + L} ${y1} L${x0} ${y1} L${x0} ${y1 - L}`,
      ];
      paths.forEach((pth, i) => { pth.setAttribute('d', d[i]); pth.style.display = ''; });

      // predicted crossing point at the corridor center
      const [lx, ly] = toSvg(0.3, 0.05, CROSS_Z);
      const front = x > 0.3 ? x0 : x1;               // leading edge of the box
      predLine.setAttribute('x1', front); predLine.setAttribute('y1', (y0 + y1) / 2);
      predLine.setAttribute('x2', lx); predLine.setAttribute('y2', ly);
      predPoint.setAttribute('cx', lx); predPoint.setAttribute('cy', ly);
      const show = x > 0.6 && !inCorridor;
      predLine.style.display = show ? '' : 'none';
      predPoint.style.display = show ? '' : 'none';

      const label = inCorridor ? 'CUTTING ACROSS · ALERT FIRED' : 'CAR 0.91 · VX 0.31/S · T-CROSS 1.4S';
      const col = inCorridor ? AMBER : GREEN;
      const w = label.length * 7.6 + 20;
      const cx = Math.max(w / 2 + 10, Math.min(VB.w - w / 2 - 10, (x0 + x1) / 2));
      tagBox.setAttribute('x', cx - w / 2); tagBox.setAttribute('y', y0 - 30);
      tagBox.setAttribute('width', w); tagBox.setAttribute('stroke', col);
      tagText.setAttribute('x', cx); tagText.setAttribute('y', y0 - 14);
      tagText.setAttribute('fill', col); tagText.textContent = label;
      tagBox.style.display = ''; tagText.style.display = '';
    } else {
      paths.forEach(pth => pth.style.display = 'none');
      predLine.style.display = 'none'; predPoint.style.display = 'none';
      tagBox.style.display = 'none'; tagText.style.display = 'none';
    }
    if (sign) sign.classList.toggle('on', fade > 0.5 && x < 3.2 && x > -4.2);

    renderer.render(scene, camera);
  }
  new IntersectionObserver(es => {
    visible = es[0].isIntersecting;
    cancelAnimationFrame(rafId);
    if (visible) rafId = requestAnimationFrame(frame);
  }, { threshold: 0.05 }).observe(stage);

  return {};
}
