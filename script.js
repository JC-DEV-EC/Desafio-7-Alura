document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('button');
    let screenValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonText = e.target.innerText;
            if (buttonText === '=') {
                screen.value = eval(screenValue);
                screenValue = screen.value;
            } else if (buttonText === 'Clear') {
                screenValue = '';
                screen.value = screenValue;
            } else if (buttonText === '√') {
                screen.value = Math.sqrt(eval(screenValue));
                screenValue = screen.value;
            } else if (buttonText === 'sin') {
                screen.value = Math.sin(eval(screenValue));
                screenValue = screen.value;
            } else if (buttonText === 'cos') {
                screen.value = Math.cos(eval(screenValue));
                screenValue = screen.value;
            } else if (buttonText === 'tan') {
                screen.value = Math.tan(eval(screenValue));
                screenValue = screen.value;
            } else if (buttonText === 'log') {
                screen.value = Math.log10(eval(screenValue));
                screenValue = screen.value;
            } else if (buttonText === 'ln') {
                screen.value = Math.log(eval(screenValue));
                screenValue = screen.value;
            } else if (buttonText === '^') {
                screenValue += '**';
                screen.value = screenValue;
            } else if (buttonText === '%') {
                screenValue += '/100';
                screen.value = screenValue;
            } else {
                screenValue += buttonText;
                screen.value = screenValue;
            }
        });
    });
});
