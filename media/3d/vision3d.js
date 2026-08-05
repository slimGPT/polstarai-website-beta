/* ADAS vision-stack live 3D scene.
 * Same dusk world as the carpet scene, composed like the layer diagram:
 * lead Range Rover ahead, Kia in the left lane, Polo cutting from the right,
 * pedestrian on the left sidewalk. The SVG on top draws the AR overlay
 * (brackets + labels) from real 3D projections, and swaps content per layer.
 * Loads lazily; on failure the original SVG diagram remains. */

import * as THREE from 'three';
import { GLTFLoader } from './vendor/loaders/GLTFLoader.js';
import { MeshoptDecoder } from './vendor/meshopt_decoder.module.js';

const SVGNS = 'http://www.w3.org/2000/svg';
const C = { g: '#5fc998', a: '#d9a05f', dim: 'rgba(240,234,228,.45)' };

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
  camera.lookAt(0, 1.1, -30);

  // dusk sky, same recipe as the carpet scene for visual continuity
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
  const [roadG, rrG, kiaG, poloG, manG] = await Promise.all([
    load(base + 'road.glb'), load(base + 'rangerover.glb'), load(base + 'kia.glb'),
    load(base + 'polo.glb'), load(base + 'man.glb'),
  ]);
  const prep = gltf => { const o = gltf.scene; o.traverse(n => { if (n.isMesh && n.material && n.material.transparent && n.material.opacity < 0.05) n.visible = false; }); return o; };

  // road tiles, scrolling slowly toward the camera
  const roadProto = prep(roadG);
  roadProto.rotation.y = Math.PI / 2;
  const tiles = [];
  for (let i = 0; i < 3; i++) {
    const t = i === 0 ? roadProto : roadProto.clone(true);
    t.position.set(0, 0, -54 * i + 14);
    scene.add(t); tiles.push(t);
  }

  // actors, composed like the layer diagram
  const lead = prep(rrG); lead.rotation.y = Math.PI;
  lead.position.set(0.3, 0, -12.5); scene.add(lead);

  const kia = prep(kiaG); kia.rotation.y = Math.PI;
  kia.position.set(-3.7, 0, -27); scene.add(kia);

  const polo = prep(poloG);
  polo.rotation.y = Math.PI / 2;                    // side profile, nosing left
  polo.position.set(4.9, 0, -16); scene.add(polo);

  const man = prep(manG);
  man.rotation.y = Math.PI / 2.6;                   // facing the street from the left
  man.position.set(-4.8, 0, -16); scene.add(man);

  // ---------- AR overlay drawn into the existing SVG ----------
  const svg = stage.querySelector('svg');
  const VB = { w: 800, h: 560 };
  const overlay = document.createElementNS(SVGNS, 'g');
  overlay.setAttribute('id', 'visAR');
  svg.appendChild(overlay);

  const mkActor = () => {
    const grp = document.createElementNS(SVGNS, 'g');
    const paths = [];
    for (let i = 0; i < 4; i++) {
      const p = document.createElementNS(SVGNS, 'path');
      p.setAttribute('fill', 'none'); p.setAttribute('stroke-width', '2.2');
      grp.appendChild(p); paths.push(p);
    }
    const box = document.createElementNS(SVGNS, 'rect');
    box.setAttribute('rx', '4'); box.setAttribute('height', '20');
    box.setAttribute('fill', 'rgba(8,8,18,.85)'); box.setAttribute('stroke-width', '1');
    const txt = document.createElementNS(SVGNS, 'text');
    txt.setAttribute('class', 'svglabel'); txt.setAttribute('font-size', '13');
    txt.setAttribute('text-anchor', 'middle');
    grp.appendChild(box); grp.appendChild(txt);
    overlay.appendChild(grp);
    return { grp, paths, box, txt };
  };
  const actors = [
    { obj: lead, ui: mkActor(), l1: ['CAR 0.96', C.g], l2: ['#7 CAR ΔA +0.42/S', C.g], l3: ['TRACK #7 · RADIAL', C.a] },
    { obj: kia,  ui: mkActor(), l1: ['CAR 0.83', C.g], l2: ['#3 CAR ΔA -0.05/S', C.g], l3: null },
    { obj: polo, ui: mkActor(), l1: ['CAR 0.91', C.g], l2: ['#12 CAR VX 0.31/S ←', C.a], l3: null },
    { obj: man,  ui: mkActor(), l1: ['PERSON 0.88', C.g], l2: ['#9 PERSON VX 0.08/S', C.g], l3: null },
  ];
  // motion vector for the cutting Polo, layer 2 only
  const vec = document.createElementNS(SVGNS, 'g');
  const vline = document.createElementNS(SVGNS, 'line');
  vline.setAttribute('stroke', C.a); vline.setAttribute('stroke-width', '3');
  const vhead = document.createElementNS(SVGNS, 'polygon');
  vhead.setAttribute('fill', C.a);
  vec.appendChild(vline); vec.appendChild(vhead);
  overlay.appendChild(vec);
  // per-layer bottom caption
  const cap = document.createElementNS(SVGNS, 'text');
  cap.setAttribute('class', 'svglabel'); cap.setAttribute('font-size', '11.5');
  cap.setAttribute('x', '24'); cap.setAttribute('y', '536'); cap.setAttribute('fill', C.dim);
  overlay.appendChild(cap);
  const captions = [
    'BOXES + CLASSES + CONFIDENCE · NO MEMORY, NO MOTION',
    'IDENTITY ACROSS FRAMES · 900 MS HISTORY PER TRACK',
    '',
  ];

  let layer = 0;
  const setLayer = idx => { layer = idx; };

  // ---------- projection ----------
  const v3 = new THREE.Vector3();
  const toSvg = (x, y, z) => {
    v3.set(x, y, z).project(camera);
    return [(v3.x * 0.5 + 0.5) * VB.w, (1 - (v3.y * 0.5 + 0.5)) * VB.h];
  };
  const bbox = new THREE.Box3();
  function drawActor(a) {
    const spec = layer === 0 ? a.l1 : layer === 1 ? a.l2 : a.l3;
    if (!spec) { a.ui.grp.style.display = 'none'; return; }
    a.ui.grp.style.display = '';
    bbox.setFromObject(a.obj);
    let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
    for (const cx of [bbox.min.x, bbox.max.x]) for (const cy of [bbox.min.y, bbox.max.y]) for (const cz of [bbox.min.z, bbox.max.z]) {
      const [sx, sy] = toSvg(cx, cy, cz);
      x0 = Math.min(x0, sx); y0 = Math.min(y0, sy); x1 = Math.max(x1, sx); y1 = Math.max(y1, sy);
    }
    const pad = 5; x0 -= pad; y0 -= pad; x1 += pad; y1 += pad;
    const L = Math.min(16, (x1 - x0) * .3);
    const col = spec[1];
    const d = [
      `M${x0} ${y0 + L} L${x0} ${y0} L${x0 + L} ${y0}`,
      `M${x1 - L} ${y0} L${x1} ${y0} L${x1} ${y0 + L}`,
      `M${x1} ${y1 - L} L${x1} ${y1} L${x1 - L} ${y1}`,
      `M${x0 + L} ${y1} L${x0} ${y1} L${x0} ${y1 - L}`,
    ];
    a.ui.paths.forEach((p, i) => { p.setAttribute('d', d[i]); p.setAttribute('stroke', col); });
    const cx = (x0 + x1) / 2;
    const label = spec[0];
    const w = label.length * 7.4 + 18;
    a.ui.box.setAttribute('x', cx - w / 2); a.ui.box.setAttribute('y', y0 - 27);
    a.ui.box.setAttribute('width', w); a.ui.box.setAttribute('stroke', col);
    a.ui.txt.setAttribute('x', cx); a.ui.txt.setAttribute('y', y0 - 12.5);
    a.ui.txt.setAttribute('fill', col); a.ui.txt.textContent = label;
    return { x0, y0, x1, y1 };
  }

  // ---------- sizing ----------
  const fit = () => {
    const w = stage.clientWidth, h = stage.clientHeight;
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    camera.aspect = w / h; camera.updateProjectionMatrix();
  };
  fit();
  addEventListener('resize', fit);

  // ---------- idle loop, ~30 fps, only while visible ----------
  let visible = false, rafId = 0, lastTick = 0, lastT = performance.now();
  function frame(ts) {
    if (!visible) return;
    rafId = requestAnimationFrame(frame);
    if (ts - lastTick < 33) return;
    lastTick = ts;
    const now = performance.now();
    const dt = Math.min(0.1, (now - lastT) / 1000); lastT = now;
    const t = now / 1000;

    // world life: road slides back, Polo noses toward the lane, pedestrian sways
    for (const tile of tiles) {
      tile.position.z += 4.6 * dt;
      if (tile.position.z > 14 + 54) tile.position.z -= 54 * 3;
    }
    polo.position.x = 4.9 - (Math.sin(t * 0.45) * 0.5 + 0.5) * 1.0;
    lead.position.z = -12.5 + Math.sin(t * 0.5) * 0.5;
    kia.position.z = -27 + Math.sin(t * 0.4 + 2) * 1.2;
    man.rotation.y = Math.PI / 2.6 + Math.sin(t * 0.7) * 0.05;
    camera.position.y = 1.38 + Math.sin(t * 2.1) * 0.005;

    // overlay
    let poloBox = null;
    for (const a of actors) { const r = drawActor(a); if (a.obj === polo) poloBox = r; }
    if (layer === 1 && poloBox) {
      vec.style.display = '';
      const midY = (poloBox.y0 + poloBox.y1) / 2;
      const xEnd = poloBox.x0 - 8, xTip = poloBox.x0 - 66;
      vline.setAttribute('x1', xEnd); vline.setAttribute('y1', midY);
      vline.setAttribute('x2', xTip + 10); vline.setAttribute('y2', midY);
      vhead.setAttribute('points', `${xTip},${midY} ${xTip + 13},${midY - 6.5} ${xTip + 13},${midY + 6.5}`);
    } else vec.style.display = 'none';
    cap.textContent = captions[layer];

    renderer.render(scene, camera);
  }
  new IntersectionObserver(es => {
    visible = es[0].isIntersecting;
    cancelAnimationFrame(rafId);
    if (visible) { lastT = performance.now(); rafId = requestAnimationFrame(frame); }
  }, { threshold: 0.05 }).observe(stage);

  return { setLayer };
}
