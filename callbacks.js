// Manejo de asincronía con callbacks

const cuentaAtras = (segundos, mostrarSegundos) => {
    let timer = setInterval(() => {
        // código de validación para generar errores que devolverá error
        mostrarSegundos(segundos, error);
        segundos--;
        if (segundos === 0) {
            clearInterval(timer);
        }
    },  1000);
}

cuentaAtras(10, (seg, error) => {
    console.log('Quedan ' + seg + ' segundos');
})

cuentaAtras(20, (seconds, error) => {
    console.log('Seconds: ' + seconds);
})

