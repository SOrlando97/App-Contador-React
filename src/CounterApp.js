import React, {useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value = 10}) =>{

    //useState devuelve 2 cosas, un algo y una funcion ligada a ese algo
    const [counter, setCounter] = useState(value);

    //handleAdd, no es necesario el nombre
    const handleAdd = (e) =>{
        //setCounter(counter +1);
        setCounter((c)=> c+1);//si por alguna razon no se puede tomar el counter
        //se puede hacer de esta manera, el c hace el trabajo del counter en este caso
    }
    const handlereset = (e)=>{
        setCounter((c)=> value);
    }
//3 formas de hacerlo, primera se llama funcion teniendo counter se suma
// segunda se llama funcion sin tener counter, se resetea
//tercera se hace la funcion dentro del mismo boton
    return(
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handlereset }>Reset</button>
            <button onClick={ ()=> setCounter(counter-1)}>-1</button>
        </>
            
    );

    
}
CounterApp.propTypes = {
    value: PropTypes.number
}
export default CounterApp;