import logo from '../../../public/assets/img/asas.png'
import Reveal from 'react-awesome-reveal';
import { Fade } from 'react-awesome-reveal';
import { useRouter } from 'next/router';
import { HomeLogo, HomeScreen, HomeTitle, HomeButton } from './styles/Home';
import { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

const Home = ({ primaryTitle, secundaryTitle }) => {

    const router = useRouter();

    return (
        <HomeScreen>
            <Fade direction='down'>
                <HomeLogo 
                    src={ logo } 
                    alt='Logo do TK Produções que fica girando na tela'
                    width={80}
                    height={80}
                    />
            </Fade>
            <Fade direction='up'>

                <HomeTitle>
                    <span>{ primaryTitle }</span><br/>{ secundaryTitle }
                </HomeTitle>
                <HomeButton onClick={ () => {
                    router.push('/trabalhos');
                } }>
                    Veja mais
                </HomeButton>
            </Fade>
        </HomeScreen>
    )
}

export default Home;