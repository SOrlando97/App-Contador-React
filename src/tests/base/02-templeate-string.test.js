
import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-templeate-string';

describe('Pruebas en 02-template-string.js', ()=>{
    test('getSaludo debe retornar Hola Orlando',()=>{

        const nombre = 'Orlando';
        const saludo = getSaludo(nombre)

        expect (saludo).toBe('Hola '+nombre);
    })
    // getSaludo debe retornar Hola Ahioros si no hay argumento nombre
    test('getSaludo debe retornar Hola Ahioros',()=>{

        const saludo = getSaludo()

        expect (saludo).toBe('Hola Ahioros');
    })
})