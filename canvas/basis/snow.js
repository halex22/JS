let canvas;
let ctx;
const canvasWidth = 600
const snowFlakes = []
const snowPng = new Image()
snowPng.src= './snow.PNG'

const buttonYLimit = 590
const rightXLimit =  -10
const leftXlLimit =  canvasWidth + 10


function cleanBeforeRefreshing() {
  ctx.fillStyle = "rgb(33, 64, 99)";
  ctx.fillRect(0, 0, 600, 600);
}

const canMoveRight = size => size > 20
const chooseDirection = () => Math.random() > 0.5 ? 1:-1

function createSnowFlake() {
  const size = Math.random() * 20 + 5
  const snowFlake = {
    positionX: (Math.random() * 600) - 10,
    positionY: -10 ,
    widthHeight:  [size, size],
    speed: size / 15,
  } 

  // if (snowFlake.canMoveHorizontal) {
  //   snowFlake.leftLimit = snowFlake.positionX + 5,
  //   snowFlake.rightLimit = snowFlake.positionX - 5
  // }
  return snowFlake
}

function setUp() {
  canvas = document.getElementById('snow-canvas')
  ctx = canvas.getContext('2d')

  for (let i = 0; i < 15; i++) {
    snowFlakes.push(createSnowFlake())    
  }
}


function update() {
  snowFlakes.forEach(snowFlake => {
    snowFlake.positionY += snowFlake.speed
  })
  if (Math.random() > 0.8) snowFlakes.push(createSnowFlake()) 
}

function draw() {
  cleanBeforeRefreshing()
  snowFlakes.forEach(snowFlake => {
    ctx.drawImage(snowPng, snowFlake.positionX, snowFlake.positionY, ...snowFlake.widthHeight)
    // ctx.rotate(Math.PI / 3)
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



setInterval(() => {
  snowFlakes.splice(0, Math.round(snowFlakes.length / 4))
  console.log(snowFlakes.length)
}, 5000)