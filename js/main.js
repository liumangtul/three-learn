const THREE = require('three');

const scene = require('./scene')(THREE);

const camera = require('./camera')(THREE, scene);


const mesh = require('./mesh')(THREE, scene);

const light = require('./light')(THREE, scene, camera, mesh.plane);

const renderer = require('./renderer')(THREE, scene, camera);