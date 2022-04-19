//para devolver un array u objeto hay que quitar todo cmo anterior pero poner parentesis
export const getUser = () =>
    ({
        uid: 'ABC123',
        username: 'Usuario1'
    })


//tarea
//1. transformar a una funcion de flecha
//2. tiene que retornar un objeto
//3. pruebas
export const getUsuarioActivo = (nombre)=>({uid:'ABC123', username: nombre })

const usuarioActivo = getUsuarioActivo('Fernando');

