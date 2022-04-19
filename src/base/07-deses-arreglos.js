//desestructuracion de arreglos
const personajes = ['Goku','Vegeta','Trunks'];
const [, ,p3] = personajes;

export const retornaArreglo =()=>{
    return['ABC',123];
}
//const [letras,numeros] = retornaArreglo();

//tarea
//se deberia usar useState
//1. el primer valor del arr se llamara nombre
//2. se llamara setnombre
const prueba = (valor)=>{
    return [valor,()=>{console.log('Hola Mundo')}];
}
const [nombre,setnombre] = prueba('Goku');
setnombre();