import {  FaTimes } from "react-icons/fa";
import styled from "styled-components";

export const Box = styled.div`
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 1.5rem;
    box-sizing: content-box;
    position: absolute;
    width: 700px;
    top: 20%;
    animation: slideDown 0.3s ease-in-out ;

    @media screen and (max-width: 800px) {
        width: 80%;
    }

`

export const CloseButton = styled(FaTimes)`
    align-self: end;
    color: red;
    cursor: pointer;
    font-size: 1.5rem;
`

export const Body = styled.div`
    display: flex;
    
    @media screen and (max-width: 730px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Content = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    box-sizing: content-box;
    word-wrap: wrap;
`

export const Image = styled.img`
    border-radius: 2px;
    margin-right: 1rem;
    width: 300px;

    @media screen and (max-width: 730px) {
        width: 250px;
        margin: 1rem 0;
    }
`

export const Title = styled.h2`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.8rem;
    text-transform: uppercase;

    @media screen and (max-width: 730px) {
        align-self: center;
    }
`

export const Text = styled.p`
    font-size: 1rem;
    line-height: 1.3rem;
    margin-bottom: 0.7rem;
    text-align: start;
    word-spacing: 0.3rem;
    
    @media screen and (max-width: 730px) {
        text-align: center;
    }
`

export const List = styled.ul`
    display: flex;
    margin-top: 1rem;
`

export const Link = styled.a`
    align-items: center;
    display: flex;
    color: black;
    cursor: pointer;
    margin-right: 2rem;
`

export const Icon = styled.li`
    font-size: 1.5rem;
`

export const Label = styled.span`
    margin-left: .5rem;
`
