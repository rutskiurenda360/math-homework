function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    throw new Error('Divide by zero is not allowed.');
  }
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function round(number) {
  return parseFloat(number.toFixed(2));
}

function squareRoot(num) {
  return Math.sqrt(num);
}
