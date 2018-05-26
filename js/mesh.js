module.exports = function(THREE,scene){
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

	return {
		plane,
		cube
	}
}