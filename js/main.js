const THREE = require('three');
alert(t)
let scene = new THREE.Scene();

const width = 400, height = 300;

let camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
camera.position.set(5, 5, 10);
camera.lookAt(new THREE.Vector3(0, 0, 0));
scene.add(camera);

let light = new THREE.PointLight(0xffffff, 1);
light.position.set(10, 10, 20);
scene.add(light);

let planeGeo = new THREE.PlaneGeometry(60, 20);
let planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xff3300
});
let plane = new THREE.Mesh(planeGeo, planeMaterial);
plane.position.set(0, -1, 0);
plane.rotation.x = -0.5 * Math.PI;
scene.add(plane);

let cubeGeo = new THREE.CubeGeometry(2, 2, 2);
let cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0x00ff44
});
let cube = new THREE.Mesh(cubeGeo, cubeMaterial);
scene.add(cube);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.setClearColor(0xcccccc);
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);