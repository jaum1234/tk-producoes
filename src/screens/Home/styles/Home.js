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
    grid-auto-rows: 500px;
    align-items: center;
`

const HomeLogo = styled(Image)`
    animation: ${rotate} 5s linear infinite;
    margin-bottom: 2rem;
`

const HomeTitle = styled.h1`
    color: ${themes.theme_1.colors.light};
    font-size: 20px;
    text-align: center;
    line-height: 50px;
    font-weight: 400;
    font-family: ${themes.fonts.inter};
    margin-bottom: 2rem;


    span {
        color: ${themes.theme_1.colors.red};
        font-size: 60px;
        font-weight: bold;
        text-transform: uppercase;

        background: linear-gradient(to right, #840032 20%, #A70040 40%, #EC005A 60%, #840032 80%);
        background-size: 200% auto;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        animation: ${shine} 5s linear infinite;
    }
`

const HomeButton = styled(Button)`
    background-color: ${themes.theme_1.colors.red};
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
    margin: 1rem 0;
`


export { HomeScreen, HomeLogo, HomeTitle, HomeButton, HomeSection, HomeText };