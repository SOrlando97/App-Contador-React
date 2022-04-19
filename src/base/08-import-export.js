//como importar archivos
//por import
//hay que ponerle export al otro archivo si se quiere usar
// import {heroes} from './data/heroes'
//se escribe imp se pulsa tab
//import {heroes} from './data/heroes'
// no se usa llaves cuando es export por default
import heroes, {owners} from '../data/heroes'
//console.log(owners);
//se esta haciendo una clase de if, el find solo devuelve uno y para
//si se quiere devolver varios es con filter
// const getHeroeById=(id)=>{
//     return heroes.find(heroe=> heroe.id === id);
// }
export const getHeroeById=(id)=> heroes.find(heroe=> heroe.id === id);

//console.log(getHeroeById(1));

export const getHeroesbyOwner = (owner)=> heroes.filter(heroe=> heroe.owner === owner);
//console.log(getHeroesbyOwner('Marvel'));