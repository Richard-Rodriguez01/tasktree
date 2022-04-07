import styled from "@emotion/styled";

const Boton = styled.a`
    text-transform: uppercase;
    border: 1px solid rgba(0, 0, 0, 0.568);
    height: fit-content;
    font-weight: 700;
    padding: .8rem 2rem;
    margin-right: 1rem;
    background-color: ${props => props.bgColor ? '#DA552F' : 'white'};
    color: ${props => props.bgColor ? 'white' : '#000'};

    &:last-of-type{
        margin-right: 0;
    }
    &:hover{
        cursor:pointer;
    }
`;

export default Boton;