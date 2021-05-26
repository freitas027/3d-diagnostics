import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader} from 'https://cdn.skypack.dev/three@0.128/examples/jsm/loaders/DRACOLoader.js';
export function panTo(camera, controls, position, rotation, target){
    camera.position.set(position.x,position.y,position.z);
    camera.rotation.set(rotation.x,rotation.y,rotation.z);
    camera.updateProjectionMatrix();
    controls.target.set(target.x, target.y, target.z);
    controls.update();
}
const DRACOpath = "https://cdn.skypack.dev/three@0.128/examples/js/libs/draco/";

export function addLight(){

}

export function setUp(scene, options){
    const ambLight = new THREE.AmbientLight(0xFFFFFF);
    scene.add(ambLight);
    const INTENSITY = options.lightIntensity;
    for (let lightPos of options.lights){
        let light = new THREE.PointLight( 0x404040, INTENSITY, 100 );
        light.position.set(...lightPos);
        scene.add( light );
    }
    
}

export function addSteps(cards, camera, controls){
    const stepHolder = document.querySelector("#stepHolder");
    let fullStepList = "";

    // Adding HTML elements
    for (let i in cards){
        const template = `
    <div class="row justify-content-center">
    <a id="step${i}" class="btn btn-info ml-2 mr-2 mt-2 flex-grow-1" data-toggle="collapse" href="#collapseStep${i}" role="button" aria-expanded="false" aria-controls="collapseStep${i}">
        ${i}. ${cards[i].title}
    </a>
    </div>
    <div class="collapse row ml-2 mr-2 mt-2" id="collapseStep${i}">
        <div class="card card-body col-md-12 m-2">
            ${cards[i].description}
        </div>
    </div>`;
        
        fullStepList += template;
    }
    let nodes = $.parseHTML(fullStepList);
    $("#stepHolder").empty();
    $("#stepHolder").append(nodes);
    //stepHolder.innerHTML = fullStepList;
    // Adding Events
    $("#document").ready( () => {
        for (let i in cards){
            const {cam: {position, rotation, target}} = cards[i];
            console.log(cards[i]);
            console.log(position, rotation, target);
            let expanded = false;
            
            $("#step"+i).on('click', () => {
                expanded = !expanded;
                if (expanded){
                    panTo(camera, controls, position, rotation, target);
                }
            });
        }
    });
    
}



export async function loadScene(object, scene, camera, controls){
    while(scene.children.length > 0){ 
        scene.remove(scene.children[0]); 
    }
    const manager = new THREE.LoadingManager();
    manager.onStart = function ( url, itemsLoaded, itemsTotal ){
        $("#viewerMsg").text("Loading...");
    }
    manager.onLoad = function (){
        $("#viewerMsg").text("Click and hold to rotate");
    }
    const loader = new GLTFLoader( manager );
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(DRACOpath);
    loader.setDRACOLoader( dracoLoader );
    const objectPath = `3d/${object}/scene.gltf`;
    const loaderPath = `../3d/${object}/load.js`
    const {options, cards} = await import(loaderPath);
    addSteps(cards, camera, controls);
    loader.load( objectPath, function ( gltf ) {
        gltf.scene.scale.set(...options.scale);
        scene.add( gltf.scene);
        setUp(scene, options);
        const {position, rotation, target} = options.initialCam;
        panTo(camera, controls, position, rotation, target);
        
    }, undefined, function ( error ) {

        console.error( error );

    } );
}