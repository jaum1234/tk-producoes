import logo from '../../../public/assets/img/asas.png'
import { Fade } from 'react-awesome-reveal';
import { useRouter } from 'next/router';
import { HomeLogo, HomeScreen, HomeTitle, HomeButton, HomeSection, HomeText, HomeSubtitle } from './styles/Home';
import PresentationVideo from '../../components/PresentationVideo';
import SocialMedias from '../../components/SocialMedias';
import socialMedias from '../../fixtures/social-medias';
import Image from '../../components/Image';
import perfil from '../../../public/assets/img/perfil.jpg';
import themes from '../../styles/themes';

const videoUrl = 'https://player.vimeo.com/video/667967430?h=8749bf9a83&autoplay=1&muted=1&loop=1'

const Home = ({ primaryTitle, secundaryTitle }) => {

    const router = useRouter();

    return (
        <HomeScreen>
            <HomeSection>
                <Fade direction='down' triggerOnce>
                    <HomeLogo 
                        src={ logo } 
                        alt='Logo do TK Produções que fica girando na tela'
                        width={80}
                        height={80}
                        />
                </Fade>
                <Fade direction='up' triggerOnce>

                    <HomeTitle>
                        <span>{ primaryTitle }</span><br/>{ secundaryTitle }
                    </HomeTitle>
                    <PresentationVideo
                        src={ videoUrl }
                    />
                    <HomeButton onClick={ () => {
                        videoUrl = videoUrl.replace('autoplay=0', 'autoplay=1');
                    } }>
                        Veja mais
                    </HomeButton>
                </Fade>
            </HomeSection>
            <HomeSection justifyContent='flex-start'>
                <HomeSubtitle>Sobre mim</HomeSubtitle>
                <div style={{ display: 'flex' }}>
                    <Image src={ perfil }/>
                    <div>
                        <HomeText
                            fontSize='24px'
                            color={ themes.theme_1.colors.red }
                            textTransform='uppercase'
                            fontWeight='bold'
                            margin='0 0 0.8rem 0'
                        >
                            Joao Pedro Galvao
                        </HomeText>
                        <HomeText margin='0 0 1rem 0'>
                            Atuo como editor de vídeos, profissionalmente, a mais de 2 anos e trabalho com edição de cursos e vídeos para a internet.
                        </HomeText>
                        <HomeText>
                            Já fui e sou responsável pela edição de alguns canais do Youtube Brasileiro. Domino os programas Adobe Premiere, Adobe After Effects e Adobe Photoshop.
                        </HomeText>
                    </div>
                </div>
            </HomeSection>
            <HomeSection justifyContent='flex-start'>
                <HomeSubtitle>Gostou do meu trabalho?<br/> Entre em contato pelas minhas redes sociais</HomeSubtitle>
            </HomeSection>
        </HomeScreen>
    )
}

export default Home;