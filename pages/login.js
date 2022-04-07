
import React, {useState} from 'react';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, InputSubmit, H1, Error } from '../components/layout/ui/Formulario';

import firebase from '../firebase';


// Validaciones
import useValidacion from '../hooks/useValidacion';
import validarIniciarSesion from '../validacion/validarIniciarSesion';

const STATE_INICIAL = {
  email: '',
  password: ''
}

export default function Login() {

  const [ error,guardarError] = useState(false);

  const { valores, errores, handleSubmit, handleChange, handleBlur} = useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);

  const { email, password} = valores;

  async function iniciarSesion(){
    try {
      await firebase.login(email, password);
      Router.push('/');
    } catch (error) {
      console.log('Hubo un error al iniciar sesion ', error.message);
      guardarError(error.message);
    }
  }




  return (
    <div>
      <Layout>
        <>
          <H1>Iniciar Sesion</H1>
          <Formulario onSubmit={handleSubmit} noValidate>
           
             
            <Campo>
              <label htmlFor='email'>Email</label>
              <input type="email" id='email' placeholder='Tu email' name='email' value={email} onChange={handleChange} onBlur={handleBlur} />
              
            </Campo>
            {errores.email && <Error>{errores.email}</Error>}
            <Campo>
              <label htmlFor='password'>Password</label>
              <input type="password" id='password' placeholder='Tu password' name='password' value={password} onChange={handleChange} onBlur={handleBlur} />
              
            </Campo>
            {errores.password && <Error>{errores.password}</Error>}
            {error && <Error>{error}</Error>}
            <InputSubmit type="submit" value="Iniciar Sesion" />
          </Formulario>
          </>
          </Layout>
    </div>
  )
}
