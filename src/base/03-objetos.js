const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 65465464,
        lat: 14.3232,
        lng: 34.92321
    }
};
console.log({persona});
const persona2 = {...persona};
persona2.nombre = 'Peter';
console.log(persona);
console.log(persona2)