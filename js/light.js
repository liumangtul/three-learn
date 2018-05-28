module.exports = function(THREE, scene, camera, plane) {
	let ambient = new THREE.AmbientLight('#4B1F4B',1);
	scene.add(ambient);
/*
	let pointColor = 0xffffff;
	let point = new THREE.PointLight(pointColor);
	point.intensity = 1;
	point.distance = 2000;
	point.position.set(2,100,2);
	scene.add(point);

	let pointHelper = new THREE.PointLightHelper(point,1,0xffff00);
	console.log(pointHelper)
	scene.add(pointHelper);*/

	//聚光灯
	/*let spot = new THREE.SpotLight(0xffffff);
	spot.position.set(-30,20,5);
	spot.intensity = 1;//强度
	spot.distance = 100;//长度
	spot.angle = Math.PI*.05;//角度
	spot.exponent = 1;//衰减指数
	spot.castShadow = true;
	spot.shadowCameraVisible = true;

	spot.shadowMapWidth = spot.shadowMapHeight = 1024*10;

	scene.add(spot);
	let spotHelper = new THREE.SpotLightHelper(spot,0xffff00);
	scene.add(spotHelper);*/

	//风向光
	/*let directional = new THREE.DirectionalLight(0xffffff,1);
	directional.rotation.set(60,60,0);
	directional.castShadow = true;
	directional.shadowCameraVisible = true;
	directional.position.set(-50,30,-10);
	scene.add(directional);

	let directionalHelper = new THREE.DirectionalLightHelper(directional,10);
	scene.add(directionalHelper);*/

	//半球光
	/*let hemisphere = new THREE.HemisphereLight('skyblue','#EEFF0A',0.6);
	scene.add(hemisphere);*/

	//平面光
	// let area = new THREE.AreaLight();

	// let cameraHelper = new THREE.CameraHelper(spot.shadow.camera);
	// scene.add(cameraHelper);



	var spotLight = new THREE.SpotLight( 'yellow' , 2);
	spotLight.intensity = 1;
	spotLight.distance = 0;
	spotLight.angle = 0.1;
	// spotLight.penumbra = 0.2;//阴影虚化
	// spotLight.decay = 2;//衰变
	spotLight.position.set( 30, 20, 30 );

	spotLight.castShadow = true;

	spotLight.shadow.mapSize.width = 1024;
	spotLight.shadow.mapSize.height = 1024;

	spotLight.shadow.camera.near = 500;
	spotLight.shadow.camera.far = 4000;
	spotLight.shadow.camera.fov = 30;

	scene.add( spotLight );

	var spotHelper = new THREE.SpotLightHelper(spotLight,'yellow');
	scene.add(spotHelper);
}