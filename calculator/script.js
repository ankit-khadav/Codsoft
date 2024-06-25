document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let operand1 = 0;
    let operand2 = null;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                operand1 = 0;
                operand2 = null;
                display.textContent = '0';
            } else if (value === '+' || value === '-' || value === '*' || value === '/') {
                operator = value;
                operand1 = parseFloat(currentInput);
                currentInput = '';
            } else if (value === '=') {
                operand2 = parseFloat(currentInput);
                let result;
                if (operator === '+') {
                    result = operand1 + operand2;
                } else if (operator === '-') {
                    result = operand1 - operand2;
                } else if (operator === '*') {
                    result = operand1 * operand2;
                } else if (operator === '/') {
                    result = operand1 / operand2;
                }
                display.textContent = result;
                currentInput = '';
                operator = '';
                operand1 = result;
                operand2 = null;
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });
});
