import styled from "styled-components";
import themes from "../../../styles/themes";
import Image from '../../Image';

const List = styled.div`
    display: Grid;
    justify-content: center;

    grid-template-columns: 40% 40%;

    @media screen and (max-width: 580px) {
        grid-template-columns: 1fr;
        grid-template-rows: 220px;
    }
` 

const Card = styled.div`
    width: 234.86px;
    height: 156.57px;
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0 auto;
`

const Banner = styled(Image)`
    box-shadow: 0px 2.28571px 2.28571px rgba(0, 0, 0, 0.25);
`

const Infos = styled.div`
    width: 121.71px;
    height: 45.14px;
    border-radius: 2.86px;
    background: linear-gradient(180deg, #BA78FC 0%, #821CE9 100%);
    
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
    justify-content: center;
    align-items: center;
`

const Icon = styled.div`
    color: white;
    margin-right: 5px;
`

const Text = styled.p`  
    font-size: 11.9px;
    font-weight: 700;
`

export {
    List,
    Card,
    Banner,
    Infos,
    Info,
    Text,
    Icon
}