import styled from "styled-components";

export const Button = styled.button`
    //background-color: ${ props => props.yellow ? '#F07241' : 'rgb(170, 3, 170)'};
    
    background-image: linear-gradient(to right, #AA076B 0%, #61045F  51%, #AA076B  100%);
    background-size: 200% auto;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 30px black;
    cursor: pointer;
    color: white;            
    display: block;
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    font-weight: bold;
    font-size: 16px;

    &:hover {
        background-position: right center; 
        color: #fff;
        text-decoration: none;
    }
        
         
    //border: none;
    //border-radius: 0;
    //color: ${ props => props.yellow ? 'white' : 'white'};
    //cursor: pointer;
    //font-size: 1.2rem;
    //outline: none;
    //padding: 0.5rem 1.5rem;
    //text-transform: uppercase;
    //transition: 0.5s ease-in-out;
    //width: 100%;
    //box-shadow: 5px 5px 30px black;
//
    //&:hover {
    //    background-color: ${ props => props.yellow ? '#C04848' : 'purple' };
    //    border: none;
    //}

    @media screen and (max-width: 700px) {
        font-size: 1rem;
    }
`