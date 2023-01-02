import styled from "styled-components";
import Image from '../../Image';

const List = styled.div`
    display: Grid;
    justify-content: center;

    grid-template-columns: 40% 40%;
    row-gap: 100px;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 480px) {
        row-gap: 60px;
    }
` 

const Card = styled.div`
   
    width: 411px;
    height: 274px;
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0 auto;

    @media screen and (max-width: 480px) {
        width: 234.86px;
        height: 156.57px;
    }

`

const Banner = styled(Image)`

    box-shadow: 0px 2.28571px 2.28571px rgba(0, 0, 0, 0.25);
`

const Infos = styled.div`
   
    width: 213px;
    height: 79px;

    border-radius: 2.86px;
    background: linear-gradient(180deg, #BA78FC 0%, #821CE9 100%);
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2.28571px 2.28571px rgba(0, 0, 0, 0.25);

    position: absolute;
    top: 80%;

    @media screen and (max-width: 480px) {
        width: 121.71px;
        height: 45.14px;
    }

`

const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Icon = styled.div`
    color: white;
    margin-right: 5px;

    font-size: 30px;

    @media screen and (max-width: 480px) {
        font-size: 17px;
    }
`

const Text = styled.p`  
    font-size: 20.82px;
    font-weight: 700;

    @media screen and (max-width: 480px) {
        font-size: 11.9px;
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