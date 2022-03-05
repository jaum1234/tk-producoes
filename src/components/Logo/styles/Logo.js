import styled from "styled-components";

export const Image = styled.img`
    animation: entering 2s ease-in-out;
    align-self: center;
    margin-bottom: 3rem;
    width: 100px;

    @media screen and (max-width: 500px) {
        margin-bottom: 0;
    }
`