

// THREE.JS MODELS AND SCENE SETUP


// variable for setup

let container;
let camera;
let renderer;
let scene;
let house;
let controls;


function init () {
    
    container = document.querySelector('.scene2');


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

    container.appendChild(renderer.domElement);


//camera setup
    camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
    camera.position.set(0,25,65);


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

    const ambient = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambient);
    // const light = new THREE.DirectionalLight(0xffffff, 5)
    // light.position.set (10, 10, 30);

    const hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 1);
    scene.add(hemiLight);

    
    // LOAD MODEL

    let loader = new THREE.GLTFLoader();
    loader.load('./src/3D/House2.gltf', function(gltf){
        scene.add(gltf.scene);
        house = gltf.scene.children[0];
        animate();
    });


}

function animate(){
    requestAnimationFrame(animate);
    house.rotation.y += 0.005;
    controls.update();
    renderer.render(scene, camera,)
}

init();






















//variable for setup

let container2;
let camera2;
let renderer2;
let scene2;
let house2;
let controls2;


function init2 () {
    
    container2 = document.querySelector('.scene2');


    // create scene
    scene2 = new THREE.scene2();


    const fov = 35;
    const aspect = container2.clientWidth / container2.clientHeight;
    const near = 0.1;
    const far = 500;
//renderer
    renderer2 = new THREE.WebGLRenderer({antialias:true, alpha:true,});
    renderer2.setSize(container2.clientWidth, container.clientHeight);
    renderer2.setPixelRatio(window.devicePixelRatio);

    container2.appendChild(renderer.domElement2);


//camera setup
    camera2 = new THREE.PerspectiveCamera(fov,aspect,near,far);
    camera2.position.set(0,15,40);


    //controls
    controls2 = new THREE.OrbitControls(camera2, renderer2.domElement2);
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

    const ambient2 = new THREE.AmbientLight(0x404040, 3);
    scene2.add(ambient2);
    // const light = new THREE.DirectionalLight(0xffffff, 5)
    // light.position.set (10, 10, 30);

    const hemiLight2 = new THREE.HemisphereLight(0xffeeb1, 0x080820, 1);
    scene2.add(hemiLight2);

    
    // LOAD MODEL

    let loader2 = new THREE.GLTFLoader();
    loader2.load('./src/3D/House.gltf', function(gltf){
        scene.add(gltf.scene2);
        house2 = gltf2.scene2.children[0];
        animate();
    });


}

function animate2(){
    requestAnimationFrame(animate2);
    house2.rotation.y += 0.005;
    controls2.update();
    renderer2.render(scene2, camera2,)
}

init2();







//resize to window size

function onWindowResize () {
    camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth,container.clientHeight);
}

window.addEventListener("resize", onWindowResize);




