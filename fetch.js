// Empleo de fetch para peticiones http/s
// fetch usa la sintaxis then catch para consumir las respuestas a las peticiones que realiza

// fetch para peticiones get
// fetch(endopoint).then(//).then(//).catch(//)

const apiEndpoint = 'http://jsonplaceholder.typicode.com/';
let user;

fetch(apiEndpoint + 'users/2')
    .then(res => res.json())
    .then(res => {
        user = res.name;
        document.getElementById('mensaje').innerHTML = user;
    })
    .catch(err => console.log(err))

