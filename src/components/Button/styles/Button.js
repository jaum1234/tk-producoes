import styled from "styled-components";

export const Button = styled.button`
    background-color: ${ props => props.yellow ? '#F07241' : 'rgb(170, 3, 170)'};
    border: none;
    border-radius: 0;
    color: ${ props => props.yellow ? 'white' : 'white'};
    cursor: pointer;
    font-size: 1.5rem;
    outline: none;
    padding: 0.5rem 1.5rem;
    text-transform: uppercase;
    transition: 0.5s ease-in-out;
    width: 100%;

    &:hover {
        background-color: ${ props => props.yellow ? '#C04848' : 'purple' };
        border: none;
    }
`