import styled from "styled-components";


export const Home = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    text-align: center;


   
`

export const Buttons = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        margin-top: 2rem;
    }

    div {
        margin: 1rem 1rem 1.5rem 1rem;
    
    }

`

export const HomeContent = styled.div`
    animation: opening 1.8s ease-in-out;
    padding: 3rem;

    
`

export const Text = styled.h2`
    color: white;
    font-size: 2rem;
    margin: 1.5rem 0 2rem;
`