import { Fade } from 'react-awesome-reveal';
import { useRouter } from 'next/router';
import { HomeLogo, HomeScreen, HomeTitle, HomeButton, HomeSection, HomeText, HomeSubtitle } from './styles/Home';
import PresentationVideo from '../../components/PresentationVideo';

const videoUrl = 'https://player.vimeo.com/video/667967430?h=8749bf9a83&autoplay=1&muted=1&loop=1'

const Home = ({ primaryTitle, secundaryTitle }) => {

    const router = useRouter();

    return (
        <HomeScreen>
           
        </HomeScreen>
    )
}

export default Home;