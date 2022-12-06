function calculate() {
    let operation = document.getElementById('operation').value;
    let x = Number(document.getElementById('num1').value);
    let y = Number(document.getElementById('num2').value);
    switch (operation) {
        case "add":
            result.innerHTML = x + y;
            break;
        case "sub":
            result.innerHTML = x - y;
            break;
        case "multi":
            result.innerHTML = x * y;
            break;
        case "div":
            result.innerHTML = (x / y);
            break;                              
    }
}
start.addEventListener('click', calculate);