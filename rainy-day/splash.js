export class Splash {
  constructor(x, y) {
    this.standardX = x;
    this.standardY = y;
    this.y = 0;
    this.isSplash = true;
    this.speed = 0.1;
    this.radius = 12;
    this.splashCount = Math.floor(Math.random() * 4) + 5;
    this.splashs = [];
    this.animCount = 0;

    for (let i = 0; i < this.splashCount; i++) {
      const gap = Math.floor(180 / this.splashCount);
      this.splashs.push({
        height: Math.floor(Math.random() * 6) + 4,
        degree: Math.floor(Math.random() * gap) + (gap * i - gap / 2),
        direction: gap < 90 ? -1 : 1,
      });
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.splashs.length; i++) {
      ctx.save();
      ctx.translate(this.standardX, this.standardY);
      ctx.rotate(((-90 + this.splashs[i].degree) * Math.PI) / 180);
      ctx.beginPath();

      ctx.moveTo(0, this.prevY);
      ctx.lineTo(0, this.y - this.splashs[i].height);
      this.prevY = this.y;
      this.y += this.splashs[i].direction * this.speed;

      ctx.stroke();
      ctx.closePath();

      ctx.restore();
    }
    this.animCount++;
    if (this.animCount === 20) this.isSplash = false;
  }
}
