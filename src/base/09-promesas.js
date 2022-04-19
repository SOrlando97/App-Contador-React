import {getHeroeById} from './08-import-export'


export const getHeroeByIdAsync = (id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //tarea, importar el gerheroebyid
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject('No se puedo encontrar el Heroe');
            }
        }, 1000)
    });
}