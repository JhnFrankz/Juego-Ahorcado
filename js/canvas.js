var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

function dibujarTablero(palabraSecreta) {
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(20, 750); //izquierda
    pincel.lineTo(220, 750);//derecha
    pincel.lineTo(120, 700);//medio
    pincel.fill();

    pincel.fillStyle = "white";
    pincel.beginPath();
    pincel.moveTo(60, 740);//izquierda
    pincel.lineTo(180, 740);//derecha
    pincel.lineTo(120, 710);//medio
    pincel.fill();

    pincel.fillStyle = "black";
    pincel.fillRect(115, 90, 10, 620);  //barra vertical

    pincel.fillRect(125, 90, 480, 10);  //barra horizontal hasta X 605

    dibujarGuiones(palabraSecreta);
}

function dibujarGuiones(palabra) {
    var x = 300;
    var y = 750;
    var tamanioGuion = 70;
    var separacion = 15;
    pincel.fillStyle = "black";

    for (let i = 0; i < palabra.length; i++) {
        pincel.beginPath();
        pincel.lineWidth = 10;
        pincel.moveTo(x, y);
        x += tamanioGuion;
        pincel.lineTo(x, y);
        pincel.stroke();
        x += separacion;
    }
}

//Posicion texto tecleado
function dibujarLetraCorrecta(tecla) {

    for (let i = 0; i < letrasPalabraElegida.length; i++) {
        if (letrasPalabraElegida[i] == tecla) {
            //Si el la letra tecleada ya fue dibujada que se rompa el bucle
            if (indiceLetrasEncontradas.includes(i)) {
                console.log("Esa letra ya fue encontrada!");
                break;
            }

            //Guarda la posición de la tecla ya encontrada
            indiceLetrasEncontradas.push(i);
        
            //Dibuja la tecla encontrada
            pincel.fillStyle = "black";
            pincel.font = "60px serif";
            pincel.fillText(tecla, 315 + (i * 85), 730);
        }
    }
}

//Posicion texto tecleado
var separacionTextoX;

function dibujarLetraIncorrecta(letra) {
    let posicionInicialTextoX = 750;
    pincel.fillStyle = "black";
    pincel.font = "30px serif";
    pincel.fillText(letra, posicionInicialTextoX + separacionTextoX, 400);
    separacionTextoX += 30;
}

function dibujarMensajePerdiste() {
    pincel.fillStyle = "red";
    pincel.font = "30px serif";
    pincel.fillText("Fallaste!, la letra era " + palabraSecreta, 750, 300);
    window.removeEventListener("keydown", capturarLetra);
}

function dibujarMensajeGanaste() {
    pincel.fillStyle = "green";
    pincel.font = "30px serif";
    pincel.fillText("Felicidades, descubriste la palabra!", 750, 300);
    window.removeEventListener("keydown", capturarLetra);
}

function dibujarAhorcado(contadorErrores) {
    switch (contadorErrores) {
        case 1:
            dibujarCabeza();
            break;
        case 2:
            dibujarTronco();
            break;
        case 3:
            dibujarPiernaIzquierda();
            break;
        case 4:
            dibujarPiernaDerecha();
            break;
        case 5:
            dibujarBrazoIzquierdo();
            break;
        case 6:
            dibujarBrazoDerecho();
            break;
        /*
        case 11:
            dibujarMensajePerdiste(palabraSecreta);
            break;
        case 12:
            dibujarMensajeGanaste();
            break;
        */
        default:
            break;
    }
}

function dibujarCabeza() {
    pincel.fillStyle = "black";
    pincel.fillRect(595, 100, 10, 50);  //barra vertical

    pincel.beginPath();
    pincel.arc(600, 200, 50, 0, 2 * Math.PI);
    pincel.fill();

    pincel.fillStyle = "white";
    pincel.beginPath();
    pincel.arc(600, 200, 40, 0, 2 * Math.PI);
    pincel.fill();
}

function dibujarTronco() {
    pincel.fillStyle = "black";
    pincel.fillRect(595, 250, 10, 200);  //barra vertical
}

function dibujarPiernaIzquierda() {
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.lineWidth = 10;
    pincel.moveTo(601, 447);
    pincel.lineTo(500, 555);
    pincel.stroke();

}

function dibujarPiernaDerecha() {
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.lineWidth = 10;
    pincel.moveTo(599, 447);
    pincel.lineTo(700, 555);
    pincel.stroke();
}

function dibujarBrazoIzquierdo() {
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.lineWidth = 10;
    pincel.moveTo(601, 347);
    pincel.lineTo(500, 255);
    pincel.stroke();
}

function dibujarBrazoDerecho() {
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.lineWidth = 10;
    pincel.moveTo(599, 347);
    pincel.lineTo(700, 255);
    pincel.stroke();
}