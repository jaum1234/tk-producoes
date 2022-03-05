import { useState } from 'react';

import perfil from '../../img/perfil.jpg';
import aboutMeTexts from '../../fixtures/about-me-texts'
import socialMedias from '../../fixtures/social-medias';

import { Box, Buttons, Container, HomeContent, Text } from './Home';

import Logo from '../../components/Logo';
import Button from '../../components/Button';
import OverlayEffect from '../../components/OverlayEffect';
import { ModalContainer as AboutMe } from '../../containers/Modal';
import { SocialMediasContainer as SocialMedias } from '../../containers/SocialMedias';

const Home = () => {

    const [modal, setModal] = useState(false);

    const showModal = () => setModal(true);
    const hideModal = () => setModal(false);

    return (
        <Container>
            { modal && <OverlayEffect/> }
            { modal && 
                <AboutMe 
                    texts={ aboutMeTexts } 
                    img={ perfil } 
                    onClick={ hideModal }/>   
            }
            <Box onClick={ modal ? hideModal : null } >
                <Logo/>
                <HomeContent>
                    <Buttons>
                        <div>
                            <a href="https://www.behance.net/joopedrogalvo" target={'_blank'} rel="noreferrer">
                                <Button yellow>
                                    veja mais
                                </Button>
                            </a>
                        </div>
                        <div>
                            <Button onClick={ showModal }>
                                Sobre mim
                            </Button>
                        </div>
                    </Buttons>
                    <Text>Gostou do meu trabalho? <br></br> Entre em contado pelas minhas redes sociais:</Text>
                    <SocialMedias items={ socialMedias }/>
                </HomeContent>
            </Box>
        </Container>
    )
}


export default Home;