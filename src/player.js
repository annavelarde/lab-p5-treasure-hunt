class Player {
  constructor(col, row) {
    //position dos valores y tamanyos dos valores.
    this.col = col; //x
    this.row = row; //y
    this.width = SQUARE_SIDE; //100
    this.height = SQUARE_SIDE; //100
    this.rightBoundary = WIDTH - this.width;
    this.bottomBoundary = HEIGHT - this.height;
  }

  draw() {
    this.move();
    this.maintainBoundaries();
    image(playerImage, this.col, this.row, this.width, this.height);
  }

  move() {
    if (keyIsDown(DOWN_ARROW)) {
      this.row += 10;
    }

    if (keyIsDown(UP_ARROW)) {
      this.row -= 10;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.col -= 10;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.col += 10;
    }
    clear();
  }

  cantGoOverRight() {
    if (this.x >= this.rightBoundary) {
      this.x = this.rightBoundary;
    }
  }

  maintainBoundaries() {
    if (this.x >= this.rightBoundary) {
      //   this.x = this.rightBoundary;
      this.x = 0;
    }
    if (this.y >= this.bottomBoundary) {
      //   this.y = this.bottomBoundary;
      this.y = 0;
    }
    if (this.x < 0) {
      this.x = this.rightBoundary;
    }
    if (this.y < 0) {
      this.y = this.bottomBoundary;
    }
  }
}
