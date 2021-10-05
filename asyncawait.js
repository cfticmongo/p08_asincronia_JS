// Manejo de asincronía con async await

// Declaración de promesas (idem anterior)

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

const getMensaje = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hola ' + user);
        }, 3000)
    })
}

// Implementación de async await para el 'consumo' de promesas
// Crear una función asíncrona y usando try-catch utilizar funciones que devuelvan promesas

const getData = async () => {
    try {
        const data = await getUser(2, 5000);
        console.log(data);
        const mensaje = await getMensaje(data.user);
        console.log(mensaje);
    } catch (err) {
        console.error(err);
    }
}

getData();
