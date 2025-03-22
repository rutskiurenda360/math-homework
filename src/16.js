function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function factorial(n) {
  if (n < 0) throw new Error('Factorial is not defined for negative numbers');
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}

function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1 || n === 2) return [1, 1];
  let a = 1, b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return [a, b];
}

function drawRectangle(width, height) {
  if (!width || !height) throw new Error('Dimensions must be numbers');
  const rectangle = () => {
    for (let y = 0; y < height; y++) {
      console.log('*'.repeat(width));
    }
  };
  return rectangle();
}

function drawTriangle(height, width) {
  if (!width || !height) throw new Error('Dimensions must be numbers');
  const triangle = () => {
    for (let i = 0; i < height; i++) {
      console.log('*'.repeat(width));
    }
  };
  return triangle();
}

function drawSquare(sideLength, width) {
  if (!width || !sideLength) throw new Error('Dimensions must be numbers');
  const square = () => {
    for (let y = 0; y < sideLength; y++) {
      console.log('*'.repeat(width));
    }
  };
  return square();
}
