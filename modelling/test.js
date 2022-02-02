/* Used to test out the models */

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function findNewPosition({ x, y, angle, length }) {
  let newX = x + length * Math.cos(toRadians(angle));
  let newY = y + length * Math.sin(toRadians(angle));
  return { x: parseInt(newX), y: parseInt(newY) };
}

const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.canvas.height = window.innerHeight - 10;
ctx.canvas.width = window.innerWidth - 10;

/* Draw out a tree */
const rootPos = { x: window.innerWidth / 2, y: window.innerHeight - 40 };
const numberOfBranches = 100;
const normalLength = 10;

function recTreeBuilder(x, y, length, angle) {
  if (length < 10) {
    return;
  }
  ctx.beginPath();
  ctx.moveTo(x, y);
  let newPos = findNewPosition({ x: x, y: y, length: length, angle: angle });
  ctx.lineTo(newPos.x, newPos.y);
  ctx.stroke();

  recTreeBuilder(newPos.x, newPos.y, length - 7, angle + 20);
  recTreeBuilder(newPos.x, newPos.y, length - 7, angle - 20);
}

ctx.beginPath();
ctx.arc(rootPos.x, rootPos.y, 10, 0, 2 * Math.PI);
ctx.stroke();
// Builder of tree :) set angle to -90 to get a straight up angle.
recTreeBuilder(rootPos.x, rootPos.y, 95, -90);
