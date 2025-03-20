function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const numbers = [];
for (let i = 0; i < 10; i++) {
  const number = getRandomInt(100);
  if (!numbers.includes(number)) {
    numbers.push(number);
  }
}
console.log(numbers);
