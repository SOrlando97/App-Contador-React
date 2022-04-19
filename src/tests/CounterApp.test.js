import React from 'react';
import { shallow } from "enzyme/build"
import CounterApp from "../CounterApp"

describe('Pruebas en el <CounterApp />', ()=>{

    let wrapper;
    beforeEach(()=>{
        wrapper = shallow( <CounterApp />);
    })

    test('Debe mostrar <CounterApp /> correctamente', () => { 
        
        expect( wrapper ).toMatchSnapshot();

     });
    
    test('debe de mostrar el valor por defecto de 100', () => { 
         
        wrapper = shallow( <CounterApp value = {100} />);
        const counterText = wrapper.find('h2').text().trim();

        expect ( counterText ).toBe('100');

    })
    test('debe de incrementar con el boton de +1', () => { 
        //buscando el boton en la posicion 0, el primer boton
        wrapper.find('button').at(0).simulate('click');        
        const counterText = wrapper.find('h2').text().trim();
        console.log('hola que hace',counterText)
        expect( counterText ).toBe('11')    
    })

    test('debe de decrementar con el boton de -1', () => { 
        //buscando el boton en la posicion 0, el primer boton
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        console.log('hola que hace',counterText)
        expect( counterText ).toBe('9')    
    });

    test('Revisar que el boton reset funcione', () => { 
        
        wrapper = shallow( <CounterApp value = {15} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');        
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('15');
    });
})