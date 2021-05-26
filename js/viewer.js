
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128/examples/jsm/controls/OrbitControls.js';
import {panTo, setUp, loadScene} from './utils.js'


//Scene setup
const parent = document.querySelector("#viewer");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, parent.clientWidth / parent.clientHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize( parent.clientWidth, parent.clientHeight );
parent.appendChild( renderer.domElement );
scene.background = new THREE.Color("honeydew");



// Controls Setup
let controls = new OrbitControls( camera, renderer.domElement );
controls.listenToKeyEvents( window );
controls.enableDamping = false;
controls.autoRotate = false;
controls.screenSpacePanning = false;
controls.minDistance = 1;
controls.maxDistance = 500;
controls.maxPolarAngle = Math.PI / 2;


// Loading 3d model
loadScene('car2', scene, camera, controls);

//Animation loop
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
setInterval(() => console.log(camera.position, camera.rotation, controls.target), 2000);
animate();
// Window Resize
window.addEventListener('resize', () => {
    camera.aspect = parent.clientWidth/ parent.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( parent.clientWidth, parent.clientHeight )}
    );

// Adding button listeners
//document.querySelector("#step1").addEventListener('click', () => panTo(camera, controls, {x: 21.305861013563785, y: 3.1470360188899256, z: -7.159951687844143}, {x: -1.4723627411228204, y: 1.427408309892077, z: 1.4713487779361596}, {x: -3.8691702574858544, y: 3.8218955457449056e-18, z: -6.98511936510537}));