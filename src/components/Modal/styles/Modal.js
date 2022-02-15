import {  FaTimes } from "react-icons/fa";
import styled from "styled-components";

export const Box = styled.div`
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 1.5rem;
    position: absolute;
    width: 700px;
    top: 20%;
    animation: slideDown 0.3s ease-in-out ;

`

export const CloseButton = styled(FaTimes)`
    align-self: end;
    color: red;
    cursor: pointer;
    font-size: 1.5rem;
`

export const Body = styled.div`
    display: flex;

    > div > div > a {
        align-items: center;
        display: flex;
        margin-bottom: 0.5rem;
        margin-right: 1rem;
        text-decoration: none;
    }
`

export const Content = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
`

export const Image = styled.img`
    border-radius: 2px;
    margin-right: 1rem;
    width: 300px;
`

export const Title = styled.h2`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.8rem;
    text-align: start;
    text-transform: uppercase;
`

export const Text = styled.p`
    font-size: 1rem;
    line-height: 1.3rem;
    margin-bottom: 0.7rem;
    text-align: start;
    word-spacing: 0.3rem;
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
