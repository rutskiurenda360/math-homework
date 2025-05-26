function multiply(numbers) {
    let result = 0;
    numbers.forEach(number => {
        result += number;
    });
    return result;
}

let nums = [1, 2, 3];
console.log(multiply(nums));
