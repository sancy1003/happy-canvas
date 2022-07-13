import { Splash } from "./splash.js";

export class RainDrop {
  constructor(x) {
    this.standardX = x;
    this.speed = 0.12;
    this.splashs = [];
    this.init();
  }

  init() {
    this.degree = Math.floor(Math.random() * 2) + 110;
    this.height = Math.floor(Math.random() * 40) + 80;
    this.x = this.standardX;
    this.y = -(Math.floor(Math.random() * 500) + this.height);
    this.verticalRatio = this.height * Math.sin(this.degree * (Math.PI / 180));
    this.horizontalRatio =
      this.height * Math.cos(this.degree * (Math.PI / 180));
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.y = Math.floor(Math.random() * stageHeight) - this.height;
  }

  draw(ctx) {
    if (this.y >= this.stageHeight) {
      const splash = new Splash(this.x, this.stageHeight);
      this.splashs.push(splash);

      this.init();
      return;
    }

    for (let i = 0; i < this.splashs.length; i++) {
      if (this.splashs[i].isSplash) this.splashs[i].draw(ctx);
      else this.splashs.splice(i, 1);
    }

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.horizontalRatio, this.y + this.verticalRatio);

    this.y += this.verticalRatio * this.speed;
    this.x += this.horizontalRatio * this.speed;

    ctx.lineWidth = 0.5;
    ctx.strokeStyle = "rgba(255, 255, 255, .7)";
    ctx.stroke();
    ctx.closePath();
  }
}
