export class Mouse {
  constructor() {
    this.mouseX = 0;
    this.mouseY = 0;
  }

  move(e) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  draw(ctx) {
    ctx.save();

    ctx.filter = "blur(32px)";
    ctx.fillStyle = "rgba(255, 207, 37, .2)";

    ctx.beginPath();
    ctx.arc(this.mouseX, this.mouseY, 50, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}
