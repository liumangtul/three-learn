// let canvas = document.querySelector('#canvas');
// let renderer = new THREE.WebGLRenderer({canvas});

////渲染器
//let renderer = new THREE.WebGLRenderer();
//renderer.setSize(400,300);
//document.body.appendChild(renderer.domElement);
//renderer.setClearColor(0XFF4400);
//


//let scene = new THREE.Scene();
//let camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
//scene.add(camera);
//
//
//let cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3),
//    new THREE.MeshBasicMaterial({
//    color: 0xff0000
//}));
//scene.add(cube);
//
//let renderer = new THREE.WebGLRenderer();
//renderer.setSize(400, 300);
//document.body.appendChild(renderer.domElement);
//renderer.setClearColor(0xff0000);
//renderer.render(scene, camera);

function init() {
    // renderer
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(400, 300);
    document.body.appendChild(renderer.domElement);
    renderer.setClearColor(0xff0000);

    // scene
    var scene = new THREE.Scene();

    // camera
    var camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
    camera.position.set(0, 0, 5);
    scene.add(camera);

    // a cube in the scene
    var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3),
        new THREE.MeshBasicMaterial({
        color: 0xffff00
    }));
    scene.add(cube);

    // render
    renderer.render(scene, camera);
}
init();