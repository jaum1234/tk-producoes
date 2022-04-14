import Image from "../../Image";
import styled from 'styled-components';
import Link from "../../Link";
import themes from "../../../styles/themes";

const StyledNavbar = styled.header`
    display: flex;
    align-items: center;
    padding: 1.5rem 0;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
    }
`

const Brand = styled(Image)`
    width: 60px;
    margin-right: 1rem;
`

const Nav = styled.nav`
    display: flex;
`

const Item = styled(Link)`

    transition: 0.2s ease-in-out all;

    &:hover {
        color: ${themes.theme_1.colors.red};
    }
`

export { StyledNavbar, Brand, Nav, Item };