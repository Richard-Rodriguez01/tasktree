import React, { useState, useEffect } from 'react';

const useValidacion = (stateInicial, validar, fn) => {
    const [valores, guardarValores] = useState(stateInicial);
    const [errores, guardarErrores] = useState({});
    const [ submitForm, guardarSubmitForm] = useState(false);
    
    useEffect(() => {
        if(submitForm){
            const noErrores = Object.keys(errores).length === 0;

            if(noErrores){
                fn();
            }
            guardarSubmitForm(false);
        }
    }, [errores]);

    // Funcion que se ejecuta conforme el usurarui escribe algo
const handleChange = e => {
    guardarValores({
        ...valores,
        [e.target.name] : e.target.value
    })
}
// Funcion que se ejecuta cuando el usuarui hace suubmit
 const handleSubmit = e => {
     e.preventDefault();
     const erroresValidadcion = validar(valores);
     guardarErrores(erroresValidadcion);
     guardarSubmitForm(true);
 }
// cuando se realiza el envento de blur
const handleBlur = () => {
    const erroresValidadcion = validar(valores);
    guardarErrores(erroresValidadcion);
}
    return {
        valores,
        errores,
        handleSubmit,
        handleChange,
        handleBlur

    }
}
 
export default useValidacion;