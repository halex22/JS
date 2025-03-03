let canvas;
let ctx;
const entities = [];
const minWidth = 20;
const rectHeight = 30;
let initialX = 0;
const lineHeight = 60;
const canvasWidth = 600


function speedGenerator(indexNumber) {
  const speed = Math.round(Math.random() * 2 + 1);
  return indexNumber % 2 ? speed * -1 : speed;
}

function cleanBeforeRefreshing() {
  ctx.fillStyle = "rgba(255,255,255)";
  ctx.fillRect(0, 0, 600, 600);
}

function generateRectWidth() {
  return minWidth * Math.round(Math.random() * 3 + 1)
}

/**
 * The function `createRectangle` generates a rectangle object with random width, position, and speed
 * based on the input index number.
 * @param {number} indexNumber - The `indexNumber` parameter is used to determine the position of the rectangle
 * on the Y-axis based on the `lineHeight` and the index number.
 * @returns A rectangle object with properties for width, positionX, positionY, and speedX is being
 * returned from the `createRectangle` function.
 */
function createRectangle(indexNumber) {
  const rect = {};
  rect.width = minWidth * Math.round(Math.random() * 6 + 1);
  rect.positionX = initialX;
  rect.positionY = indexNumber * lineHeight + lineHeight / 4;
  rect.speedX = speedGenerator(indexNumber);
  return rect;
}

function createInLineRectangle(rectWidth, rectPositionX, linePositionY, speed) {
  const rect = {};
  rect.width = rectWidth;
  rect.positionX = rectPositionX;
  rect.positionY = linePositionY
  rect.speedX = speed;
  return rect;
}

function createLine(currentLineIndex) {
  let inLineXPosition = 0;
  const rectangleLine = []
  const lineSpeed = speedGenerator(currentLineIndex)
  const positionY = currentLineIndex * lineHeight + lineHeight / 4;

  while (inLineXPosition  < canvasWidth) {
    const rectWidth = generateRectWidth()
    if (inLineXPosition + rectWidth > canvasWidth) break
    const rect = createInLineRectangle(rectWidth, inLineXPosition, positionY, lineSpeed)
    inLineXPosition += rectWidth + 3
    rectangleLine.push(rect)
  }
  return rectangleLine
}

function setUp() {
  canvas = document.getElementById("lines-canvas");
  ctx = canvas.getContext("2d");

  for (let i = 0; i < 10; i++) {
    const rectLine = createLine(i)
    entities.push(rectLine)
  }
}

function update() {

  entities.forEach(rectLine => {
    rectLine.forEach(rect => {
    rect.positionX += rect.speedX;
    if (rect.positionX + rect.width < 0) rect.positionX = 600;
    if (rect.positionX > 600) rect.positionX = 0 - rect.width / 2;
    })
  })
}

function draw() {
  cleanBeforeRefreshing();

  ctx.fillStyle = "rgb(0,0,0)";
  entities.forEach(rectLine => {
    rectLine.forEach(rect => {
      ctx.fillRect(rect.positionX, rect.positionY, rect.width, rectHeight);
    })
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
