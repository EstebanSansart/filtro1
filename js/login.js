import {getUser} from "../apiConnection/api.js";
const formularioSesion = document.querySelector('#formularioSesion');
formularioSesion.addEventListener('click', validateLogin);

function validateLogin(e){
    e.preventDefault();
    const user = document.querySelector('#inputUser').value;
    const password = document.querySelector('#inputPassword').value;

    const sesionado = {
        user,
        password
    }
    buscador(sesionado)
}

async function buscador(sesionado){
    if (sesionado.user && sesionado.password){
        const usuarios = await getUsers();
        usuarios.forEach(element => {
            if (element.user === sesionado.user && element.password === sesionado.password){
                window.location.href = '../index.html';
            }
        });
    }
}