module.exports = function(THREE, scene) {
	let ambient = new THREE.AmbientLight('red',.2); 
	scene.add(ambient);

	let point = new THREE.PointLight(0xffffff,2,10);//color,instensity,distance
	point.position.set(2,5,5);
	point.intensity = 1;//亮度 强度
	point.distance = 4;//照射距离
	scene.add(point);
	let pointHelper = new THREE.PointLightHelper(point,1);
	scene.add(pointHelper)
	return {

	}
}