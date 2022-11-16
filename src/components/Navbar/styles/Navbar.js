import Image from "../../Image";
import styled from 'styled-components';
import { Link } from "../..";
import themes from "../../../styles/themes";
import { AiOutlineMenu } from 'react-icons/ai';

const Header = styled.header`
    position: sticky;
    top: 0%;
    z-index: 3;
`

const Brand = styled(Image)`
    width: 60px;

    @media screen and (max-width: 575px) {
        width: 32.85px;
        height: 41.36px;
        margin-left: 28px;
    }
`

const Box = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${themes.colors.light};
    padding: 8px 112px;
    background-color: ${themes.colors.dark_purple};

    @media screen and (max-width: 768px) {
        padding: 8px 56px;
    }

    @media screen and (max-width: 575px) {
        padding: 8px 0px;
    }

`

const Collapse = styled.div`
    display: flex;
    align-items: center;
    background-color: ${themes.colors.dark_purple};

    @media screen and (max-width: 575px) {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        top: 20%;
        transition: 0.5s ease-in-out;
        padding: 23px 28px;
        
        z-index: -1;
    }
`

const Nav = styled.nav`
    display: flex;

    @media screen and (max-width: 575px) {
        flex-direction: column;

    }
`

const Item = styled(Link)`
    font-size: 16px;
    margin-right: 24px;

    @media screen and (max-width: 575px) {
        margin-bottom: 16px;
        margin-right: 0;
    }
`

const Divider = styled.div`
    border-left: 1px solid ${themes.colors.light};
    height: 33px;

    @media screen and (max-width: 575px) {
        border-bottom: 1px solid ${themes.colors.light};
        height: 0px;
        width: 100%;
    }
`

const Languages = styled.div`
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 575px) {
        margin-top: 16px;
    }
`

const Language = styled(Image)`
    cursor: pointer;
    margin-left: 24px;

    @media screen and (max-width: 575px) {
        margin-left: 0;
        margin-right: 12px;
    }
`

const Ham = styled(AiOutlineMenu)`
    color: ${themes.colors.light};
    width: 25px;
    height: 25px;
    cursor: pointer;

    display: none;

    @media screen and (max-width: 575px) {
        display: block;
        margin-right: 28px;
    }
`

const Overlay = styled.div`
    background-color: black;
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: 1;
    transition: all 0.2s ease-in-out;
`

export { Header , Brand, Box, Nav, Item, Divider, Languages, Language, Collapse, Ham, Overlay };