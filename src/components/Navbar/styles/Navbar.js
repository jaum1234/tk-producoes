import Image from "../../Image";
import styled from 'styled-components';
import Link from "../../Link";
import themes from "../../../styles/themes";

const StyledNavbar = styled.header`
    padding: 1.5rem 0;
`

const Brand = styled(Image)`
    width: 60px;
    margin-right: 1rem;
`

const Nav = styled.nav`
    display: flex;
`

const Item = styled(Link)`
    font-size: 16px;
    margin-right: 24px;
`

const Divider = styled.div`
    border-left: 1px solid ${themes.colors.light};
    height: 33px;
`

const Language = styled(Image)`
    margin-left: 24px;
`

export { StyledNavbar, Brand, Nav, Item, Divider, Language };