import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let camera, controls, scene, renderer, pc, group, mouse, raycaster;
// prettiest initial conditions
var a_0 = 1.062477352437103;
var b_0 = 8.038291607940321;
var f_0 = 14.507204661264549;
var g_0 = 1.8347793740599485;

init();
timeskip(a_0, b_0, f_0, g_0);
render(a_0, b_0, f_0, g_0);

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 50 );
    camera.position.z = 30;

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight);
    renderer.setClearColor( 0x080808, 1 );
    document.body.appendChild( renderer.domElement );

    group = new THREE.Group();

    controls = new OrbitControls( camera, renderer.domElement );
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.minDistance = 0.1;
    controls.maxDistance = 50;
    controls.maxPolarAngle = Math.PI / 2;
    controls.enableZoom = false;

    var arrayCurve = thomas(a_0, b_0, f_0, g_0);
    var curve = new THREE.CatmullRomCurve3(arrayCurve);
    var geometry = new THREE.BufferGeometry();
    geometry.vertices = curve.getPoints(111111);

    // points to apply to the geometry defined by the curve
    var pcMat = new THREE.PointsMaterial();
    pcMat.color = new THREE.Color(0x5555ff);
    pcMat.transparent = true;
    pcMat.size = 0.01;
    pcMat.blending = THREE.AdditiveBlending;
    pc = new THREE.Points(geometry, pcMat);
    pc.sizeAttenuation = false;
    pc.sortPoints = true;

    group.add(pc);
    scene.add( group );

    mouse = new THREE.Vector2();
    raycaster = new THREE.Raycaster();

    window.addEventListener( 'mousemove', onMouseMove, false );
}

function onMouseMove( event ) {
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function render(a_0, omega_0) {

  requestAnimationFrame( function() { render(a_0, omega_0) } );
  controls.update();
  renderer.render( scene, camera );

  raycaster.setFromCamera( mouse, camera );
  var intersects = raycaster.intersectObject( pc );
  for ( var i = 0; i < intersects.length; i++ ) {
      intersects[i].point.sub( mouse ).multiplyScalar(5);
  }

  pc.geometry.colorsNeedUpdate = true;

  // randomly varying the initial parameters of the Thomas attractor
  var geometry = pc.geometry;
  var a = a_0 + Math.random() * 0.5;
  var omega = omega_0 + Math.random() * 0.5;
  var t = 0.1; // Feel free to adjust the timestep

  geometry.vertices.forEach(function(v){
      var dx = -omega * v.x + a * Math.sin(v.y);
      var dy = -omega * v.y + a * Math.sin(v.z);
      var dz = -omega * v.z + a * Math.sin(v.x);

      v.x += dx * t;
      v.y += dy * t;
      v.z += dz * t;
  });

  geometry.verticesNeedUpdate = true;
  group.rotation.x += 0.001;
  group.rotation.y += 0.002;
  group.rotation.z -= 0.001;

  window.addEventListener( 'resize', function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
  }, false );
};

function thomas(a, omega){
    
  var arrayCurve=[];
  var x = 0.1;
  var y = 0.1;
  var z = 0.1;
  var t = 0.1;

  for (var i=0; i<100000; i++){

      var dx = -omega * x + a * Math.sin(y);
      var dy = -omega * y + a * Math.sin(z);
      var dz = -omega * z + a * Math.sin(x);
      
      x += dx * t;
      y += dy * t;
      z += dz * t;
      
      arrayCurve.push(new THREE.Vector3(x, y, z).multiplyScalar(1));
  }
  return arrayCurve;
}


// progress through the animation a bit to avoid ugly lines
function timeskip(){

    var geometry = pc.geometry;
    var a = 3.664669162451547;
    var b = 5.508898472476083;
    var f = 12.693008234922399;
    var g = 2.8005228465422123;
    var t = 0.0057;

    for (var i=0;i<100;i++) {
        geometry.vertices.forEach(function(v){
            v.x = v.x - t*a*v.x +t*v.y*v.y -t*v.z*v.z + t*a*f;
            v.y = v.y - t*v.y + t*v.x*v.y - t*b*v.x*v.z + t*g;
            v.z = v.z - t*v.z + t*b*v.x*v.y + t*v.x*v.z;
        })

        geometry.verticesNeedUpdate = true;
        group.rotation.x += 0.01;
        group.rotation.y += 0.02;
        group.rotation.z -= 0.01;
    }
}