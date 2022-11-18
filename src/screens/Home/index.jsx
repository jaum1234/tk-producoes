import { 
    HomeScreen, 
    HomeTitle, 
    HomeSection, 
    HomeSubtitle, 
    HomeDescription, 
    HomeButton
} from './styles/Home';
import Link from "../../components/Link";
import PresentationVideo from "../../components/PresentationVideo";
import Button from "../../components/Button";
import ClientCards  from "../../containers/client_cards";
import SocialMedias from "../../containers/social_medias";

const videoUrl = 'https://player.vimeo.com/video/667967430?h=8749bf9a83&autoplay=1&muted=1&loop=1'

const Home = () => {
    return (
        <HomeScreen>
            <HomeSection>
                <HomeTitle>
                    TK PRODUÇÕES <span>Ediçao de vídeos e imagens</span>
                </HomeTitle>
                
                <PresentationVideo src={ videoUrl }/>
                <Link 
                    href={"https://www.behance.net/joopedrogalvo"} 
                    target="_blank">
                    <HomeButton>
                        Veja mais dos<br/>meus trabalhos
                    </HomeButton>
                </Link>
            </HomeSection>
            <HomeSection>
                <HomeSubtitle>Pessoas para <br/> quem já trabalhei:</HomeSubtitle>
                <ClientCards/>
            </HomeSection>
            <HomeSection>
                <HomeSubtitle>
                    Gostou do meu trabalho? <br/>
                    Entre em contato pelas 
                    minhas redes sociais!
                </HomeSubtitle>
                <SocialMedias/>
            </HomeSection>
        </HomeScreen>
    )
}

export default Home;