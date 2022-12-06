function calculate() {
    var calculation = document.getElementById('calculation').value;
    if (calculation.includes('+')) {
        number = calculation.split("+");
        //result.innerHTML = Number(number[0]) + Number(number[1]);
        result.innerHTML = parseInt(number[0]) + parseInt(number[1]);

    } else if (calculation.includes('-')) {
        number = calculation.split("-");
        //result.innerHTML = number[0] - number[1];
        result.innerHTML = parseInt(number[0]) - parseInt(number[1]);

    }  else if (calculation.includes('*')) {
        number = calculation.split("*");
        //result.innerHTML = number[0] * number[1];
        result.innerHTML = parseInt(number[0]) * parseInt(number[1]);

    }  else if (calculation.includes('/')) {
        number = calculation.split("/");
        //result.innerHTML = (number[0] / number[1]).toFixed(2);
        result.innerHTML = parseInt(number[0]) / parseInt(number[1]);
    }
}
start.addEventListener('click', calculate);
