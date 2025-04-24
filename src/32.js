function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2 || n === 3) return true;

  const sqrtN = Math.sqrt(n);

  for (let i = 2; i <= sqrtN; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function findGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function calculateArea(radius, height) {
  const area = Math.PI * radius ** 2 * height;
  console.log(`The area of the circle with radius ${radius} and height ${height} is: ${area}`);
}
