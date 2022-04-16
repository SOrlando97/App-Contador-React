import React from 'react'
import PropTypes from 'prop-types'
//import React, { Fragment } from 'react'
//funtional Compount

// const PrimeraApp = () =>{    

//     return (
//         <Fragment>
//             <h1>Hola Mundo </h1>
//             <p>Mi primera aplicación</p>
//         </Fragment>        
//     );     
// }
//este hola mundo es un valor por defecto
const PrimeraApp = ({ saludo, subtitulo}) =>{    

    

    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{ JSON.stringify(saludo,null,3) }</pre> */}
            <p>{subtitulo}</p>
        </>        
    );     
}
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps ={
    subtitulo: 'Soy un Subtitulo'
}
export default PrimeraApp;