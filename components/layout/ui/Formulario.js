import styled from "@emotion/styled";

export const Formulario = styled.form`
    max-width: 600px;
    width: 95%;
    margin: 5rem auto 0 auto;

    fieldset{
        margin: 2rem 0;
        border: 1px solid #e1e1e1;
        font-size: 2rem;
        padding: 2rem;
    }
`;

export const Campo = styled.div`
    margin-bottom: 2rem;
    display: flex;
    aling-items: center;

    label{
        flex: 0 0 150px;
        font-size: 1.8rem;
    }

    input, textarea{
        flex: 1;
        padding: 1rem;
    }
    textarea{
        height: 100px;
    }
`;
export const InputSubmit = styled.input`
text-transform: uppercase;
width: 100%;
text-aling:center;
border: none;
font-weight: 700;
font-size: 1.8rem;
font-family: 'PT Sans', sans-serif;
padding: 1.5rem;
margin-right: 1rem;
background-color: var(--naranja);
color: #FFF;


&:hover{
    cursor:pointer;
}
`;
export const H1 = styled.h1`
    text-aling: center;
    margin-left: 90rem;
    margin-top: 5rem;
        
`;

export const Error = styled.p`
    background-color: red;
    padding: 1rem;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    color: #FFF;
    text-align: center;
    text-transform: uppercase;
    margin: 2rem 0;

`;