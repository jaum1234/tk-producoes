import { Container, Flex } from "../../layout";
import Link from "../Link";
import { Brand, Item, Nav, StyledNavbar, Divider, Language } from "./styles/Navbar";

const Navbar = ({ children, ...restProps }) => {
    return (
        <StyledNavbar { ...restProps }>
            <Container>
                <Flex justifyContent='space-between' alignItems='center'>
                    { children }
                </Flex>
            </Container>
        </StyledNavbar>
    )
}

Navbar.Brand = function NavbarBrand({ src, ...restProps }) {
    return(
        <Link href='/'>
            <Brand src={ src } { ...restProps } />
        </Link>
    )
}

Navbar.Nav = function NavbarNav({ children, ...restProps }) {
    return(
        <Nav { ...restProps }>
            { children }
        </Nav>
    )
}

Navbar.Item = function NavbarItem({ children, href, ...restProps }) {
    return(
        <Item href={ href } { ...restProps }>
            { children }
        </Item>
    )
}

Navbar.Divider = function NavbarDivider({ ...restProps }) {
    return(
        <Divider { ...restProps }/>
    )
}

Navbar.Language = function NavbarLanguage({ src, ...restProps }) {
    return(
        <Language src={ src } { ...restProps }/>
    )
}

export default Navbar;