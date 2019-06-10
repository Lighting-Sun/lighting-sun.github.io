const tiraUno_div = document.getElementById("uno");
const tiraDos_div = document.getElementById("dos");
const tiraTres_div = document.getElementById("tres");

let tiraPapel_div = document.getElementById(".tira-papel");

let estiradoUno = false;
let estiradoDos = false;
let estiradoTres = false;

let alcance = "600px";

let obtenerId = (eleccion) => {
    switch (eleccion) {
        case "uno":
            if (estiradoUno === false) {
                estiradoUno = true;
                document.getElementById("desc1").style.display = "block";
                return document.getElementById("a").style.flexBasis = alcance;

            } else {
                estiradoUno = false;
                document.getElementById("desc1").style.display = "none";
                return document.getElementById("a").style.flexBasis = "200px";
            }
            break;
        case "dos":
            if (estiradoDos === false) {
                estiradoDos = true;
                document.getElementById("desc2").style.display = "block";
                return document.getElementById("b").style.flexBasis = alcance;

            } else {
                estiradoDos = false;
                document.getElementById("desc2").style.display = "none";
                return document.getElementById("b").style.flexBasis = "200px";
            }
            break;
        case "tres":
            if (estiradoTres === false) {
                estiradoTres = true;
                document.getElementById("desc3").style.display = "block";
                return document.getElementById("c").style.flexBasis = alcance;

            } else {
                estiradoTres = false;
                document.getElementById("desc3").style.display = "none";
                return document.getElementById("c").style.flexBasis = "200px";
            }
            break;
    }
}


function main() {

    tiraUno_div.addEventListener("click", () => {
        obtenerId("uno");
    })
    tiraDos_div.addEventListener("click", () => {
        obtenerId("dos");
    })
    tiraTres_div.addEventListener("click", () => {
        obtenerId("tres");
    })
}

main();
