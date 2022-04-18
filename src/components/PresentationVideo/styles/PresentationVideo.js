import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`

export const Video = styled.iframe`
    box-shadow: 0px 13px 24px -7px rgba(0,0,0,0.1);
    width: 100%;
    @media screen and (max-width: 700px) {
        height: 180px;
        width: 320px;
    }
`