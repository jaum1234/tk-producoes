import styled from "styled-components";
import Image from '../../Image';
import { forMobile } from "../../../styles/media_queries";
import { convertToRem } from "../../../styles/utils";
import Link from "../../Link";

const List = styled.div`
    display: Grid;
    justify-content: center;

    grid-template-columns: 33% 33% 33%;
    row-gap: ${convertToRem(100)};

    @media screen and (max-width: 1400px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 480px) {
        row-gap: ${convertToRem(60)};
    }
` 

const Card = styled(Link)`
   
    cursor: pointer;
    width: ${convertToRem(411)};
    height: ${convertToRem(274)};
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0 auto;

    /* @media screen and (max-width: 480px) {
        width: ${convertToRem(234.86)};
        height: ${convertToRem(156.57)};
    } */

    ${forMobile({"width": `${convertToRem(234.86)}`,"height": `${convertToRem(156.57)}`})}

`

const Banner = styled(Image)`

    box-shadow: 0px ${convertToRem(2.28571)} ${convertToRem(2.28571)} rgba(0, 0, 0, 0.25);
`

const Infos = styled.div`
   
    width: ${convertToRem(213)};
    height: ${convertToRem(79)};

    border-radius: ${convertToRem(2.86)};
    background: linear-gradient(180deg, #BA78FC 0%, #821CE9 100%);
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px ${convertToRem(2.28571)} ${convertToRem(2.28571)} rgba(0, 0, 0, 0.25);

    position: absolute;
    top: 80%;

    @media screen and (max-width: 480px) {
        width: ${convertToRem(121.71)};
        height: ${convertToRem(45.14)};
    }

`

const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Icon = styled.div`
    color: white;
    margin-right: ${convertToRem(5)};

    font-size: ${convertToRem(30)};

    @media screen and (max-width: 480px) {
        font-size: ${convertToRem(17)};
    }
`

const Text = styled.p`  
    font-size: ${convertToRem(20.82)};
    font-weight: 700;

    @media screen and (max-width: 480px) {
        font-size: ${convertToRem(11.9)};
    }
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