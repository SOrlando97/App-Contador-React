//desestructuracion
//asignacion desestructurante
const persona= {
    nombre : 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango:'Soldado',
};
//el primer nombre es el atributo del objeto, el segundo
//es el alias que se le pone en caso de que esa variable ya exista
//const {nombre:nombre2}= persona;
//va a tirar error si se intenta hacer console log a nombre y no a nombre2
const {nombre, edad, clave}= persona;

console.log(nombre);
console.log(edad);
console.log(clave);
//por ejemplo en rango si ya tiene rango le deja ese
//si no, le pone el de capitan
// const retornaPersona = ({nombre,edad,rango = 'Capitan'}) =>{
//     console.log(nombre,edad,rango);
// }
// retornaPersona(persona);
// const retornaPersona2 = ({nombre,edad,clave,rango = 'Capitan'}) =>{
//     return{
//         nombreClave:clave,
//         anios:edad
//     }
// }
// retornaPersona2(persona);

const useContext=({clave,nombre,edad,rango='Capitan'})=>{
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat:14.1232,
            lng: -12.654
        }
    }
};
const {nombreClave, anios, latlng:{lat,lng}} = useContext( persona );
console.log((nombreClave,anios))
console.log((lat,lng))