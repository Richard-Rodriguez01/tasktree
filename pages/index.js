
import React, {useEffect, useState, useContext} from 'react';
import Layout from '../components/layout/Layout';
import { FirebaseContext } from '../firebase';
import DetallesProducto from '../components/layout/DetallesProducto';
import styled from "@emotion/styled";


export default function Home() {

  const [productos, guardarProductos] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const obtenerProductos = () => {
        firebase.db.collection('productos').orderBy('creado', 'desc').onSnapshot
        (manejarSnapshot)
    }
    obtenerProductos();
  }, []);

 function manejarSnapshot(snapshot){
    const productos = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });

    guardarProductos(productos);

  }
  const TextHome = styled.h1`
    color: var(--naranja);
    padding: 2rem;
  `;
  const {usuario} = useContext(FirebaseContext);
  return (
    <div>
      
            <Layout>
              
            <div className='listado-productos'>
              <div className='contenedor'>
                <div className='bg-white'>
                {!usuario &&(
                <TextHome>Inicia Sesion o Crea una Cuenta para ver y agregar los productos</TextHome>
              )}
                  {productos.map(producto =>(
                    <DetallesProducto 
                        key={producto.id}
                        producto={producto}
                    />
                  ))}
                
                  
                </div>
              </div>
            </div>
            </Layout>
          
      
    
    </div>
  )
}
