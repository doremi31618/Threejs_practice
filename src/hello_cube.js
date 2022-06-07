
import {
    BoxGeometry,
    Color,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
  } from 'https://cdn.skypack.dev/three@0.132.2';
  
  // just waiting for your beautiful creations!
  const container = document.querySelector('#scene-container');
  var scene = new Scene();
  
  //setting scene
  scene.background = new Color('skyblue');
  
  //setting camera
  const fov = 35;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 100;
  const camera = new PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0,0,15);
  
  //generate 3d object
  var size = 2;
  const geometry = new BoxGeometry(size, size, size);
  const material = new MeshBasicMaterial({color: 0x44aa88});
  const cube = new Mesh(geometry, material);
  scene.add(cube);

  
  //handle renderer
  const renderer = new WebGLRenderer();
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.append(renderer.domElement);
  renderer.render(scene, camera);
