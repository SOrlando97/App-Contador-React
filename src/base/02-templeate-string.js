const nombre ='Orlando';
const apellido = 'Mendez';
const nombreCompleto = `${nombre} ${apellido}`;
//console.log(nombreCompleto);
export function getSaludo(nombre = 'Ahioros'){
    return 'Hola ' + nombre;
}
//console.log(`Este es un texto: ${getSaludo(nombre)}`)