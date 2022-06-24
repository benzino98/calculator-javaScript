const num1 = parseFloat(prompt('Enter First Number:'));
const num2 = parseFloat(prompt('Enter Second Number:'));

const operator = prompt('Enter operator(+, -, /, *): ');
let result = 0;
if (isNaN(num1) || isNaN(num2)) {
    alert('Wrong Input! Please enter the number again: ')
}else {
    if (operator== '+') {
        result = num1 + num2;
    }else if (operator == '-') {
        result = num1 - num2;
    }else if (operator == '/') {
        result = num1 / num2;
    }else if (operator == '*') {
        result = num1 * num2;
    }
    alert('Result: ' + num1 + operator + num2 + '=' + result);
}