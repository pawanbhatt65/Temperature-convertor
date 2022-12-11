let lastInput = "celSius";

document.getElementById("submit").onclick = getResult;
document.getElementById("reset").onclick = getReset;

document.getElementById("celsius").onchange = function () {
    lastInput = "celSius";
}

document.getElementById("fahrenheit").onchange = function () {
    lastInput = "fahrenHeit";
}

document.getElementById("kelvin").onchange = function () {
    lastInput = "kelVin";
}

function getResult() {
    let celSius1 = document.getElementById("celsius").value;
    celSius4 = parseFloat(celSius1);

    let fahrenHeit1 = document.getElementById("fahrenheit").value;
    fahrenHeit4 = parseFloat(fahrenHeit1);

    let kelVin1 = document.getElementById("kelvin").value;
    kelVin4 = parseFloat(kelVin1);

    let resultCelsius;
    let resultFahrenheit;
    let resultKelvin;

    if (lastInput === "celSius") {
        resultFahrenheit = (celSius4 * 9 / 5) + 32;
        resultKelvin = celSius4 + 273.15;
        document.getElementById("fahrenheit").value = resultFahrenheit;
        document.getElementById("kelvin").value = resultKelvin;
    } else if (lastInput === "fahrenHeit") {
        resultCelsius = (fahrenHeit4 - 32) * 5 / 9;
        resultKelvin = (fahrenHeit4 * 5 / 9) + 459.67;
        document.getElementById("celsius").value = resultCelsius;
        document.getElementById("kelvin").value = resultKelvin;
    } else if (lastInput === "kelVin") {
        resultCelsius = kelVin4 - 273.15;
        resultFahrenheit = ((kelVin4 - 273.15) * 9 / 5) + 32;
        document.getElementById("celsius").value = resultCelsius;
        document.getElementById("fahrenheit").value = resultFahrenheit;
    }
    document.getElementById("celsius").innerHTML = resultCelsius;
    document.getElementById("fahrenheit").innerHTML = resultFahrenheit;
    document.getElementById("kelvin").innerHTML = resultKelvin;
}
function getReset() {
    document.getElementById("celsius").value = "0";
    document.getElementById("fahrenheit").value = "0";
    document.getElementById("kelvin").value = "0";
}