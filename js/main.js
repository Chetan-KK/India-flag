/**
 * importing files, modules and elements
 */
import * as THREE from 'three';
import '../css/style.css';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//canvas element
const canvas = document.getElementById('firstCanvas');

//sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

/**
 * window resize fix
 */
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);
});

//scene
const scene = new THREE.Scene();

/**
 * texture loader
 */
const textureLoader = new THREE.TextureLoader();
const flagTexture = textureLoader.load('/Flag_of_India.svg');
const flagGroundTexture = textureLoader.load('/textures/ground/ground.jpg');
const flagBaseTexture = textureLoader.load('/textures/concrete/concrete.png');
const flagBaseNormalTexture = textureLoader.load('/textures/concrete/normal.png');
const starsTexture = textureLoader.load('../static/stars/1.png');

/**
 * lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, .1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(4, 4, 4);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.x = 1024;
directionalLight.shadow.mapSize.y = 1024;
directionalLight.castShadow;
scene.add(directionalLight);

/**
 * objects
 */
const flagGroundMaterial = new THREE.MeshStandardMaterial({
    side: THREE.DoubleSide,
    map: flagGroundTexture
});
const flagGround = new THREE.Mesh(new THREE.PlaneBufferGeometry(10, 10), flagGroundMaterial);
flagGround.rotation.x = Math.PI / 2;
flagGround.receiveShadow = true;
scene.add(flagGround);

const flagBaseMaterial = new THREE.MeshStandardMaterial({
    map: flagBaseTexture,
    normalMap: flagBaseNormalTexture
}
);
const flagBase = new THREE.Mesh(new THREE.CylinderBufferGeometry(1, 1, .3, 32), flagBaseMaterial);
flagBase.position.y = .15;
flagBase.receiveShadow = true;
flagBase.castShadow = true;
scene.add(flagBase);

const flagBaseTop = new THREE.Mesh(new THREE.CylinderBufferGeometry(.7, .7, .3, 32), flagBaseMaterial);
flagBaseTop.position.y = .4;
flagBaseTop.receiveShadow = true;
flagBaseTop.castShadow = true;
scene.add(flagBaseTop);

const flagRodMaterial = new THREE.MeshStandardMaterial();
const flagRod = new THREE.Mesh(new THREE.CylinderBufferGeometry(.05, .05, 4, 16), flagRodMaterial);
flagRod.position.y = 2;
flagRod.castShadow = true;
scene.add(flagRod);

const flagMaterial = new THREE.MeshStandardMaterial({
    side: THREE.DoubleSide,
    map: flagTexture
});
const flag = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 1), flagMaterial);
flag.position.set(1, 3.5, 0);
flag.castShadow = true;
scene.add(flag);

//stars
const starsGeometry = new THREE.BufferGeometry();

const starsCount = 200;

const starsPositions = new Float32Array(starsCount * 3);
const starsColor = new Float32Array(starsCount * 3);

for (let i = 0; i < starsCount; i++) {

    let position = i * 3;

    starsPositions[position] = (Math.random() - .5) * 8;
    starsPositions[position + 1] = (Math.random() - .5) * 8;
    starsPositions[position + 2] = (Math.random() - .5) * 8;

    starsColor[position] = (Math.random() - .5);
    starsColor[position + 1] = (Math.random() - .5);
    starsColor[position + 2] = (Math.random() - .5);

}

const starsPositionAttribute = new THREE.BufferAttribute(starsPositions, 3);
const starsColorAttribute = new THREE.BufferAttribute(starsColor, 3);

starsGeometry.setAttribute('position', starsPositionAttribute);
starsGeometry.setAttribute('color', starsColorAttribute);

const startsMaterial = new THREE.PointsMaterial({
    size: .5,
    alphaMap: starsTexture,
    depthWrite: false,
    transparent: true

});

const stars = new THREE.Points(starsGeometry, startsMaterial);
stars.position.set(0, 2, 0);
scene.add(stars);

/**
 * camera
 */
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.set(0, 5, 10);
scene.add(camera);

/**
 * controls
 */
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.maxPolarAngle = Math.PI / 2 - .2;
controls.enableZoom = false;

/**
 * renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas,
    // alpha: true
});
renderer.setSize(sizes.width, sizes.height);
renderer.shadowMap.enabled = true;
renderer.render(scene, camera);

/**
 * tick function
 */
//clock
const clock = new THREE.Clock();

const tick = () => {

    //request animaiton frames
    window.requestAnimationFrame(tick);

    //elapsed time
    const elapsedTime = clock.getElapsedTime();

    //controls update
    controls.update();

    //animations
    directionalLight.position.set(Math.sin(elapsedTime) + 4, Math.sin(elapsedTime) + 4, 4);

    //renderer update
    renderer.render(scene, camera);
};
tick();