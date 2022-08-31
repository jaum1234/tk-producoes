import styled from "styled-components";
import themes from "../../../styles/themes";

export const StyledButton = styled.button`    
    background: ${themes.colors.red};
    background-size: 200% auto;
    border: none;
    box-shadow: 0px 13px 24px -7px rgba(0,0,0,0.1);
    cursor: pointer;
    color: white;            
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    height: 45px;
    width: ${props => props.width};
    text-align: center;
    font-weight: 400;
    transition: 0.5s;
    font-size: 18px;
    font-weight: bold;

    &:hover {
        color: #fff;
        text-decoration: none;
        filter: brightness(1.1);
    }
        
    @media screen and (max-width: 700px) {
        font-size: 1rem;
    }
`