import React, {useContext} from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { FirebaseContext } from '../../firebase';

const Nav = styled.nav`
    padding-left: 2rem;
    margin-top: 1rem;
    
   
    a{
        font-size: 1.8rem;
        margin-left: 2rem;
        font-family: 'PT Sans' sans-serif;
        color: rgba(0, 0, 0, 0.568);
        
        &:last-of-type{
            margin-right: 0;
        }
    }
    a:hover{  
        color: var(--naranja);
    border-radius: 10px;
    border-bottom: 1px solid #3d3a3a62;
    
    }
`;

const Navegacion = () => {
    const {usuario} = useContext(FirebaseContext);
    return ( 
        <Nav>
            <Link href="/">Inicio</Link>
            {/* <Link href="/populares">Populares</Link> */}
            {usuario && (
                <Link href="/nuevo-producto">Nuevo Producto</Link>
            )}
        </Nav>
     );
}
 
export default Navegacion;