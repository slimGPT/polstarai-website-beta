/* ADAS carpet-section live 3D scene.
 * Loads lazily; on failure or unsupported devices the SVG scene remains.
 * All tunable composition constants live in CFG below: adjust, refresh, done. */

import * as THREE from 'three';
import { GLTFLoader } from './vendor/loaders/GLTFLoader.js';
import { MeshoptDecoder } from './vendor/meshopt_decoder.module.js';

const CFG = {
  // camera = dashcam
  camHeight: 1.32, camFov: 54, camX: 1.65,       // camX: right-lane center
  // road placement (rotated so its 54 m length runs along Z)
  roadYaw: Math.PI / 2, roadX: 0, tiles: 3,
  // actors (x positions in meters; +x = right of camera)
  kiaX: -1.75,                                    // oncoming lane
  poloX: 3.55, poloZ: -20,                        // parked at right curb
  manX: 4.45, manZ: -17.5,                        // on the sidewalk near the Polo
  // lead distance mapping (m ahead of camera) vs scroll progress
  leadFar: 38, leadMid: 15, leadNear: 7.6,
  laneHalf: 1.55, carpetNear: 5.5,               // AR carpet geometry (m)
  // per-car fixes: yaw so local +Z (front) matches travel; plate anchors
  cars: {
    rangerover: { rearPlate: { y: 0.92, z: -2.47 }, frontPlate: { y: 0.52, z: 2.47 }, tail: { x: 0.72, y: 0.98, z: -2.42 } },
    kia:        { rearPlate: { y: 0.88, z: -2.29 }, frontPlate: { y: 0.50, z: 2.31 }, tail: { x: 0.78, y: 0.92, z: -2.24 } },
    polo:       { rearPlate: { y: 0.82, z: -1.94 }, frontPlate: { y: 0.46, z: 2.01 }, tail: { x: 0.68, y: 0.86, z: -1.90 } },
  },
  grades: [0.45, 0.78],                          // amber / red thresholds (match page logic)
  palette: { sky: 0x9e93a4, rose: 0xd0a8a5, ember: 0xe8a05f, ground: 0x171109, fog: 0x3a2b24 },
};

const stopDist = v => Math.max(12, Math.round(v / 3.6 * 1.2 + (v / 3.6) ** 2 / (2 * 6.5)));

export async function init(stage, svg) {
  const canvas = document.createElement('canvas');
  canvas.className = 'gl3d';
  stage.insertBefore(canvas, stage.firstChild);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(CFG.palette.fog, 26, 100);

  const camera = new THREE.PerspectiveCamera(CFG.camFov, 1, 0.1, 220);
  camera.position.set(CFG.camX, CFG.camHeight, 0);
  camera.lookAt(CFG.camX, CFG.camHeight - 0.06, -30);

  // ---- dusk sky: generated equirect, used as background + PBR environment ----
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
  // sun glow smudge on the horizon ahead
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

  // ---- lights: low sunset ahead (backlit tails), soft hemisphere fill ----
  const sun = new THREE.DirectionalLight(0xffb27a, 2.4);
  sun.position.set(6, 4.2, -60);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  const sc = sun.shadow.camera;
  sc.left = -30; sc.right = 30; sc.top = 30; sc.bottom = -10; sc.far = 140;
  sun.shadow.bias = -0.0004;
  scene.add(sun, sun.target);
  sun.target.position.set(0, 0, 0);
  scene.add(new THREE.HemisphereLight(0x9e93a4, 0x241a12, 0.55));

  // ---- loaders ----
  const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
  const load = url => new Promise((res, rej) => loader.load(url, res, undefined, rej));
  const base = 'media/3d/';
  const [roadG, rrG, kiaG] = await Promise.all([
    load(base + 'road.glb'), load(base + 'rangerover.glb'), load(base + 'kia.glb'),
  ]);

  const prep = (gltf, { shadow = true, receive = false } = {}) => {
    const o = gltf.scene;
    o.traverse(n => {
      if (n.isMesh) {
        n.castShadow = shadow; n.receiveShadow = receive;
        if (n.material && n.material.transparent && n.material.opacity < 0.05) n.visible = false;
      }
    });
    return o;
  };

  // ---- road tiles ----
  const roadProto = prep(roadG, { shadow: false, receive: true });
  roadProto.rotation.y = CFG.roadYaw;
  const roadTiles = [];
  for (let i = 0; i < CFG.tiles; i++) {
    const t = i === 0 ? roadProto : roadProto.clone(true);
    t.position.set(CFG.roadX, 0, -54 * i + 14);
    scene.add(t); roadTiles.push(t);
  }

  // ---- cars ----
  const lead = prep(rrG);                          // Range Rover, driving away
  lead.rotation.y = Math.PI;                       // local +Z front -> world -Z
  scene.add(lead);

  const kia = prep(kiaG);                          // oncoming
  kia.position.x = CFG.kiaX;
  scene.add(kia);

  // ---- sizing ----
  const fit = () => {
    const w = stage.clientWidth, h = stage.clientHeight;
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    camera.aspect = w / h; camera.updateProjectionMatrix();
  };
  fit();
  addEventListener('resize', fit);

  // ---- screen-space projection for the SVG AR overlay ----
  const VB = { w: 900, h: 560 };                   // svg viewBox
  const v3 = new THREE.Vector3();
  const toSvg = (x, y, z) => {
    v3.set(x, y, z).project(camera);
    return [(v3.x * 0.5 + 0.5) * VB.w, (1 - (v3.y * 0.5 + 0.5)) * VB.h, v3.z < 1];
  };
  const leadBox = new THREE.Box3();

  // ---- per-frame state ----
  let progress = 0, lastGrade = 0, renderQueued = false, lastT = performance.now();

  function applyProgress(p) {
    progress = p;
    const grade = p < CFG.grades[0] ? 0 : p < CFG.grades[1] ? 1 : 2;
    const v = 28 + p * 82;
    const dStop = stopDist(v);

    // ego motion: the road slides toward the camera at the displayed speed
    const now = performance.now();
    const dt = Math.min(0.1, (now - lastT) / 1000); lastT = now;
    const egoMs = (v / 3.6) * 0.55;                 // visually comfortable scale
    for (const tile of roadTiles) {
      tile.position.z += egoMs * dt;
      if (tile.position.z > 14 + 54) tile.position.z -= 54 * CFG.tiles;
    }

    // lead distance: fast approach, then pressure, then brake hold
    let dist;
    if (p < CFG.grades[0]) dist = CFG.leadFar + (CFG.leadMid - CFG.leadFar) * (p / CFG.grades[0]);
    else if (p < CFG.grades[1]) dist = CFG.leadMid + (9.2 - CFG.leadMid) * ((p - CFG.grades[0]) / (CFG.grades[1] - CFG.grades[0]));
    else dist = 9.2 + (CFG.leadNear - 9.2) * ((p - CFG.grades[1]) / (1 - CFG.grades[1]));
    lead.position.set(CFG.camX, 0, -dist);

    // brake dive in the red zone
    const braking = grade === 2;
    lead.rotation.x = braking ? -0.021 : 0;

    // oncoming Kia: keeps driving on its own clock, plus scroll pressure
    const kt = ((performance.now() / 9000) + p * 0.7) % 1;
    kia.position.z = -75 + kt * 95;
    kia.visible = kia.position.z < 6;

    // idle life: pedestrian sway, camera micro-motion
    const t = performance.now() / 1000;
    camera.position.y = CFG.camHeight + Math.sin(t * 2.1) * 0.006 + (braking ? -0.012 : 0);
    camera.position.x = CFG.camX + Math.sin(t * 1.3) * 0.004;

    // ---- drive the SVG AR overlay from real projections ----
    if (svg) {
      const far = Math.min(dStop, dist - 1.2);
      const [ax, ay] = toSvg(CFG.camX - CFG.laneHalf * 0.62, 0.02, -far);
      const [bx, by] = toSvg(CFG.camX + CFG.laneHalf * 0.62, 0.02, -far);
      const [cx2, cy2] = toSvg(CFG.camX + CFG.laneHalf, 0.02, -CFG.carpetNear);
      const [dx, dy] = toSvg(CFG.camX - CFG.laneHalf, 0.02, -CFG.carpetNear);
      svg.carpet.setAttribute('points', `${ax},${ay} ${bx},${by} ${cx2},${cy2} ${dx},${dy}`);
      svg.edge.setAttribute('x1', ax); svg.edge.setAttribute('y1', ay);
      svg.edge.setAttribute('x2', bx); svg.edge.setAttribute('y2', by);
      svg.meters.setAttribute('x', (ax + bx) / 2); svg.meters.setAttribute('y', ay - 12);

      leadBox.setFromObject(lead);
      const corners = [
        [leadBox.min.x, leadBox.min.y, leadBox.max.z], [leadBox.max.x, leadBox.min.y, leadBox.max.z],
        [leadBox.min.x, leadBox.max.y, leadBox.max.z], [leadBox.max.x, leadBox.max.y, leadBox.max.z],
        [leadBox.min.x, leadBox.min.y, leadBox.min.z], [leadBox.max.x, leadBox.max.y, leadBox.min.z],
      ];
      let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
      for (const c of corners) {
        const [sx, sy] = toSvg(c[0], c[1], c[2]);
        x0 = Math.min(x0, sx); y0 = Math.min(y0, sy); x1 = Math.max(x1, sx); y1 = Math.max(y1, sy);
      }
      const pad = 6; x0 -= pad; y0 -= pad; x1 += pad; y1 += pad;
      const L = 18;
      svg.br[0].setAttribute('d', `M${x0} ${y0 + L} L${x0} ${y0} L${x0 + L} ${y0}`);
      svg.br[1].setAttribute('d', `M${x1 - L} ${y0} L${x1} ${y0} L${x1} ${y0 + L}`);
      svg.br[2].setAttribute('d', `M${x1} ${y1 - L} L${x1} ${y1} L${x1 - L} ${y1}`);
      svg.br[3].setAttribute('d', `M${x0 + L} ${y1} L${x0} ${y1} L${x0} ${y1 - L}`);
      const cx = (x0 + x1) / 2;
      svg.tagBox.setAttribute('x', cx - 84); svg.tagBox.setAttribute('y', y0 - 30);
      svg.tagText.setAttribute('x', cx); svg.tagText.setAttribute('y', y0 - 15.5);
    }
    lastGrade = grade;
    if (!renderQueued) { renderQueued = true; requestAnimationFrame(draw); }
  }

  function draw() {
    renderQueued = false;
    renderer.render(scene, camera);
  }

  // idle animation loop, active only while the stage is on screen
  let visible = false, rafId = 0, lastIdle = 0;
  const idle = (ts) => {
    if (!visible) return;
    if (!ts || ts - lastIdle >= 33) { lastIdle = ts || 0; applyProgress(progress); }
    rafId = requestAnimationFrame(idle);
  };
  new IntersectionObserver(es => {
    visible = es[0].isIntersecting;
    cancelAnimationFrame(rafId);
    if (visible) idle();
  }, { threshold: 0.05 }).observe(stage);

  applyProgress(0);
  return { update: applyProgress };
}
