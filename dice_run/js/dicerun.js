import * as THREE from "../../../node_modules/three/build/three.module.js";
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const loader = new THREE.TextureLoader();
scene.background = loader.load( 'img/fondcube.jpg' );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial({
    map: loader.load('img/cubegeometry.png'),
  });

const cube = new THREE.Mesh( geometry, material );

scene.add( cube );
cube.position.setX(-4)
cube.position.setY(-1)

const material3 = new THREE.MeshBasicMaterial({
    map: loader.load('img/cubegris.png'),
    
  });
const cube2 = new THREE.Mesh( geometry, material3);
scene.add( cube2 );
cube2.position.setY(-3)
cube2.position.setX(-5);




camera.position.z = 5;
let x = Math.floor(Math.random() * 9);
console.log(x)

function animate() {
    requestAnimationFrame( animate );
    cube.position.x += 0.005;
    renderer.render( scene,camera );
    if (cube.position.x>0.9) {
        document.location.href="victoire.html";
        
    }
      
        
    }
;

let rebour=0;
setInterval(compte, 1000);

function compte() {
    
        rebour+=1;
     
   
   
    document.getElementById('compte').innerHTML = rebour;

}

compte();
let zonedecompte=document.getElementById('decompte');
console.log(decompte)

function animate2() {
  
    requestAnimationFrame( animate2 );
    const speed=Math.floor(Math.random()*9+4)/200
    cube2.position.x += speed;
   
    renderer.render( scene,camera );
    if (cube2.position.x>5) {

        document.location.href="defaite.html";
        
    }
      
  

}
;

function rotationconstante() {
  
    requestAnimationFrame( rotationconstante );
    
    
    cube.rotation.x += 0.05;
    cube.rotation.y += 0.05;
    cube2.rotation.x += 0.05;
    cube2.rotation.y += 0.05;
	
    
    renderer.render( scene,camera );

}
;


 
animate2();
rotationconstante();
addEventListener("click", animate);

var boutonplus= document.getElementById('btplus');
console.log(boutonplus)




