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
import themes from "../../styles/themes.js";

const Navbar = ({ children, ...restProps }: { children: JSX.Element }) => {
    return (
        <Header { ...restProps } id="header">   
            { children }
        </Header>
    )
}

Navbar.Brand = function NavbarBrand({ src, ...restProps }: { src: string }) {
    return(
        <Link href='/'>
            <Brand src={ src } { ...restProps } />
        </Link>
    )
}

Navbar.Box = function NavbarBox({ children, ...restProps }: { children: JSX.Element }) {
    return(
        <Box { ...restProps } id="nav-box">
            { children }
        </Box>
    )
}

Navbar.Collapse = function NavbarBox({ collapse, children, ...restProps }: { collapse: boolean, children: JSX.Element }) {
    
    return ( 
        <Collapse { ...restProps } style={ collapse ? {top: "55px"} : {top: "-200px"} }>
            { children }
        </Collapse>   
    )
    
}

Navbar.Nav = function NavbarNav({ children, ...restProps }: { children: JSX.Element }) {
    return(
        <Nav { ...restProps }>
            { children }
        </Nav>
    )
}

Navbar.Item = function NavbarItem({ 
    children, 
    href, 
    active = false, 
    ...restProps 
}: { 
    children: JSX.Element, 
    href: string, 
    active: boolean 
}) {
    
    return(

        <Item href={ href } active={ active ? themes.colors.call_to_action : themes.colors.light } { ...restProps }>
            { children }
        </Item>
    )
}

Navbar.Divider = function NavbarDivider({ ...restProps }) {
    return(
        <Divider { ...restProps }/>
    )
}

Navbar.Languages = function NavbarLanguages({ children, ...restProps }: { children: JSX.Element }) {
    return(
        <Languages { ...restProps }>
            { children }
        </Languages>
    )
}

Navbar.Language = function NavbarLanguage({ src, ...restProps }: { src: string }) {
    return(
        <Language 
            src={ src } 
            { ...restProps }/>
    )
}

Navbar.Ham = function NavbarHam({ onOpen, ...restProps }: { onOpen: () => void }) {
    return(
        <Ham { ...restProps } onClick={ onOpen }/>
    )
}

Navbar.Overlay = function NavbarOverlay({ collapse, ...restProps }: { collapse: boolean }) {
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
