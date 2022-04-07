import React, {useContext} from 'react';
import Buscar from './ui/Buscar';
import Navegacion from './Navegacion';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Boton from './ui/Boton';
import { FirebaseContext } from '../../firebase';


const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px){
        display: flex;
        justify-content: space-between;
    }

`;
const Contenedornavleft = styled.div`
    display: flex;
    aling-items: center;
    height: fit-content;
    margin-top: 5rem;
`;
const UserText = styled.p`
color: var(--naranja);
font-size: 4rem;
line-height: 1;
font-weight: 700;
font-family: 'Roboto Slab', serif;
margin-right: 2rem;
margin-top: -0.1rem;
`;

const Logo = styled.p`
    color: var(--naranja);
    font-size: 5rem;
    line-height: 1;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
    margin-top: -0.1rem;
`;
const Headernav = styled.header`
    display: flex;
    aling-items: center;
    margin-top: 5rem;

   
`; 

const Header = () => {

    const {usuario, firebase} = useContext(FirebaseContext);

    return ( 
        <header
           
        >
            <ContenedorHeader>
                <Headernav 
                    
                >
                    <Link href="/"><Logo>Task 3</Logo></Link>
                    
                   {/* <Buscar /> */}
                   <Navegacion />
                </Headernav>
                <Contenedornavleft>
                   {usuario ? (
                       <>
                            <UserText>
                            Bienvenido: {usuario.displayName}
                        </UserText>
                        <Boton bgColor="true" onClick={() => firebase.cerrarSesion()}>Cerrar Sesion</Boton>
                    </>
                    
                   ): (
                        <>
                            <Link href="/login"><Boton bgColor="true">Login</Boton></Link>
                            <Link href="/crear-cuenta"><Boton>Crear Cuenta</Boton></Link>
                        </>
                   )}
                </Contenedornavleft>
            </ContenedorHeader>
        </header>
     );
}
 
export default Header;