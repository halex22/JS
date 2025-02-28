
/**
 * @typedef {RectProps}
 * @type {object}
 * @property {number} positionX -
 * @property {number} positionY -
 * @property {number} width -
 * @property {number} width -
 * @property {number} height -
 */

/** @type {RectProps} */
var rectangle;
// function drawRec(x, y){
//   const width = Math.random() * 100;
//   const height = Math.random() * 100;

//   const red = Math.random() * 255
//   const green = Math.random() * 255
//   const blue = Math.random() * 255
//   const alpha = Math.random()

//   ctx.fillStyle = `rgb(${red},${green},${blue}, ${alpha})`

//   ctx.fillRect(x, y, width, height);
// }

// canvasTag.addEventListener('click', (e) => {
//   const positionX = e.clientX
//   const positionY = e.clientY

//   drawRec(positionX, positionY)

// })

/** @type rectangle[] */
let entities = [];
let canvas ;
let ctx;


function setUp(){

  canvas = document.getElementById('main-canvas')
  ctx = canvas.getContext("2d")

  for (let i = 0; i < 100; i++) {
    const rect = {}
    rect.width = Math.random() * 60;
    rect.height = Math.random() * 60;
    rect.originX = Math.random() * (600 - rect.width);
    rect.originY = Math.random() * (600 - rect.height);
    // const red = Math.random() * 255
    // const green = Math.random() * 255
    // const blue = Math.random() * 255
    // const alpha = Math.random()
    // ctx.fillStyle = `rgb(${red},${green},${blue}, ${alpha})`
    rect.speedX = (Math.round(Math.random() * 3)+ 1)
    entities.push(rect)
  }


}

function update() {
  
  entities.forEach(rect => {
    rect.originX  += rect.speedX
    rect.originX = rect.originX % 600
  });

}

function draw() {
  // ctx.clearRect(0,0,600,600)
  ctx.fullStyle = 'rgba(255,255,25,0.1)'
  ctx.fillRect(0,0,600,600)

  ctx.fillStyle= 'black'
  entities.forEach(rect => {
    ctx.fillRect(rect.originX, rect.originY, rect.width, rect.height)
  });

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