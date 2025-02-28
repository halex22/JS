let canvas;
let ctx;

function setUp() {
  
}


function update() {
  
}

function draw() {}


function gameLoop(elapsedTime) {
  update()
  draw()
  requestAnimationFrame(gameLoop)
}

function start() {
  setUp()
  requestAnimationFrame(gameLoop)
}