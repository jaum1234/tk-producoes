import styled, { keyframes } from 'styled-components';
import Button from '../../../components/Button';
import themes from '../../../styles/themes';

const HomeScreen = styled.div`
    display: grid;
    row-gap: 150px;
    padding-bottom: 50px;

    @media screen and (max-width: 480px) {
        row-gap: 80px;
    }

`

const HomeTitle = styled.h1`
    display: flex;
    flex-direction: column;
    color: ${themes.colors.light};
    font-size: 58.5px;
    text-align: center;
    font-weight: bold;
    margin-top: 55px;
    margin-bottom: 1rem;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

    span {
        margin-top: 0.5rem;
        font-size: 25.58px;
        font-weight: normal;
        

        @media screen and (max-width: 480px) {
            font-size: 14px;
        }
    }   
`
const HomeButton = styled(Button)`
    background-color: ${themes.colors.call_to_action};
    width: 317px;
    height: 70px;
    font-size: 24px;

    @media screen and (max-width: 480px) {
        font-size: 15.5px;
        width: 199px;
        height: 44px;
    }
`

const HomeSection = styled.section`   
`
const HomeText = styled.p`
    margin: ${props => props.margin};
    max-width: 500px;
    text-transform: ${props => props.textTransform};
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    line-height: 20px;
`

const HomeDescription = styled.h2`
    font-size: 14px;
    text-align: center;
    font-weight: normal;
    margin-top: 5px;
    margin-bottom: 20px;
`

const HomeSubtitle = styled.h2`
    font-weight: 700;
    line-height: 24.2px;
    text-align: center;
    margin-bottom: 52px;
    font-size: 48px;
    line-height: 58.09px;

    @media screen and (max-width: 480px) {
        font-size: 20px;
        line-height: 24.2px;
        margin-bottom: 20px;
    }
    
`

export const HomeContentBox = styled.div`
    display: flex;
`

export { 
    HomeScreen, 
    HomeTitle, 
    HomeButton, 
    HomeSection, 
    HomeText,
    HomeSubtitle ,
    HomeDescription
};