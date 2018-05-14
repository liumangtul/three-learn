// let canvas = document.querySelector('#canvas');
// let renderer = new THREE.WebGLRenderer({canvas});

//渲染器
let renderer = new THREE.WebGLRenderer();
renderer.setSize(400,300);
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0XFF4400);
