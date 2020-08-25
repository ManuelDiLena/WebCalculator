var operaciones = function(e) {
    var numero1 = parseFloat(document.getElementById("number1").value);
    var numero2 = parseFloat(document.getElementById("number2").value);
    var result = document.getElementById("result");
    var operacion = e.target.id;

    if (operacion == "add") {
        var resultado = numero1 + numero2;
    }
    else if (operacion == "subtract") {
        var resultado = numero1 - numero2;
    }
    else if (operacion == "multiply") {
        var resultado = numero1 * numero2;
    }
    else if (operacion == "divide") {
        var resultado = numero1 / numero2;
    }

    result.innerHTML = resultado;
}

var botones = document.getElementById("btns");
botones.addEventListener("click", operaciones);