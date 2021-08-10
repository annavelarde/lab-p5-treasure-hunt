const game = new Game();
class Game {
  constructor() {
    this.player = new Player();
    this.tresure = new Treasure();
    //this.player2 = new Player(50, 60, image);
  }
  // Iteration 1
  // Draw the grid

  draw() {
    clear();
    this.player.draw();
    this.treasure.draw();
    for (let x = 0; x <= WIDTH; x += SQUARE_SIDE) {
      line(x, 0, x, HEIGHT);
    }
    for (let y = 0; y <= HEIGHT; y += SQUARE_SIDE) {
      line(0, y, WIDTH, y);
    }
  }

  collisionCheck(player, treasure) {
    // UA > TB
    // RA > LB
    // LA < RB
    // TA < UB

    if (player.bottomSide < treasure.topSide) {
      return false;
    }

    if (player.rightSide < treasure.leftSide) {
      return false;
    }

    if (player.leftSide > treasure.rightSide) {
      return false;
    }

    if (player.topSide > treasure.bottomSide) {
      return false;
    }
    return true;
  }
}
