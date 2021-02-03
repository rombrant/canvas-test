import { MainCanvasDeclaration } from './mainCanvas.js';
import { assetOfStars } from './asset.js';

const canvas = document.querySelector(".mainCanvas");
const ctx = canvas.getContext("2d");

const subCanvas = document.querySelector(".subCanvas");
const subCtx = subCanvas.getContext("2d");

const mainCanvas = new MainCanvasDeclaration(assetOfStars);
mainCanvas.init();

export { ctx, canvas, subCanvas, subCtx };