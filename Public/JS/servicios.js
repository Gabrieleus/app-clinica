let lista_historias = [];

function registrar_historia(psNombre, pnEdad){
    let nuevaHistoria = [];
    nuevaHistoria.push(psNombre, pnEdad);

    lista_historias.push(nuevaHistoria)
}

function obtener_lista_historias(){
    return lista_historias;
}