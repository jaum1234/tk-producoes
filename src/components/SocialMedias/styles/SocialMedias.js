import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 2rem;
`

export const List = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
`

export const Link = styled.a`
    display: flex;
    color: white;
    cursor: pointer;
    margin: 0 0.8rem;
    transition: 0.5s ease-in-out;

    &:hover {
        color: rgb(216, 216, 216);
        transform: scale(1.2);
    }
`

export const Icon = styled.li`
    font-size: 2rem;
`

export const Text = styled.span`
    margin-left: 1rem;
`