import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    list-style: none;
`

export const Link = styled.a`
    color: white;
    cursor: pointer;
    margin: 0 0.8rem;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #7E328B;
    }
`

export const Icon = styled.li`
    font-size: 2rem;
    margin-bottom: 1rem;
`
