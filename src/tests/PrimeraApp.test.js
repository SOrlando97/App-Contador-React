import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import {shallow} from 'enzyme'
import '@testing-library/jest-dom';

describe('Prueba en PrimeraApp', ()=>{
    //esto con //import '@testing-library/jest-dom/extend-expect'; en setuptests
    // test('debe mostrar hola que hace', () => { 
        
    //     const saludo = 'Hola que hace';
    //     const {getByText} = render(<PrimeraApp saludo ={ saludo }/>)

    //     expect(getByText(saludo)).toBeInTheDocument();
    //  })
    test('debe de mostrar <PrimeraApp /> correctamente',()=>{
        const saludo = 'Hola que hace';
        const wrapper = shallow( <PrimeraApp saludo={saludo}/> );

        expect(wrapper).toMatchSnapshot();
    })
    test('debe de mostrar el subtitulo enviado por props', () => { 

        const saludo = 'Hola que hace';
        const subtitulo = 'Subtitulitos';
        const wrapper = shallow( 
        <PrimeraApp 
            saludo={saludo} 
            subtitulo={ subtitulo }
            /> 
        );

        const textoParrafo = wrapper.find('p').text();
        expect( textoParrafo ).toBe (subtitulo);

     })
})