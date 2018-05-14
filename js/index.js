let canvas = document.querySelector('#canvas');
const w = canvas.width;
const h = canvas.height;
console.log(w,h);

let renderer = new THREE.WebGLRenderer({canvas});

renderer.setClearColor(0x000000);

let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(45,w/h,1,1000);
