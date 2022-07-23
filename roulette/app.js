import { Items } from "./items.js";
import { Roulette } from "./roulette.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = 500;
    this.canvas.height = 500;
    document.querySelector(".canvas-container").appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.roulette = new Roulette(this.ctx);
    this.items = new Items(this.roulette);

    window.requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
};
