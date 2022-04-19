import { retornaArreglo } from '../../base/07-deses-arreglos'

describe('Pruebas en desestructuracion',()=>{
    test('debe retornar un numero', () => { 
        
        const [letras,numeros] = retornaArreglo();
        expect(letras).toEqual('ABC');
        expect(typeof letras).toEqual('string');

        expect(numeros).toEqual(123);
        expect(typeof numeros).toEqual('number');



     })
})