// Manejo de asincronía con promesas

// Declaración de promesas

let users = ['Juan Pérez', 'Lucía Gómez', 'Carlos López', 'Sara García'];

const getUser = (posicion, timeout) => {
    return new Promise((resolve, reject) => {
        reject({mensaje: 'Posición no válida'})
        setTimeout(() => {
            resolve({user: users[posicion]})
        })
    }, timeout)
}

// Implementación de la promesa

getUser(19, 2000)
    .then(data => {
        console.log(data);
        return getUser(3, 3000);
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error(error));
















const mostrarMensaje = (nombre) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hola ' + nombre);
        }, 3000)
    })
    
}