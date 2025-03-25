// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models

let scene, camera, renderer, cube, circle;
let sceneContainer = document.querySelector("#scene-container");

function init(){
    // ~~~~~~~~~~~~~~~~Create scene here~~~~~~~~~~~~~~~~
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, sceneContainer.clientWidth/sceneContainer.clientHeight, 0.1, 100);


    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
    renderer.setAnimationLoop( animate );
    sceneContainer.appendChild(renderer.domElement); //problem is here!!!!!!
    //the thing wont render, or maybe it moved by something....



    // lights

    const light = new THREE.DirectionalLight(0xFFFFF, 3);
    light.position.set(3,4,5);
    scene.add(light);

    const helper = new THREE.DirectionalLightHelper(light, 5);
    scene.add(helper);

    //additional directional light
    const lightleft = new THREE.DirectionalLight(0xff0000, 3);
    lightleft.position.set(-3,4,5);
    scene.add(lightleft);

    const helperLeft = new THREE.DirectionalLightHelper(lightleft, 5);
    scene.add(helperLeft);




    // ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
    const controls = new OrbitControls(camera, renderer.domElement);
    const loader = new GLTFLoader(); // to load 3d models
    
    loader.load("./assets/dog_shiny.gltf", function(gltf){
        const dog = gltf.scene;
        scene.add(dog)
        dog.position.set(0, 0, 0); 
    })
    // →→→→→→ Follow next steps in tutorial: // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

    const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
    const cubeTexture = new THREE.TextureLoader().load("./textures/checkers.jpg");
    const cubeMaterial = new THREE.MeshBasicMaterial({map:cubeTexture});
    cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
    scene.add( cube );

    const circleGeometry = new THREE.CircleGeometry( 5, 32 );
    const circleTexture = new THREE.TextureLoader().load("./textures/grass.jpg");
    const circleMaterial = new THREE.MeshBasicMaterial({map:circleTexture});
    circle = new THREE.Mesh( circleGeometry, circleMaterial );
    circle.position.set(0,-3,-2);
    scene.add( circle );

    camera.position.z = 5;


}



function animate() {
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

    //circle.rotation.z += 0.01;
	renderer.render( scene, camera );

}

function onWindowResize(){
    camera.aspect = sceneContainer.clientWidth, sceneContainer.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
}

window.addEventListener('resize', onWindowResize, false );

init();
animate();

