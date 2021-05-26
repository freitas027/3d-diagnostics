import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128/examples/jsm/controls/OrbitControls.js';
const parent = document.querySelector("#viewer");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, parent.clientWidth / parent.clientHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize( parent.clientWidth, parent.clientHeight );
parent.appendChild( renderer.domElement );

scene.background = new THREE.Color(0xFFFFFF);

const loader = new GLTFLoader();

loader.load( '3d/scene.gltf', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
let controls = new OrbitControls( camera, renderer.domElement );
controls.listenToKeyEvents( window );
controls.enableDamping = false; // an animation loop is required when either damping or auto-rotation are enabled

controls.autoRotate = false;
controls.screenSpacePanning = false;

controls.minDistance = 5;
controls.maxDistance = 500;

controls.maxPolarAngle = Math.PI / 2;


function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
setInterval(() => console.log(camera.position, camera.rotation, controls.target), 2000);
animate();

function panTo(position, rotation, target){
    console.enabled = false;
    camera.position.x = position.x;
    camera.position.y = position.y;
    camera.position.z = position.z;
    camera.rotation.x = rotation.x;
    camera.rotation.y = rotation.y;
    camera.rotation.z = rotation.z;
    camera.updateProjectionMatrix();
    controls.target.set(target.x, target.y, target.z);
    controls.update();
    controls.enabled=true;
}

document.querySelector("#step1").addEventListener('click', () => panTo({x: 21.305861013563785, y: 3.1470360188899256, z: -7.159951687844143}, {x: -1.4723627411228204, y: 1.427408309892077, z: 1.4713487779361596}, {x: -3.8691702574858544, y: 3.8218955457449056e-18, z: -6.98511936510537}));
window.addEventListener('resize', () => {
    camera.aspect = parent.clientWidth/ parent.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( parent.clientWidth, parent.clientHeight )}
    );