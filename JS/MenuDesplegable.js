"use strict"

const boton = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

boton.addEventListener('click', () => {
    document.getElementById('primero').classList.toggle('primero');
    document.getElementById('segundo').classList.toggle('segundo');
    document.getElementById('tercero').classList.toggle('tercero');
    menu.classList.toggle('activo');
});