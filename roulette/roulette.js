const SIZE = 500;

export class Roulette {
  constructor(ctx) {
    this.ctx = ctx;
  }

  drawRound(x, y, r, startPos, endPos, direction, color) {
    this.ctx.save();
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.arc(x, y, r, startPos, endPos, direction);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.restore();
  }

  draw(items, colorList) {
    this.ctx.clearRect(0, 0, SIZE, SIZE);
    if (items.length < 2) return;

    this.drawRound(
      SIZE / 2,
      SIZE / 2,
      SIZE / 2,
      0,
      Math.PI * 2,
      true,
      "#423224"
    );

    const devide = items.length;
    const startPoint = (Math.PI * 2) / (360 / 270);
    const gap = (Math.PI * 2) / devide;

    for (let i = 0; i < items.length; i++) {
      this.drawRound(
        SIZE / 2,
        SIZE / 2,
        SIZE / 2 - 8,
        startPoint + gap * i,
        startPoint + gap * (i + 1),
        false,
        colorList[i]
      );
    }

    this.drawRound(SIZE / 2, SIZE / 2, 16, 0, Math.PI * 2, true, "#423224");
  }
}
