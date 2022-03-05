import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
`

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 100rem;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        align-items: "center";
        margin-top: 2rem;
    }

    div {
        margin: 1rem 1rem 1.5rem 1rem;
    }

`

export const HomeContent = styled.div`
    animation: opening 1.8s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: "center";

    @media screen and (min-width: 1920px) {
        align-items: center;
        height: 100%;
        justify-content: center;
    }
`

export const Text = styled.h2`
    color: white;
    font-size: 2rem;
    text-align: center;
    margin: 1.5rem 0 2rem 0;

    @media screen and (max-width: 700px) {
        font-size: 1.4rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 1.3rem;
    }
`