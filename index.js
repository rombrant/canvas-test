import { MainCanvasDeclaration } from './mainCanvas.js';
import { SubmissiveCanvasDeclaration } from './subCanvas.js';
import { assetOfStars } from './asset.js';

const mainCanvas = new MainCanvasDeclaration(assetOfStars, 600, 600, 'mainCanvas');
mainCanvas.init();
mainCanvas.mainLoop();

const subCanvas = new SubmissiveCanvasDeclaration(600, 50, 'subCanvas');
subCanvas.init();
subCanvas.mainLoop();

export { subCanvas };