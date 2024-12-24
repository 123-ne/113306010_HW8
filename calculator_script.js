document.getElementById('calculateButton').addEventListener('click', () => {
    const number1 = parseFloat(document.getElementById('number1').value);
    const operator = document.getElementById('operator').value;
    const number2 = parseFloat(document.getElementById('number2').value);
    const resultDisplay = document.getElementById('resultDisplay');

    if (isNaN(number1) || isNaN(number2)) {
        resultDisplay.textContent = 'Please enter valid numbers.';
        return;
    }

    let result;

    switch (operator) {
        case '+':
            result = add(number1, number2);
            break;
        case '-':
            result = subtract(number1, number2);
            break;
        case '*':
            result = multiply(number1, number2);
            break;
        case '/':
            result = divide(number1, number2);
            break;
        default:
            resultDisplay.textContent = 'Invalid operator selected.';
            return;
    }

    resultDisplay.textContent = `Result: ${result.toFixed(2)}`;
});

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
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}
