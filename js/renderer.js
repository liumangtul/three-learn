const {width,height} = require('./static')();
module.exports = function (THREE,scene,camera){
	let renderer = new THREE.WebGLRenderer();
	renderer.setSize(width, height);
	renderer.setClearColor(0xcccccc);
	renderer.shadowMapEnabled = true;
	renderer.render(scene, camera);
	console.log(renderer)
	document.body.appendChild(renderer.domElement);
	return renderer;
};