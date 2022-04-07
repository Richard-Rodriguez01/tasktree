
import React, {useState, useContext} from 'react';
import Router, {useRouter} from 'next/router';
import FileUploader from 'react-firebase-file-uploader';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, InputSubmit, H1, Error } from '../components/layout/ui/Formulario';

import {FirebaseContext} from '../firebase';


// Validaciones
import useValidacion from '../hooks/useValidacion';
import validarCrearProducto from '../validacion/validarCrearProducto';
const STATE_INICIAL = {
  nombre: '',
  precio: '',
  // imagen: '',
  url: '',
  descripcion: ''
}

export default function NuevoProducto() {

  // state de las imagenes
  const [nombreimagen, guardarNombre] = useState('');
  const [subiendo, guardarSubiendo] = useState(false);
  const [progreso, guardarProgreso] = useState(0);
  const [urlimagen, guardarUrlImagen] = useState('');

  const [ error,guardarError] = useState(false);

  const { valores, errores, handleSubmit, handleChange, handleBlur} = useValidacion(STATE_INICIAL, validarCrearProducto, crearProducto);

  const { nombre, precio, imagen, descripcion} = valores;

  //hook de routing para rediccionar
  const router = useRouter();

// context con las operaciones crud de firebase

const {usuario, firebase} = useContext(FirebaseContext);

  async function crearProducto(){
    //si el usuario no esta autenticado llevae al login
    if(!usuario){
      return router.push('/login');
    }

    // crear objecto de nuevo producto
    const producto = {
      nombre,
      precio,
      descripcion,
      urlimagen,
      creado: Date.now()
    }

    // insertarlo en la base de datos
    firebase.db.collection('productos').add(producto);

    return router.push('/');
  }

  const handleUploadStart = () => {
    guardarProgreso(0);
    guardarSubiendo(true);
  };

  const handleProgress = progreso => guardarProgreso({progreso});

  const handleUploadError = error => {
    guardarSubiendo(error);
    console.error(error);
  };

  const handleUploadSuccess = nombre => {
    guardarProgreso(100);
    guardarSubiendo(false);
    guardarNombre(nombre)
    firebase
          .storage
          .ref("productos")
          .child(nombre)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            guardarUrlImagen(url);
          });
  };


  return (
    <div>
      <Layout>
        <>
          <H1>Nuevo Producto</H1>
          <Formulario onSubmit={handleSubmit} noValidate>

            <fieldset>
              <legend>Informacion General</legend>
            

            <Campo>
              <label htmlFor='nombre'>Nombre</label>
              <input type="text" id='nombre' placeholder='Nombre' name='nombre' value={nombre} onChange={handleChange} onBlur={handleBlur} />
 
            </Campo>
              {errores.nombre && <Error>{errores.nombre}</Error>}
            
              <Campo>
              <label htmlFor='precio'>Precio</label>
              <input type="text" id='precio' placeholder='Precio' name='precio' value={precio} onChange={handleChange} onBlur={handleBlur} />
 
            </Campo>
              {errores.precio && <Error>{errores.precio}</Error>}

              
              <Campo>
                  <label htmlFor='imagen'>Imagen</label>
                  <FileUploader 
                      accept="image/*" 
                      id='imagen' 
                      name='imagen' 
                      randomizeFilename
                      storageRef = {firebase.storage.ref("productos")}
                      onUploadStart={handleUploadStart}
                      onUploadError={handleUploadError}
                      onUploadSuccess={handleUploadSuccess}
                      onProgress={handleProgress} 
                  
                  />
 
               </Campo>
              
            
              </fieldset>

              <fieldset>
                <legend>Sobre tu Producto</legend>

                <Campo>
              <label htmlFor='descripcion'>Descripcion</label>
              <textarea id='descripcion' placeholder='Descripcion' name='descripcion' value={descripcion} onChange={handleChange} onBlur={handleBlur} />
 
            </Campo>
              {errores.descripcion && <Error>{errores.descripcion}</Error>}

              </fieldset>

            {error && <Error>{error}</Error>}
            <InputSubmit type="submit" value="Crear Producto" />
          </Formulario>
          </>
          </Layout>
    </div>
  )
}

