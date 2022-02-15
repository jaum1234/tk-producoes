import styled from "styled-components";

export const Container = styled.div`
    width: 640px;
    @media screen and (max-width: 700px) {
        width: 100%;
    }
`

export const Video = styled.iframe`
    box-shadow: 5px 5px 20px black;
    margin: 2rem 0;
    animation: opening 1.8s ease-in-out;
    height: 360px;
    width: 640px;

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`