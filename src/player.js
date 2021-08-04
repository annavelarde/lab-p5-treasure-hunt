class player {
  constructor(col, row) {
    this.col = col; //y
    this.row = row; //x
    // this.width = playerX;
    // this.height = playerY;
  }

  draw() {
    //mirar!!!!!!
    image(playerImage, this.col, this.row, this.width, this.height);
    console.log(this.col, this.row);
  }

  //   moveDown() // Increase by 1 the value of player.row
  //   moveDown() // Increase by 1 the value of player.row
  //   moveRight() // Increase by 1 the value of player.col

  move() {
    if (keyIsDown(moveDown)) {
      player.row += 1;
    }

    if (keyIsDown(moveUp)) {
      player.col -= 1;
    }
    if (keyIsDown(moveLeft)) {
      player.row -= 1;
    }
    if (keyIsDown(moveRight)) {
      player.col += 1;
    }
  }

  // moveUp() {
  //   this.row--;
  // }
  // moveDown() {
  //   this.row++;
  // }
  // moveLeft() {
  //   this.col--;
  // }
  // moveRight() {
  //   this.col++;
  // }
}
