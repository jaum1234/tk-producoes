import Navbar from '../../components/Navbar';
import logo from '../../../public/assets/img/asas.png'
import { Slide } from 'react-awesome-reveal';
import SocialMedias from '../../components/SocialMedias';
import socialMedias from '../../fixtures/social-medias';
import { Grid } from '../../layout';
import PresentationVideo from '../../components/PresentationVideo';
import Image from '../../components/Image';
import svg from '../../../public/assets/img/vide.svg'
import Button from '../../components/Button';
import { Fade } from 'react-awesome-reveal'
import { TrabalhosIcon, TrabalhosItem, TrabalhosLabel, TrabalhosList, TrabalhosScreen, TrabalhosSubTitle } from './styles/Trabalhos';
import { SiAdobepremierepro, SiAdobephotoshop, SiAdobeaftereffects } from 'react-icons/si'

const videoUrl = 'https://player.vimeo.com/video/667967430?h=8749bf9a83&autoplay=1&muted=1&loop=1'

const Trabalhos = () => {
    return (
        <TrabalhosScreen>
            <Slide direction='down'>
                <Navbar>
                    <div>
                        <Navbar.Brand src={ logo } />
                        <Navbar.Nav>
                            <Navbar.Item href='#sobre-mim'>Sobre mim</Navbar.Item>
                            <Navbar.Item href='#contato'>Contato</Navbar.Item>
                        </Navbar.Nav>
                    </div>
                    <SocialMedias>
                        {
                            socialMedias.map(({ id, href, icon }) => (
                                <SocialMedias.Link key={ id } href={ href }>
                                    { icon }
                                </SocialMedias.Link>
                            ))
                        }
                    </SocialMedias>
                </Navbar>
            </Slide>
            <main>
                <Grid
                    templateColumns='1fr'
                >
                    <section style={{ display: 'flex', flexDirection: 'column'}}>
                        <Fade direction='up'>
                            <Grid
                                alignItems='start'
                                templateColumns='repeat(auto-fit, minmax(300px, 1fr))'
                            >
                                <PresentationVideo 
                                    src={ videoUrl }
                                />
                                <div>
                                    <h3>Gostou do meu trabalho?</h3>
                                </div>
                            </Grid>
                        </Fade>
                    </section>
                    <section>
                        <h2>Saiba um pouco sobre mim</h2>
                    </section>
                </Grid>
            </main>
        </TrabalhosScreen>
    )
}

export default Trabalhos;