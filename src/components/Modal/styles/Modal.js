import { RiCloseFill } from 'react-icons/ri';
import { keyframes } from 'styled-components';
import styled from 'styled-components'

const enter = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`

export const Overlay = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

`

export const StyledModal = styled.div`
    display: inline-block;
    background-color: white;
    width: ${props => props.width|| "700px"};
    height: ${props => props.height};
    min-height: 300px;
    min-width: 500px;
    border-radius: 5px;
    box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.1);
    padding: 2rem;
    animation: ${enter} 0.2s linear forwards;


    @media screen and (max-width: 720px) {
        min-width: 0;
        width: 80%;
    }
`

export const Head = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    height: calc(100% - 80%);
`

export const Title = styled.h4`
    font-size: 24px;
`

export const Body = styled.div`
    display: flex;
    height: calc(100% - 20%);
`

export const Content = styled.div`
    width: ${props => props.w || "100%"};
    height: 100%;
    padding: 0 0.5rem;
`

export const Text = styled.p`
    margin-right: ${props => props.mr};
`

export const Picture = styled.div`
    height: 100% !important;
`

export const Close = styled(RiCloseFill)`
    font-size: 20px;
    color: red;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        filter: brightness(1.1);
    }
`

export const Box = styled.div`
    display: flex;
    margin-bottom: 1rem;
`

export const Footer = styled.div`
`