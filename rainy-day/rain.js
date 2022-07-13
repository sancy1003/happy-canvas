import { Splash } from "./splash.js";

export class Rain {
  constructor() {
    this.speed = 0.3;
    this.splashs = [];
    this.init();
  }

  init() {
    this.degree = Math.floor(Math.random() * 3) + 110;
    this.height = Math.floor(Math.random() * 50) + 100;
    this.x = 500;
    this.y = -this.height;
    this.verticalRatio = this.height * Math.sin(this.degree * (Math.PI / 180));
    this.horizontalRatio =
      this.height * Math.cos(this.degree * (Math.PI / 180));
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
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
