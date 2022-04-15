import './style.css'
import * as THREE from 'three';
import { OrbitControls }  from 'three/examples/jsm/controls/OrbitControls';

// Setup 

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Torus
// const torusTexture = new THREE.TextureLoader().load('clouds.jpg');
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100) 
const material = new THREE.MeshStandardMaterial( { color:  0x000037 } );
// const material = new THREE.MeshBasicMaterial( { map: torusTexture } );
const torus = new THREE.Mesh ( geometry, material );

scene.add(torus)

// Light

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)


// Helpers 

// const lighHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lighHelper, gridHelper)

// const contols = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial( { color: 0xffffff })
  const star = new THREE.Mesh( geometry, material );

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star)
}

Array(200).fill().forEach(addStar)

// Background

const spaceTexture = new THREE.TextureLoader().load('./img/space.jpg');
scene.background = spaceTexture;


// Avatar

const vladTexture = new THREE.TextureLoader().load('./img/vlad.jpg');

const vlad = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial( { map: vladTexture } )
);

scene.add(vlad);
vlad.position.z = -5;
vlad.position.x = 2.1;


// Moon 

const moonMaterial = new THREE.TextureLoader().load('./img/moon.jpg');
const normalTexture = new THREE.TextureLoader().load('./img/normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial( { 
    map: moonMaterial,
    normalMap: normalTexture
  } )
);

scene.add(moon);

moon.position.z = 30;
moon.position.setX(-10); 

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  vlad.rotation.y += 0.01;
  vlad.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  moon.rotation.x += 0.005;
  // contols.update();

  renderer.render(scene, camera);
}

animate();