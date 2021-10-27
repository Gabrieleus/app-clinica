imprimir_lista_historias();

let botonRegistrar = document.querySelector('#btnRegistrar');
let inputNombre = document.querySelector('#txtNombre');
let inputEdad = document.querySelector('#txtEdad');

botonRegistrar.addEventListener('click' , obtenerDatos);

function obtenerDatos(){
    let sNombre = inputNombre.value;
    let nEdad = Number(inputEdad.value);

    registrar_historia(sNombre , nEdad);
    imprimir_lista_historias();
};

function imprimir_lista_historias(){
    let tbody = document.querySelector('#tblhistorias tbody');
    let lista_historias = obtener_lista_historias();

    tbody.innerHTML = '';

    for(let i = 0; i < lista_historias.length; i++){
        let fila = tbody.insertRow();

        let celdaNombre = fila.insertCell();
        let celdaEdad = fila.insertCell();

        celdaNombre.innerHTML = lista_historias [i] [0];
        celdaEdad.innerHTML = lista_historias [i] [1];
    }
}