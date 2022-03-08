import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
`

export const Link = styled.a`
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
    margin-bottom: 1rem;
`
