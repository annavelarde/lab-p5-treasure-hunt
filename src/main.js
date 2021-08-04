const game = new Game();

function preload() {
  playerImage = loadImage("./assets/character-down.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  //call 16 times a second
  game.draw();
  //player.drawImage(); // Iteration 3 last part?
}
