import'@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones',()=>{
    test('getUser debe retornar un objeto',()=>{
        const userTest ={
            uid:'ABC123',
            username: 'Usuario1'
        }
        const user = getUser();
        expect(user).toEqual(userTest);

    })
    test('getUsuarioActivo debe de retornar un objeto',()=>{

        const nombre = 'Fernando'
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid:'ABC123',
            username: nombre
        });
    })
})