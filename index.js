const display = document.getElementById('userInput');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.innerHTML;
        if (!isNaN(buttonValue) || buttonValue === '.') {
            if (!(buttonValue === '.' && currentInput.includes('.'))) {
                currentInput += buttonValue;
            }

            display.value = currentInput;
        } else if (buttonValue === 'AC') {
            currentInput = currentInput.slice(-1, -1);
            display.value = currentInput;
        } else if (buttonValue === 'DEL') {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        } else if (['+', '-', '*', '/'].includes(buttonValue)) {
            if (currentInput && !['+', '-', '*', '/'].includes(currentInput.slice(-1))) {
                currentInput += buttonValue;
            }
        } else if (buttonValue === '=') {
            currentInput = eval(currentInput).toString();
            display.value = currentInput;
        }
    })
});

display.addEventListener('keydown', (event) => {
    event.preventDefault();
});