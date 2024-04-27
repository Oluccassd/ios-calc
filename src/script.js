const Display = document.getElementById("display");
const TeclasNumericas = document.querySelectorAll(".num");
const TeclasOperacionais = document.querySelectorAll(".operation");
const clear = document.querySelectorAll(".AC");
const invert = document.querySelectorAll(".plusminus");
const resultado = document.querySelectorAll(".result");

let sinal = false

TeclasNumericas.forEach((el) => {
    el.addEventListener("click", (evt) => {
        if (Display.innerHTML == "0") {
            Display.innerHTML = "0,";
        }
    else {
            Display.innerHTML += evt.target.innerHTML;
        }
    });
});

TeclasOperacionais.forEach((el) => {
    el.addEventListener("click", (evt) => {
        if (sinal == false) {
            sinal = true;
            switch(evt.target.innerHTML) {
                case "×":
                    Display.innerHTML += "*";
                    break;
                case ".":
                    Display.innerHTML += ",";
                    break;
                case "÷":
                    Display.innerHTML += "/";
                    break;
                default:
                    Display.innerHTML += evt.target.innerHTML;
            }
        }
    });
    sinal = false;
});

clear.forEach((el) => {
    el.addEventListener("click", (evt) => {
        sinal = false
        Display.innerHTML = "0";
    });
});
invert.forEach((el) => {
    el.addEventListener("click", (evt) => {
        sinal = false
        if (Display.innerHTML !== "0") {
            let num = parseFloat(Display.innerHTML);
            num *= -1;
            Display.innerHTML = num.toString();
        }
    });
});
resultado.forEach((el) => {
    el.addEventListener("click", (evt) => {
        sinal = false
        const res = eval(Display.innerHTML);
        Display.innerHTML = res;
    });
});
