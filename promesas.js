// Manejo de asincronía con promesas

// Declaración de promesas

let users = ['Juan Pérez', 'Lucía Gómez', 'Carlos López', 'Sara García'];

const getUser = (posicion, timeout) => {
    return new Promise((resolve, reject) => {
        if(posicion < 0 || posicion >= users.length) {
            reject({mensaje: 'Posición no válida'})
        }
        setTimeout(() => {
            resolve({user: users[posicion]})
        }, timeout)
    })
}

// Implementación de la promesa

getUser(8, 5000)
    .then(data => {
        console.log(data);
        return data.user // Ejecutar algo que no puedes hacer hasta que no tengas el valor original que devuelve la promesa
    })
    .then(data => {
        console.log('Hola ' + data); // Ejecutar algo que no puedes hacer hasta que no tengas el valor original que devuelve la promesa
    })
    .catch(error => console.error(error));














