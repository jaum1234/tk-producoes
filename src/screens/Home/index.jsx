import { 
    HomeScreen, 
    HomeTitle, 
    HomeSection, 
    HomeSubtitle, 
    HomeButton
} from './styles/Home';
import Link from "../../components/Link";
import PresentationVideo from "../../components/PresentationVideo";
import ClientCards  from "../../containers/client_cards";
import SocialMedias from "../../containers/social_medias";
import { useEffect, useState } from 'react';
import youtube from "../../apis/youtube";
import Router, { useRouter } from 'next/router';
import homeFixtures from '../../fixtures/home';


const videoUrl = 'https://player.vimeo.com/video/667967430?h=8749bf9a83&autoplay=1&muted=1&loop=1'

const Home = () => {

    const [clients, setClients] = useState([]);
    const { locale } = useRouter();

    useEffect(async () => {

        const response = await youtube.get("/channels", {
            id: [
                "UCY_xadtZDqFtUfd5LGsJLvw",
                "UC17wnw7BfA_z3AzcO_71Mrw"
            ],
            part: [
                "statistics",
                "snippet"
            ]
        });

        console.log(response);

        setClients(response.data.items);
    }, []);

    return (
        <HomeScreen>
            <HomeSection>
                { 
                    homeFixtures.entrySection.title.texts
                        .filter(text => text.locale === locale)
                        .map(({ id, primary, secondary }) => 
                                <HomeTitle key={ id }>

                                    { primary }
                                    <span>
                                        { secondary }
                                    </span>
                                </HomeTitle>
                            )
                        
                }
                <PresentationVideo src={ videoUrl }/>
                <Link 
                    href={ homeFixtures.entrySection.button.href } 
                    target="_blank">
                        {
                            homeFixtures.entrySection.button.labels
                                .filter(label => label.locale === locale)
                                .map(({ id, text }) => 
                                    <HomeButton key={ id } onClick={() => Router.push}>
                                        { text }
                                    </HomeButton>
                                )
                        }
                </Link>
            </HomeSection>
            <HomeSection>
                {
                    homeFixtures.clientsSection.subtitles
                        .filter(subtitle => subtitle.locale === locale)
                        .map(({ id, text }) => 
                            <HomeSubtitle key={ id }>
                                { text }
                            </HomeSubtitle>
                        )
                }
                <ClientCards clients={ clients }/>
            </HomeSection>
            <HomeSection>
                {
                    homeFixtures.contactSection.subtitles
                        .filter(subtitle => subtitle.locale === locale)
                        .map(({ id, text }) => 
                            <HomeSubtitle key={ id }>
                                { text }
                            </HomeSubtitle>
                        )
                }

                <SocialMedias/>
            </HomeSection>
        </HomeScreen>
    )
}

export default Home;