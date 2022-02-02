/* Method to find a position of a node from another node */
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

// @params: currentPositionX and currentPositionY is the current position in a grid (x y)
// @params: angle is the angle in degree ( (-) negative 90 is straight up while (+) 90 is straight down )
// @params: length is the length away from the current node. (length of the line to the new xy positions)
// @returns: newX, newY is the position of the new node area.
export function findNewPosition({ x, y, angle, length }) {
  let newX = x + length * Math.cos(toRadians(angle));
  let newY = y + length * Math.sin(toRadians(angle));

  return { x: parseInt(newX), y: parseInt(newY) };
}
