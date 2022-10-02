const main = dcoument.getElementById('#main');
const form = document.querySelector('user-form');
const input = document.querySelector('input');
const urlUsuario = 'https://api.github.com/users/';



  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
    fetch(urlUsuario, {
      headers: {
        'authorization': token
      }
    }).then(function(response) {
      return response.json()
    }).then(function(parsedResponse) {
      userName.innerText = parsedResponse.firstName
    })
  };

  obtenerNombreUsuario();
