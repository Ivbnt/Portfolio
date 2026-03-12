import * as THREE from 'https://unpkg.com/three@0.165.0/build/three.module.js';

const container = document.querySelector('#bg3d');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

// Camera
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(
  35,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.set(0, 0, 15);
scene.add(camera);

// Renderer
const canvas = document.createElement('canvas');
container.appendChild(canvas);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Lumière douce
const light = new THREE.DirectionalLight(0xffffff, 1.2);
light.position.set(5, 10, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff, 0.6));

// Créer plusieurs cubes "cadres" - augmenté à 25 pour couvrir toute la page
const cubes = [];
const geom = new THREE.BoxGeometry(1.4, 1.4, 0.2);
const mat = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 0.2,
  roughness: 0.3,
});

for (let i = 0; i < 25; i++) {
  const cube = new THREE.Mesh(geom, mat);
  cube.position.x = (Math.random() - 0.5) * 30;
  cube.position.y = (Math.random() - 0.5) * 25;
  cube.position.z = (Math.random() - 0.5) * 15;
  cube.rotation.x = Math.random() * Math.PI;
  cube.rotation.y = Math.random() * Math.PI;
  scene.add(cube);
  cubes.push(cube);
}

// Scroll
let scrollY = window.scrollY;

window.addEventListener('scroll', () => {
  scrollY = window.scrollY;
});

// Resize
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

// Animation
const clock = new THREE.Clock();

function tick() {
  const elapsed = clock.getElapsedTime();

  const scrollFactor = scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  camera.position.y = -scrollFactor * 8;

  cubes.forEach((cube, i) => {
    const speed = 0.1 + i * 0.01;
    cube.rotation.x += speed * 0.01;
    cube.rotation.y += speed * 0.008;

    cube.position.y += Math.sin(elapsed * 0.3 + i) * 0.001;
  });

  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

tick();
