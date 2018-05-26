module.exports = function(THREE,scene){
	let light = new THREE.PointLight(0xffffff, 1);
	light.position.set(10, 10, 20);
	scene.add(light);
	return light;
}