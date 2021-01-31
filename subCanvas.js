import { AbstarctCanvasDeclaration } from "./abstractCanvas.js";

export class SubmissiveCanvasDeclaration extends AbstarctCanvasDeclaration {
  constructor(width, height, className) {
    super(width, height, className);
  }

  onChangeBackgroundWanted = (color) => {
    if (color === undefined) {
      this.scene.background = new THREE.Color("#cccccc");
      return;
    }

    this.scene.background = color;
  };
}
