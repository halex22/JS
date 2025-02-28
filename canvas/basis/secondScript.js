let entities = [];
let rect = {}
let canvas ;
let ctx;
const threshold = 0.8

function pickRandomColor () {
  const red = Math.random() * 255
  const green = Math.random() * 255
  const blue = Math.random() * 255
  const alpha = Math.random()
  return `rgb(${red},${green},${blue}, ${alpha})`
}


function setUp() {

  canvas = document.getElementById('main-canvas');
  ctx = canvas.getContext('2d');

  for (let i = 0; i < 100; i++) {
      const rect = {};
      rect.width = 2;
      rect.height = 2;
      rect.originX = 299;
      rect.originY = 299;

      rect.fillStyle = pickRandomColor()

      rect.speedX = (Math.random() * 4) - 2; 
      rect.speedY = (Math.random() * 4) - 2; 

      entities.push(rect);
  }
}

function update() {

  entities.forEach(rect => {
    rect.originX += rect.speedX;
    rect.originY += rect.speedY;


    const rollX = Math.random()
    const rollY = Math.random()



    if (rollX > threshold) rect.speedX += ((Math.random() * 4) - 2) / 10
    if (rollY > threshold) rect.speedY += ((Math.random() * 4) - 2) / 10

    if (rect.originX < 0 || rect.originX > 600) rect.speedX *=-1
    if (rect.originY < 0 || rect.originY > 600) rect.speedY *=-1

  })
}

function draw() {

  ctx.fillStyle = 'rgba(255,255,255,0.1)'
  ctx.fillRect(0,0,600,600)

  entities.forEach(rect => {
    ctx.fillStyle = rect.fillStyle
    ctx.fillRect(rect.originX, rect.originY, rect.width, rect.height);
  })
}  



function gameLoop(elapsedTime) {

  update()
  draw()
  requestAnimationFrame(gameLoop)
}

function start() {
  setUp()
  requestAnimationFrame(gameLoop)
}

start()