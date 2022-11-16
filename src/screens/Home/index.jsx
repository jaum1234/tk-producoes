import { 
    HomeScreen, 
    HomeTitle, 
    HomeSection, 
    HomeSubtitle, 
    HomeDescription 
} from './styles/Home';
import { 
    Link, 
    PresentationVideo,
    Button, 
} from '../../components';
import { ClientCards, SocialMedias } from '../../containers';

const videoUrl = 'https://player.vimeo.com/video/667967430?h=8749bf9a83&autoplay=1&muted=1&loop=1'

const Home = () => {
    return (
        <HomeScreen>
            <HomeSection>
                <HomeTitle>
                    TK PRODUÇÕES 
                </HomeTitle>
                <HomeDescription>
                    Ediçao de vídeos e imagens
                </HomeDescription>
                <PresentationVideo src={ videoUrl }/>
                <Link 
                    href={"https://www.behance.net/joopedrogalvo"} 
                    target="_blank">
                    <Button width={ "200px" }>
                        Veja mais dos meus trabalhos
                    </Button>
                </Link>
            </HomeSection>
            <HomeSection>
                <HomeSubtitle>Pessoas para <br/> quem já trabalhei:</HomeSubtitle>
                <ClientCards/>
            </HomeSection>
            <HomeSection>
                <HomeSubtitle>
                    Gostou do meu trabalho? <br/>
                    Entre em contato pelas <br/>
                    minhas redes sociais
                </HomeSubtitle>
                <SocialMedias/>
            </HomeSection>
        </HomeScreen>
    )
}

export default Home;