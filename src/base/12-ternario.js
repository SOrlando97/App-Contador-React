//operador condicional ternario
const activo = true;
// let mensaje = '';
// if(activo){
//     mensaje = 'Activo';
// }else{
//     mensaje = 'Inactivo';
// }

//formas distintas de hacer el if

//const mensaje = (activo)? 'Activo' : 'Inactivo';
//const mensaje = (activo)? 'Activo' : null;

//esto solo para hacer la parte verdadera del if
const mensaje = activo && 'Activo';
console.log(mensaje)