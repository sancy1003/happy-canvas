import { RainDrop } from "./rainDrop.js";

export class Rain {
  constructor() {}

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.rainDropCount = Math.floor((stageWidth + 500) * 0.12);
    this.rainDropGap = Math.floor(stageWidth + 500) / this.rainDropCount;
    this.rain = [];

    for (let i = 0; i < this.rainDropCount; i++) {
      const rainDrop = new RainDrop(this.rainDropGap * i);

      this.rain.push(rainDrop);
    }

    for (let i = 0; i < this.rain.length; i++) {
      this.rain[i].resize(stageWidth, stageHeight);
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.rain.length; i++) {
      this.rain[i].draw(ctx);
    }
  }
}
