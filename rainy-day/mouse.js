export class Mouse {
  constructor() {
    this.mouseX = 0;
    this.mouseY = 0;
  }

  move(e) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }
}
