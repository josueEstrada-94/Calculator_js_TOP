const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const specialChars = ['%','*','/','-','+','='];
let output = ''

//Define calculate function based on clicked button.
const calculate = (btnValue) => {
    console.log(btnValue);
}
//Adding event listener to buttons. Call calculate() on click.
buttons.forEach((button) => {
    button.addEventListener('click', (e) =>{
        calculate(e.target.dataset.value)
    })
})