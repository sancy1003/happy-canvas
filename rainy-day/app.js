import { Rain } from "./rain.js";
import { Mouse } from "./mouse.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    this.rain = new Rain();
    this.mouse = new Mouse(this.ctx);

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    window.addEventListener(
      "mousemove",
      this.mouse.move.bind(this.mouse),
      false
    );
    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.rain.resize(this.stageWidth, this.stageHeight);

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    requestAnimationFrame(this.animate.bind(this));
    this.rain.draw(this.ctx);
    this.mouse.draw(this.ctx);
  }
}

window.onload = () => {
  new App();
  document.getElementById("audio").volume = 0.5;
};
