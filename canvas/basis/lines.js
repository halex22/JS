let canvas;
let ctx;
const entities = [];
const rectWidth = 30;
const rectHeight = 30;
let initialX = 0;
let lineHeight = 60;

function speedGenerator(indexNumber) {
  const speed = Math.round((Math.random() * 10)+ 1)
  if (indexNumber % 2 === 0) {
    return speed;
  }else {
    return speed * -1;
  }
}


function setUp() {
  canvas = document.getElementById("lines-canvas");
  ctx = canvas.getContext("2d");

  for (let i = 0; i < 10; i++) {
    const rect = {};
    rect.width = rectWidth * Math.round((Math.random() * 6)+ 1);
    // rect.height = rectHeight;
    rect.positionX = initialX;
    rect.positionY = (i * lineHeight) + lineHeight / 4;
    rect.speedX = speedGenerator(i);
    entities.push(rect);
  }
}

function update() {
  entities.forEach(rect => {
    rect.positionX += rect.speedX
    // rect.positionX = rect.positionX % 600
    if (rect.positionX < 0) rect.positionX = 600;
    if ( rect.positionX > 600) rect.positionX = 0;
  })
}

function draw() {

  ctx.fillStyle = 'rgba(255,255,255)'
  ctx.fillRect(0,0,600,600)
  ctx.fillStyle = 'black'
 entities.forEach(rect => {
  ctx.fillRect(rect.positionX, rect.positionY, rect.width, rectHeight)
 })


}

function gameLoop(elapsedTime) {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

function start() {
  setUp();
  requestAnimationFrame(gameLoop);
}

start();
