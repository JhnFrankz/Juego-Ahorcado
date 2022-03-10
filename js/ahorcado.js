var palabras = ["JAVA", "PYTHON", "ORACLE", "LENGUAJE", "JAVASCRIPT", "AHORCADO"];;
var letrasIngresadas;
var indiceLetrasEncontradas;
var contadorErrores;
var palabraSecreta;
var teclasValidas = "ABCDEFGHIJKLMNÑOPQRSTUVXWYZ";
var letrasPalabraElegida;

var botonIniciarJuego = document.getElementById("iniciar-juego");
botonIniciarJuego.onclick = iniciarJuego;

var botonAgregarPalabra = document.getElementById("nueva-palabra");
botonAgregarPalabra.onclick = agregarPalabra;

function iniciarJuego() {
    
    letrasIngresadas = [];
    indiceLetrasEncontradas = [];
    contadorErrores = 0;

    //canvas.js
    separacionTextoX = 0

    palabraSecreta = seleccionarPalabraSecreta();
    window.addEventListener("keydown", capturarLetra);
    dibujarTablero(palabraSecreta);
    console.log(palabraSecreta);
}

function seleccionarPalabraSecreta() {
    let palabraRandom = palabras[Math.floor(Math.random() * palabras.length)];
    letrasPalabraElegida = palabraRandom.split("");
    console.log(letrasPalabraElegida)
    return palabraRandom;
}

function capturarLetra(event) {
    let teclaIngresada = event.key.toUpperCase();

    if(validarTecla(teclaIngresada)) {

        if(buscarLetraEnPalabra(teclaIngresada)/* && contadorErrores < 6*/) {
            dibujarLetraCorrecta(teclaIngresada);
        } else {
            contadorErrores++;
            dibujarLetraIncorrecta(teclaIngresada);
            dibujarAhorcado(contadorErrores);
        }

        if (contadorErrores >= 6) {
            dibujarMensajePerdiste();
        }

        if (indiceLetrasEncontradas.length == palabraSecreta.length) {
            dibujarMensajeGanaste();
        }
        
        console.log(contadorErrores);
        console.log(indiceLetrasEncontradas);
    }
}

function validarTecla(teclaIngresada) {
    //Verifica si la tecla presionada está entre las teclas válidas
    if (teclasValidas.indexOf(teclaIngresada) >= 0) {
        return true;
    }

    return false;
}

function buscarLetraEnPalabra(teclaIngresada) {
    let letraEncontrada = false;

    //Si le letra se encuentra devuelve true
    if (palabraSecreta.indexOf(teclaIngresada) >= 0) {
        letraEncontrada = true;
    }

    //mostrar todas las teclas que se presionen
    letrasIngresadas.push(teclaIngresada);
    console.log("Letras ingresadas: ", letrasIngresadas)
    return letraEncontrada;
}

function agregarPalabra() {
    //Se almacena el input
    let palabra = document.getElementById("input-nueva-palabra");
    
    console.log(palabra.value);
    if (palabra.value != "") {
        palabras.push(palabra.value.toUpperCase());
        palabra.value = "";
    }
    
    console.log(palabras);
}