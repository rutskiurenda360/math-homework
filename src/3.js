  const generateRandomCode = () => {
    let randomNum = Math.floor(Math.random() * 100);
    let randomOp = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
    let num1 = Math.floor(Math.random() * 20);
    let num2 = Math.floor(Math.random() * 20);
    if (randomOp === '+') {
      return `${num1} + ${num2}`;
    } else if (randomOp === '-') {
      return `${num1} - ${num2}`;
    } else if (randomOp === '*') {
      return `${num1} * ${num2}`;
    } else {
      return `${num1} / ${num2}`;
    }
  };
  console.log(generateRandomCode());