import logo from '../../../public/assets/img/asas.png'
import { Fade } from 'react-awesome-reveal';
import { useRouter } from 'next/router';
import { HomeLogo, HomeScreen, HomeTitle, HomeButton, HomeSection, HomeText } from './styles/Home';
import PresentationVideo from '../../components/PresentationVideo';
import SocialMedias from '../../components/SocialMedias';
import socialMedias from '../../fixtures/social-medias';

const videoUrl = 'https://player.vimeo.com/video/667967430?h=8749bf9a83&autoplay=0&muted=1&loop=1'

const Home = ({ primaryTitle, secundaryTitle }) => {

    const router = useRouter();

    return (
        <HomeScreen>
            <HomeSection>
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
                        router.push('#presentation');
                        videoUrl = videoUrl.replace('autoplay=0', 'autoplay=1');
                    } }>
                        Veja mais
                    </HomeButton>
                </Fade>
            </HomeSection>
            <HomeSection id='presentation'>
                <PresentationVideo
                    src={ videoUrl }
                />
                <HomeText>Veja mais dos meus trabalhos</HomeText>
                <HomeButton>Ver mais</HomeButton>
                <HomeText>Ou entre em contato pelas minhas redes sociais</HomeText>
                <SocialMedias>
                {
                    socialMedias.map(({ id, href, icon }) => (
                        <SocialMedias.Link key={ id } href={ href }>
                            { icon }
                        </SocialMedias.Link>
                    ))
                }
                </SocialMedias>
            </HomeSection>
            <HomeSection>
                <Fade direction='up'>
                    <h2>Sobre mim</h2>
                </Fade>
            </HomeSection>
        </HomeScreen>
    )
}

export default Home;