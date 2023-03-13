'use strict';

function BinarioADecimal(num) {
    // Convertir la cadena binaria a decimal
    let numeroDecimal = parseInt(num, 2);

    return numeroDecimal;
}

function DecimalABinario(num) {
    let binario = ""; // Inicializar el número binario como una cadena vacía

    while (num > 0) {
        let bit = num % 2; // Obtener el bit menos significativo
        binario = bit + binario; // Agregar el bit a la izquierda del número binario
        num = Math.floor(num / 2); // Reducir el número decimal
    }

    return binario; // Devolver el número binario como una cadena de texto
}
module.exports = {
    BinarioADecimal,
    DecimalABinario,
};