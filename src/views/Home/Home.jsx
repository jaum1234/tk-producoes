import { useState } from 'react';

import perfil from '../../img/perfil.jpg';
import aboutMeTexts from '../../fixtures/about-me-texts'
import socialMedias from '../../fixtures/social-medias';

import { Buttons, Home as HomeBody, HomeContent, Text } from './Home.elements';

import PresentationVideo from '../../components/PresentationVideo';
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
        <HomeBody>
            { modal && <OverlayEffect/> }
            { modal && 
                <AboutMe 
                    texts={ aboutMeTexts } 
                    img={ perfil } 
                    onClick={ hideModal }/>   
            }
            <div onClick={ modal ? hideModal : null }>
                <Logo/>
                <HomeContent className='content'>
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
                    <PresentationVideo/>
                    <Text>Gostou do meu trabalho? <br></br> Entre em contado pelas minhas redes sociais:</Text>
                    <SocialMedias items={ socialMedias }/>
                </HomeContent>
            </div>
        </HomeBody>
    )
}

export default Home;