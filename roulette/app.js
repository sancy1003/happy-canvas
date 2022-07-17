import { Items } from "./items.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.querySelector(".canvas-container").appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.items = new Items();

    //window.requestAnimationFrame(this.animate.bind(this));
  }

  add() {
    alert("dd");
  }

  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
};
