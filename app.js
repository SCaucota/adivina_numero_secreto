const readlineSync = require('readline-sync');

const { generarNumeroAleatorio, verificarAdivinanza } = require('./adivinanza');

const obtenerNumeroUsuario = () => {
    const input = readlineSync.question("Ingrese un numero: ");
    return Number(input);
};

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();

    let numeroAdivinado = 0;

    console.log('¡Bienvenido a "Adivina El Numero Secreto"!');

    console.log('Intenta adivinar el numero del 1 al 100.\n');

    while (numeroAdivinado !== numeroSecreto) {

        numeroAdivinado = obtenerNumeroUsuario();
        
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
        
    }
};

juegoAdivinanza();