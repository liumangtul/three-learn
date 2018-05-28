const {
	width,
	height
} = require('./static')();
module.exports = function(THREE, scene) {
	let camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
	camera.position.set(10, 50, 60);
	camera.lookAt(new THREE.Vector3(0, 0, 0));
	scene.add(camera);
	return camera;
};