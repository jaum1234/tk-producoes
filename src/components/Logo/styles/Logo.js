import styled from "styled-components";

export const Image = styled.img`
    animation: entering 2s ease-in-out;
    align-self: center;
    margin: 2rem 0 3rem 0;
    width: 100px;

    @media screen and (max-width: 500px) {
        margin-bottom: 0;
    }
`