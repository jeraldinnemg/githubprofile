const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

const urlUsuario = 'https://api.github.com/users/';



  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 1 Create usercard            */
  /* -------------------------------------------------------------------------- */

function peticion(url) {
    fetch(url).then(respuesta => {
        console.log(respuesta);
        return respuesta.json()
    }) .then (datos => {
        console.log(datos); 
    })
}