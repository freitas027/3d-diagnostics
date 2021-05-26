
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128/examples/jsm/controls/OrbitControls.js';
import {loadScene} from './utils.js'


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

// Adding callbacks to change of scene
$("document").ready(() => {
    $("#scene1").click(() => {
        loadScene('engine', scene, camera, controls);
    });
    $("#scene2").click(() => {
        loadScene('disel-eng', scene, camera, controls);
    });
});