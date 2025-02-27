const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

// for (let i = 0; i < 100; i++) {
//   const originX = Math.random() * 600;
//   const originy = Math.random() * 600;
//   const width = Math.random() * 200;
//   const height = Math.random() * 200;

//   const red = Math.random() * 255
//   const green = Math.random() * 255
//   const blue = Math.random() * 255
//   const alpha = Math.random()

//   ctx.fillStyle = `rgb(${red},${green},${blue}, ${alpha})`

//   ctx.fillRect(originX, originy, width, height);
// }

const intervalID = setInterval(() => {
  const originX = Math.random() * 600;
  const originy = Math.random() * 600;
  const width = Math.random() * 200;
  const height = Math.random() * 200;

  const red = Math.random() * 255
  const green = Math.random() * 255
  const blue = Math.random() * 255
  const alpha = Math.random()

  ctx.fillStyle = `rgb(${red},${green},${blue}, ${alpha})`

  ctx.fillRect(originX, originy, width, height);
}, 250);

setTimeout(() => {
  clearInterval(intervalID)
}, 1000 * 10);
