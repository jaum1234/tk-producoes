import { Fade } from 'react-awesome-reveal';
import { useRouter } from 'next/router';
import { HomeScreen, HomeTitle, HomeButton, HomeSection, HomeText, HomeSubtitle, HomeDescription } from './styles/Home';
import PresentationVideo from '../../components/PresentationVideo';
import Button from '../../components/Button';

const videoUrl = 'https://player.vimeo.com/video/667967430?h=8749bf9a83&autoplay=1&muted=1&loop=1'

const Home = () => {

    return (
        <HomeScreen>
            <section>
                <HomeTitle>
                    TK PRODUÇÕES 
                </HomeTitle>
                <HomeDescription>
                    Ediçao de vídeos e imagens
                </HomeDescription>
                <PresentationVideo src={ videoUrl }/>
                <Button width={ "168px" }>Veja mais</Button>
            </section>
            <section>
                <HomeSubtitle>Pessoas para quem já trabalhei</HomeSubtitle>
            </section>
        </HomeScreen>
    )
}

export default Home;