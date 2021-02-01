import { AbstarctCanvasDeclaration } from './abstractCanvas.js';
import { subCanvas } from './index.js';

export class MainCanvasDeclaration extends AbstarctCanvasDeclaration {
  constructor(stars = ["#000000"], width, height, className) {
    super(width, height, className);
    this.stars = stars;
  }

  createGeometry = (index, color) => {
    const starPoints = [];
    const leftPadding = index * 40;

    // Set vectors of future star
    starPoints.push(new THREE.Vector2( 0, 20));
    starPoints.push(new THREE.Vector2( 5, 5));
    starPoints.push(new THREE.Vector2( 20, 5));
    starPoints.push(new THREE.Vector2( 10, -5));
    starPoints.push(new THREE.Vector2( 10, -20));
    starPoints.push(new THREE.Vector2( 0, -10));
    starPoints.push(new THREE.Vector2( -10, -20));
    starPoints.push(new THREE.Vector2( -10, -5));
    starPoints.push(new THREE.Vector2( -20, 5));
    starPoints.push(new THREE.Vector2( -5, 5));

    const starShape = new THREE.Shape(starPoints);

    const geometry = new THREE.ShapeGeometry(starShape);

    // set color of star
    const material = new THREE.MeshBasicMaterial({
      color: color,
      side: THREE.DoubleSide,
    });

    // finaly set position add to scene
    const star = new THREE.Mesh(geometry, material);
    star.position.set(leftPadding - 80, 0, 0);
    this.scene.add(star);
  };

  onStarClickMouse = (e) => {
      const rayCast = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

    //   normalize mouse object
      mouse.x = (e.clientX / this.SCREEN_WIDTH) * 2 - 1;
      mouse.y = - (e.clientY / this.SCREEN_HEIGHT) * 2 + 1;
      mouse.z = 1;

    // get list of object which ray intersect
      rayCast.setFromCamera(mouse, this.camera);
      const intersects = rayCast.intersectObjects(this.scene.children);

      if (intersects[0] === undefined) {
        subCanvas.onChangeBackgroundWanted();
        return;
      }

      const color = intersects[0].object.material.color;
      subCanvas.onChangeBackgroundWanted(color);
  }

  init = () => {
    this.initiallizeScene();

    this.initiallizeCamera();

    this.stars.forEach((star, index) => {
        this.createGeometry(index, star)
    });

    this.initiallizeRender();

    document.addEventListener('click', this.onStarClickMouse, false);
  };
}
