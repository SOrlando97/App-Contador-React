import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con Promesas', ()=>{

    test('debe retornar heroes Async', ( done ) => { 
        
        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe => {
                console.log(heroe);
                console.log(heroes[0]);
                expect( heroe ).toBe( heroes[0] );
                
                done();
            });

     });
     test('debe obtener error si el heroe por id no existe', ( done ) => { 
        
        const id = 10;
        getHeroeByIdAsync( id )
            .catch( error =>{
                expect(error).toBe('No se puedo encontrar el Heroe');
                done();
            })

     });

})