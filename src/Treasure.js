class Treasure {
  constructor() {
    this.x = SQUARE_SIDE; //x
    this.y = SQUARE_SIDE; //y
    this.rightBoundary = WIDTH - this.width;
    this.bottomBoundary = HEIGHT - this.height;
  }

  drawTreasure() {
    image(treasureImage, this.col, this.row, this.width, this.height);
  }

  setRandomPosition() {
    this.x = Math.floor(Math.random() * this.rightBoundary);
    this.y = Math.floor(random(this.bottomBoundary));
  }
}
