

document.addEventListener('DOMContentLoaded', () => {


'use strict'

const menuToggle = document.querySelector('.menu-toggle');
const bxMenu = document.querySelector('.bx-menu');
const bxX = document.querySelector('.bx-x');

const navBar = document.querySelector('.navbar');

// --- open menu ---

bxMenu.addEventListener('click', (e)=> {
    if(e.target.classList.contains('bx-menu')){
        navBar.classList.add('show-navbar');
        bxMenu.classList.add('hide-bx');
        bxX.classList.add('show-bx');
    }
})

// --- close menu ---

bxX.addEventListener('click', (e)=> {
    if(e.target.classList.contains('bx-x')){
        navBar.classList.remove('show-navbar');
        bxMenu.classList.remove('hide-bx');
        bxX.classList.remove('show-bx');
    }
})

})














// THREE.JS MODELS AND SCENE SETUP


// variable for setup

let container;
let camera;
let renderer;
let scene;
let house;
let controls;


function init () {
    
    container = document.querySelector('.scene');


    // create scene
    scene = new THREE.Scene();


    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 500;
//renderer
    renderer = new THREE.WebGLRenderer({antialias:true, alpha:true,});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.shadowMap.enabled = true;




    container.appendChild(renderer.domElement);


//camera setup
    camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
    camera.position.set(0,15,40);


    //controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    // controls.rotateSpeed = 3.0;
    // controls.zoomSpeed = 6.8;
    // controls.panSpeed = 9.0;
    // controls.noZoom = false;
    // controls.noPan = false;
    // controls.staticMoving = true;
    // controls.dynamicDampingFactor = 0.3;
    // controls.keys = [ 65, 83, 68 ];
    // controls.addEventListener('change', render);

    //lighting

    // const ambient = new THREE.AmbientLight(0x404040, 1);
    // scene.add(ambient);
    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.color.setHSL( 0.1, 1, 0.95 );
    light.position.set( - 1, 1.75, 1 );
    light.position.multiplyScalar( 30 );
    // light.position.set (10, 10, 30);
    scene.add(light);


    light.castShadow = true;

    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;

    const d = 50;

    light.shadow.camera.left = - d;
    light.shadow.camera.right = d;
    light.shadow.camera.top = d;
    light.shadow.camera.bottom = - d;

    light.shadow.camera.far = 3500;
    light.shadow.bias = - 0.0001;

    

    const hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 1);
    hemiLight.color.setHSL( 0.6, 1, 0.6 );
    hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
    hemiLight.position.set( 0, 50, 0 );
    scene.add(hemiLight);






//Shadow Casting


























    
    // LOAD MODEL

    let loader = new THREE.GLTFLoader();
    loader.load('./src/3D/House.gltf', function(gltf){
        scene.add(gltf.scene);
        house = gltf.scene.children[0];
        animate();
    });


}

function animate(){
    requestAnimationFrame(animate);
    house.rotation.y += 0.005;
    controls.update();

    // renderer.render(scene, camera,);
    renderer.render(scene, camera,)
}

init();


// gallery function

const galleryItem = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);

document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightBox(n) {
    if (n > galleryItem.length) {
        index = 1;
    } else if (n < 1) {
        index = galleryItem.length;
    }
    let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
    lightBoxContainer.style.display = "block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}
for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}

function slideImage(n) {
    showLightBox(index += n);
}
function prevImage() {
    slideImage(-1);
}
function nextImage() {
    slideImage(1);
}
lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox() {
    if (this === event.target) {
        lightBoxContainer.style.display = "none";
    }
}
lightBoxContainer.addEventListener("click", closeLightBox);
