module.exports = function(THREE, scene) {
	let axis = new THREE.AxisHelper(20);
	scene.add(axis);

	let planeGeo = new THREE.PlaneGeometry(60, 20, 60, 20);
	let planeMaterial = new THREE.MeshLambertMaterial({
		color: 0xcccccc,
		dithering: true
	});
	let plane = new THREE.Mesh(planeGeo, planeMaterial);
	plane.position.set(0, -1, 0);
	plane.rotation.x = -0.5 * Math.PI;
	plane.receiveShadow = true;
	scene.add(plane);

	let cubeGeo = new THREE.CubeGeometry(2, 2, 2);
	let cubeMaterial = new THREE.MeshLambertMaterial({
		color: 0xffffff
	});
	let cube = new THREE.Mesh(cubeGeo, cubeMaterial);
	cube.castShadow = true;
	scene.add(cube);

	return {
		plane,
		cube
	}
}