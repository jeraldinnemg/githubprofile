const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

const urlUsuario = 'https://api.github.com/users/';



  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 1 Create usercard            */
  /* -------------------------------------------------------------------------- */

const resultado =fetch(urlUsuario).then(function(resultado) {
    return resultado.json;
}).then (function(res2){
    console.log (res2);
})

console.log(resultado);