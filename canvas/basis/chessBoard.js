let canvas;
let ctx;
const canvasWidth = 600
const canvasHeight = 600
const chessBoard = []
const boardRows = 4
const boardCols = 4
const sqrWidth = canvasWidth / boardCols
const sqrHeight = canvasHeight / boardRows

function createSquare(x, y, color) {
  const sqr = {}
  sqr.x = x
  sqr.y = y
  sqr.color = color
  return sqr
}

function createRow(indexRow, positionY){
  let isBlack = indexRow % 2 
  const row = []
  let positionX = 0

  for (let i = 0; i < boardCols; i++) {
    let sqrColor = isBlack ? 'black' : 'white'
    
    colSqr = createSquare(positionX, positionY, sqrColor)
    console.log(colSqr)
    isBlack = !isBlack
    positionX += sqrWidth
    row.push(colSqr)
  }
  return row
}


function setUp() {
  canvas = document.getElementById('chess-canvas')
  ctx = canvas.getContext('2d')
  console.log(canvas)
  let positionY = 0

  for (let i = 0; i < boardRows; i++) {
    const currentRowPositionY = positionY + (i * sqrHeight)
    const currentRow = createRow(i, currentRowPositionY)
    chessBoard.push(currentRow)
  }
}


function update() {}

function draw() {
  chessBoard.forEach(row => {
    row.forEach(sqr => {
      ctx.fillStyle = sqr.color
      ctx.fillRect(sqr.x, sqr.y, sqrWidth, sqrHeight)
    })
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