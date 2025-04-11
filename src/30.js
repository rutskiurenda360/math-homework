function calculateArea(rectangles) {
  let total = 0;
  rectangles.forEach((rectangle, index) => {
    const [x1, y1, x2, y2] = rectangle;
    if (x1 < 0 || x2 < 0 || y1 < 0 || y2 < 0) return; // Check for invalid coordinates
    total += (x2 - x1 + 1) * (y2 - y1 + 1); // Calculate area
  });
  return total;
}

function findMinMaxValues(list) {
  let min = list[0];
  let max = list[0];
  list.forEach((value, index) => {
    if (value < min) {
      min = value;
    }
    if (value > max) {
      max = value;
    }
  });
  return [min, max];
}

function findNearestNeighbor(point1, point2, points) {
  const distance1 = calculateDistance(point1, point2);
  const distance2 = calculateDistance(points[0], points[1]);
  if (distance1 < distance2) {
    return "point1";
  } else if (distance1 > distance2) {
    return "point2";
  }
}

function drawShape(shape, colors) {
  // Implement drawing logic
}
