import Link from "../Link";
import { Brand, Item, Nav, StyledNavbar } from "./styles/Navbar";

const Navbar = ({ children, ...restProps }) => {
    return (
        <StyledNavbar { ...restProps }>
            { children }
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

export default Navbar;