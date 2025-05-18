function calculateSum(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

function findMax(numbers) {
    return Math.max(...numbers);
}

function displayProgress(text, progressPercentage = 50) {
    const formattedProgress = `${progressPercentage}%`;
    console.log(`${text}: ${formattedProgress}`);
}
