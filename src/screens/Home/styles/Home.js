import styled from 'styled-components';
import { keyframes } from 'styled-components';
import Button from '../../../components/Button';
import Image from '../../../components/Image';
import themes from '../../../styles/themes';


const HomeScreen = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
`

const HomeLogo = styled(Image)`
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
    }
`

const HomeButton = styled(Button)`
    background-color: ${themes.theme_1.colors.red};
    width: 150px;
    height: 45px;
`


export { HomeScreen, HomeLogo, HomeTitle, HomeButton };