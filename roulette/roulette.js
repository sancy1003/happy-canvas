const SIZE = 500;

export class Roulette {
  constructor(ctx) {
    this.ctx = ctx;
    this.textList = [];
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

    if (items.length < 2) {
      this.ctx.save();
      this.ctx.translate(SIZE / 2, SIZE / 2);
      this.ctx.fillStyle = "#423224";
      this.ctx.textAlign = "center";
      this.ctx.font = "20px sans-serif";
      this.ctx.fillText("2개 이상의 목록이 필요해요.", 0, 0);
      this.ctx.restore();
      return;
    }

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

      const standard = (Math.PI * 2) / (360 / 270);
      this.ctx.save();
      this.ctx.translate(SIZE / 2, SIZE / 2);
      this.ctx.rotate(standard);
      this.ctx.rotate(gap * (i + 1) - gap / 2);
      this.ctx.fillStyle = "#423224";
      this.ctx.font = "20px sans-serif";
      let text = items[i].length > 7 ? `${items[i].substr(0, 7)}...` : items[i];
      this.ctx.fillText(text, 50, 8);
      this.ctx.restore();
    }

    this.drawRound(SIZE / 2, SIZE / 2, 16, 0, Math.PI * 2, true, "#423224");
  }
}
