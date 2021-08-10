const player = new Player();
const treasure = new Treasure();

function preload() {
  playerImage = loadImage("./assets/character-down.png"); //without value.
  treasureImage = loadImage("./assets/treasure.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  //call 16 times a second
  game.draw(); // Iteration 3 last part?
}

// function keyPressed() {
//   game.keyPressed();
// }
