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
import { Fade, Slide } from 'react-awesome-reveal';
import { Channel } from '../../types/channel';


const videoUrl = 'https://player.vimeo.com/video/667967430?h=8749bf9a83&autoplay=1&muted=1&loop=1'

const Home = () => {

    const [ clients, setClients ] = useState<Array<Channel>>([]);
    const { locale } = useRouter();

    const fetchClients = async () => {
        const response = await youtube.get("/channels", {
            id: [
                "UC17wnw7BfA_z3AzcO_71Mrw",
                "UCmFAfMlZ7sCdMOVRapvdngA",
                "UCEfGV5hx2VrXl4jOUnG0MRQ"
            ],
            part: [
                "statistics",
                "snippet",
            ]
        });

        let channels: Array<Channel> = [];

        for (const channel of response.data.items) {

            console.log(channel);

            const filteredChannel: Channel = {
                id: channel.id,
                name: channel.snippet.title,
                customUrl: channel.snippet.customUrl,
                statistics: {
                    views: channel.statistics.viewCount,
                    subs: channel.statistics.subscriberCount
                },
                thumbnails: {
                    url: channel.snippet.thumbnails.high.url
                }

            }

            channels.push(filteredChannel);
        }

        setClients(channels);
    }

    useEffect(() => {

        fetchClients();
        
    }, []);

    return (
        <HomeScreen>
            
            <HomeSection>
                <Fade
                    triggerOnce={ true }
                >
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
                                        <HomeButton key={ id }>
                                            { text }
                                        </HomeButton>
                                    )
                            }
                    </Link>
                </Fade>
            </HomeSection>
            <HomeSection>
                <Fade
                    triggerOnce={ true }
                    direction="up"
                    fraction={0.5}
                >
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
                </Fade>
            </HomeSection>
            <HomeSection>
                <Fade
                    triggerOnce={ true }
                    direction="up"
                >
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
                </Fade>
            </HomeSection>
        </HomeScreen>
    )
}

export default Home;