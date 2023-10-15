const buttons = document.querySelectorAll('.digit');
const input = document.getElementById('input');
const history = document.querySelector('.history');
let currentOperator = null;

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        let buttonValue = button.textContent;
        input.value += buttonValue;
    });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(function(operatorButton) {
    operatorButton.addEventListener('click', function() {
        let operator = operatorButton.textContent;
        
        /*Проверяем, если уже есть текущий оператор, заменяем его*/
        if (currentOperator !== null) {
            input.value = input.value.slice(0, -1); /* Удаляем последний символ */
        }
        
        input.value += operator;
        currentOperator = operator;
    });
});
 /* Кнопка "C" (очистить ввод) */
document.querySelector('.clear').addEventListener('click', function() {
    input.value = '';
    currentOperator = null;
});
  /* Кнопка "=" (вычислить) */
document.querySelector('.calculate').addEventListener('click', function() {
    try {
        let result = eval(input.value);
        const newParagraph = document.createElement('p');
        newParagraph.textContent = input.value + '=' + result;
        history.appendChild(newParagraph);
        input.value = result;
        currentOperator = null;
    } catch (error) {
        input.value = 'Ошибка';
    }
});
