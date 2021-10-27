'use strict';

let botonRegistrar = document.querySelector('#btnRegistrar');
let inputNombre = document.querySelector('#txtNombre');
let inputEdad = document.querySelector('#txtEdad');

botonRegistrar.addEventListener('click' , obtenerDatos);

function obtenerDatos(){
    let sNombre = inputNombre.value;
    let nEdad = Number(inputEdad.value);

    registrar_historia(sNombre , nEdad);
    
};

