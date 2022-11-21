import React from "react";
import Link from "../Link";
import { 
    Brand, 
    Item, 
    Nav, 
    Header, 
    Divider, 
    Languages, 
    Language, 
    Collapse, 
    Ham, 
    Box,
    Overlay
} from "./styles/Navbar";



const Navbar = ({ children, ...restProps }) => {
    return (
        <Header { ...restProps } id="header">   
            { children }
        </Header>
    )
}

Navbar.Brand = function NavbarBrand({ src, ...restProps }) {
    return(
        <Link href='/'>
            <Brand src={ src } { ...restProps } />
        </Link>
    )
}

Navbar.Box = function NavbarBox({ children, ...restProps }) {
    return(
        <Box { ...restProps } id="nav-box">
            { children }
        </Box>
    )
}

Navbar.Collapse = function NavbarBox({ collapse, children, ...restProps }) {
    
    return ( 
        <Collapse { ...restProps } style={ collapse ? {top: "55px"} : {top: "-200px"} }>
            { children }
        </Collapse>   
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

Navbar.Languages = function NavbarLanguages({ children, ...restProps }) {
    return(
        <Languages { ...restProps }>
            { children }
        </Languages>
    )
}

Navbar.Language = function NavbarLanguage({ src, ...restProps }) {
    return(
        <Language src={ src } { ...restProps }/>
    )
}

Navbar.Ham = function NavbarHam({ onOpen, ...restProps }) {
    return(
        <Ham { ...restProps } onClick={ onOpen }/>
    )
}

Navbar.Overlay = function NavbarOverlay({ collapse, ...restProps }) {
    return(
        <Overlay 
            style={ 
                collapse ? { filter: "opacity(72%)" } : { filter: "opacity(0)" }
            } 
            { ...restProps }
        />
    )
}


export default Navbar;