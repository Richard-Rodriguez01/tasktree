import React, {useContext} from 'react';
import styled from '@emotion/styled';
import { FirebaseContext } from '../../firebase';



const Imagen = styled.img`
    width: 200px;
    height:200px;
`;
const Grid = styled.div`
display: inline-block;
`;
const CampoImg = styled.div`
    display: inline-block;
    padding: 10px 40px;
    border-bottom: 1px solid #e1e1e1;
    img{
        
    }
   
    
`;
const NameText = styled.h2`
    
`;
const DetallesProducto = ({producto}) => {
    

    const {id, creado, descripcion,precio, nombre, urlimagen} = producto;
    const {usuario} = useContext(FirebaseContext);
   
    return (

<>


    <Grid>
        {usuario && (
            <CampoImg>
                
                <Imagen src={urlimagen} />
                <NameText>{nombre} <br/> {precio} <br/> {descripcion}</NameText>

            </CampoImg>

        ) } 
   

    </Grid>
        </>
     );
}
 
export default DetallesProducto;