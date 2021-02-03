import { assetOfStars } from "./asset.js";
import { ctx, canvas, subCtx } from "./index.js";

export class MainCanvasDeclaration {
  constructor(stars) {
    this.stars = stars;
  }

  createGeometry = (cx, cy, spikes, outerRadius, innerRadius, color, id) => {
    var rot = (Math.PI / 2) * 3;
    var x = cx;
    var y = 100;
    var step = Math.PI / spikes;

    ctx.strokeSyle = "#000";
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.addHitRegion({ id: id });
  };

  onStarClickMouse = (e) => {

    if (e.region === null){ 
      subCtx.fillStyle = '#ffffff';
      subCtx.fillRect(0, 0, 600, 50);
      return;
    }

    const clickedStar = assetOfStars.find(star => star.id.toString() === e.region);
    subCtx.fillStyle = clickedStar.color;
    subCtx.fillRect(0, 0, 600, 50);
  };

  init = () => {
    this.stars.forEach((star) =>
      this.createGeometry(
        star.cx,
        star.cy,
        star.spikes,
        star.outerRadius,
        star.innerRadius,
        star.color,
        star.id
      )
    );

    canvas.addEventListener("click", this.onStarClickMouse, false);
  };
}
