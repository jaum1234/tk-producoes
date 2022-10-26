import styled from 'styled-components';
import { keyframes } from 'styled-components';
import Button from '../../../components/Button';
import Image from '../../../components/Image';
import themes from '../../../styles/themes';

const rotate = keyframes`
    from {
    transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

const shine = keyframes`
    to {
        background-position: 200% center;
    }
`

const HomeScreen = styled.div`
    display: grid;
    grid-auto-rows: 100vh 500px 300px;
`

const HomeTitle = styled.h1`
    color: ${themes.colors.light};
    font-size: 32px;
    text-align: center;
    font-weight: bold;
    margin-top: 55px;

    span {
        color: ${themes.colors.red};
        font-size: 25.58px;
        font-weight: normal;

        background: linear-gradient(to right, #840032 20%, #A70040 40%, #EC005A 60%, #840032 80%);
        background-size: 200% auto;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        animation: ${shine} 5s linear infinite;
    }
`

const HomeButton = styled(Button)`
    background-color: ${themes.colors.red};
    width: 150px;
    height: 45px;
`

const HomeSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: ${props => props.height};
    justify-content: ${props => props.justifyContent || 'center'};
    
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
    font-size: 20px;
    line-height: 24.2px;
    text-align: center;
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