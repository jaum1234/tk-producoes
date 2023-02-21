import styled from "styled-components";
import themes from "../../../styles/themes";

type ButtonProps = {
    width?: number | string
}

export const StyledButton = styled.button`    
    background: ${themes.colors.call_to_action};
    background-size: 200% auto;
    border: none;
    box-shadow: 3.24561px 3.24561px 2.59649px rgba(0, 0, 0, 0.25);;
    cursor: pointer;
    color: white;            
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: ${(props: ButtonProps) => props.width};
    text-align: center;
    font-weight: 400;
    transition: 0.5s;
    font-size: 18px;
    font-weight: bold;
    border-radius: 32px;
    margin: 0 auto;
    padding: 5px 0;

    &:hover {
        color: #fff;
        text-decoration: none;
        filter: brightness(1.1);
    }
        
    @media screen and (max-width: 700px) {
        font-size: 1rem;
    }
`