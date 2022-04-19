import { getHeroeById, getHeroesbyOwner } from '../../base/08-import-export';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Heroes',()=>{
    test('debe retornar un heroe por id', () => { 
        
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id ===id);

        expect(heroe).toEqual(heroeData);
     })
     test('debe retornar undefined si heroe no existe', () => { 
        
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
     });

     //evaluar si es de DC y otro de Marvel

     test('Revisando si es de DC', () => { 
        
        const owner = 'DC';
        const heroe = getHeroesbyOwner(owner);

        const heroesData = heroes.filter(h=>h.owner ==='DC');

        expect(heroe).toEqual(heroesData);
     });

     test('debe retornar un arreglo con los heroes de Marvel', () => { 
        
        const owner = 'Marvel';
        const heroe = getHeroesbyOwner(owner);

        expect(heroe.length).toBe(2);
     });
})