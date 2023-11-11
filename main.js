let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener('DOMContentLoaded', function(){
    //Store all components on HTML in JS.
    let clear = document.querySelector('.ac-operator');
    let equal = document.querySelector('.eq-operator');
    let decimal = document.querySelector('.decimal');
    let del= document.querySelector('.del-operator');

    let numbers =document.querySelectorAll('.num');
    let operators = document.querySelectorAll('.operator');

    let previousScreen = document.querySelector('.previous');
    let currentScreen = document.querySelector('.current');

    //Establish the digits in numbers buttons.

    numbers.forEach((number) => number.addEventListener('click', function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }));

    operators.forEach((op) => op.addEventListener('click', function(e){
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + '' + operator;
        currentScreen.textContent = currentValue;
    }));

    //Clear the screen.
    clear.addEventListener('click', function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        currentScreen.textContent = currentValue;
        previousScreen.textContent = previousValue;

    });

    //Delete the last value.
    del.addEventListener('click', () => {
        handleDelete();
        currentScreen.textContent = currentValue;
        previousScreen.textContent = previousValue + '' + operator;
    });

    //Calculations.
    equal.addEventListener('click', function(){
        if(currentValue != '' && previousValue != ''){
            calculate();
            previousScreen.textContent = '';
            currentScreen.textContent = previousValue
        }    
    })

    decimal.addEventListener('click', function(){
        addDecimal();
    })
});

//Functions for the operation buttons.

function handleNumber(num){
    if(currentValue.length <= 6){
    currentValue += num;
    };
};

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function handleDelete(){
    if(currentValue.length > 0){
        currentValue = currentValue.slice(0, -1)
    }
}

function calculate(){
    currentValue = Number(currentValue);
    previousValue = Number(previousValue);

    if(operator === '+'){
        previousValue += currentValue;
    } 
    else if(operator === '-') {
        previousValue -= currentValue;
    }
    else if(operator === '*') {
        previousValue *= currentValue;
    }
    else if(operator === '/') {
        previousValue /= currentValue;
    }
    else {
        previousValue %= currentValue;
    }
    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}

function addDecimal(num){
    if(!currentValue.includes('.')){
        currentValue += '.';
    }
}