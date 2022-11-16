import styled from "styled-components";
import Image from "../../Image";
import MyLink from "../../Link";

const List = styled.div`
    display: flex;
    justify-content: center;
    list-style: none;
`

const Link = styled(MyLink)`
    cursor: pointer;
    margin: 0 0.8rem;
    transition: 0.2s ease-in-out;
    font-size: 25px;  

    &:hover {
        filter: brightness(110%);
    }
`

const Icon = styled(Image)`
    height: 41.48px;
    width: 41.48px;
`

export { List, Link, Icon };
