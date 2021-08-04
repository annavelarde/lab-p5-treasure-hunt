class Game {
  constructor() {
    this.player = new Player(0, 0);
    //this.player2 = new Player(50, 60, image);
  }
  // Iteration 1
  // Draw the grid
  draw() {
    // background(300);
    this.player.draw();
    for (var x = 0; x <= WIDTH; x += SQUARE_SIDE) {
      line(x, 0, x, HEIGHT);
    }
    for (var y = 0; y <= HEIGHT; y += SQUARE_SIDE) {
      line(0, y, WIDTH, y);
      // line(WIDTH, 0, WIDTH, HEIGHT);
      // line(0, HEIGHT, WIDTH, HEIGHT);
      // https://p5js.org/reference/#/p5/line
      //syntax
      // line(x1, y1, x2, y2)
      // line(x1, y1, z1, x2, y2, z2)
    }
  }
}
