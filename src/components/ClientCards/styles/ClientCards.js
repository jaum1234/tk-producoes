import styled from "styled-components";
import themes from "../../../styles/themes";
import { Image as MyImage } from '../..';

const List = styled.div`
    display: Grid;
    justify-content: center;

    grid-template-columns: 40% 40%;

    @media screen and (max-width: 580px) {
        grid-template-columns: 1fr;
        grid-template-rows: 220px;
    }
` 

const Box = styled.div`
    width: 234.86px;
    height: 156.57px;
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0 auto;
`

const Banner = styled(MyImage)`
    height: 156.57px;
    width: 234.86px;
    object-fit: cover;
`

const Infos = styled.div`
    width: 121.71px;
    height: 45.14px;
    border-radius: 2.86px;
    background-color: ${themes.colors.call_to_action};

    padding: 0 28px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2.28571px 2.28571px rgba(0, 0, 0, 0.25);

    position: absolute;
    top: 90%;
`

const Info = styled.div`
    display: flex;
    justify-content: space-between;
`

const Icon = styled.div`
    color: white;
`

const Text = styled.p`    
    font-weight: bold;
`

export {
    List,
    Box,
    Infos,
    Banner,
    Info,
    Text,
    Icon
}