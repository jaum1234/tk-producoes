import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`

export const Video = styled.iframe`
    box-shadow: 0px 13px 24px -7px rgba(0,0,0,0.1);
    width: 950px;
    height: 547px;
    margin-bottom: 27.7px;

    @media screen and (max-width: 600px) {
        width: 450px;
        height: 250px;
    }

    @media screen and (max-width: 480px) {
        width: 300px;
        height: 166.6px;
    }
`