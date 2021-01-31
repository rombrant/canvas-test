export class AbstarctCanvasDeclaration {
  constructor(width, height, className) {
    this.SCREEN_WIDTH = width;
    this.SCREEN_HEIGHT = height;
    this.className = className;
  }

  initiallizeScene = () => {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("#cccccc");
  };

  initiallizeCamera = () => {
    const VIEW_ANGLE = 45,
      ASPECT = this.SCREEN_WIDTH / this.SCREEN_HEIGHT,
      NEAR = 0.1,
      FAR = 20000;
    this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
    this.scene.add(this.camera);
    this.camera.position.set(0, 0, 400);
    this.camera.lookAt(this.scene.position);
  };

  initiallizeRender = () => {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.SCREEN_WIDTH, this.SCREEN_HEIGHT);

    document.body
      .querySelector(`.${this.className}`)
      .appendChild(this.renderer.domElement);
  };

  // initiallize scene, camera, objects and renderer
  init = () => {
    // create the scene
    this.initiallizeScene();

    // create and locate the camera
    this.initiallizeCamera();

    // execute the renderer
    this.initiallizeRender();
  };

  // main animation loop
  mainLoop = () => {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.mainLoop);
  };
}
