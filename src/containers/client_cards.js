import { FaEye } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import ClientCards from "../components/ClientCards";

const ClientCardsContainer = ({ clients }) => {

    return(
        <ClientCards>
            {
                clients.map(client => 
                    <ClientCards.Card 
                        key={ client.id }
                        href={ 
                            client.snippet.title ? 
                                `https://youtube.com/${client.snippet.title}` 
                                :
                                `https://youtube.com/channel/${client.id}`  
                        }
                        target="_black"
                    >
                        <ClientCards.Banner 
                            src={ client.snippet.thumbnails.high.url } 
                            width={ 411 }
                            height={ 274 }
                            objectFit="cover"
                        />
                        <ClientCards.Infos>
                            <ClientCards.Info>
                                <ClientCards.Icon icon={ <FaEye/> }/>
                                <ClientCards.Statistic statistics={ client.statistics.viewCount }/>
                            </ClientCards.Info>
                            <ClientCards.Info>
                                <ClientCards.Icon icon={ <MdGroups/> }/>
                                <ClientCards.Statistic statistics={ client.statistics.subscriberCount }/>
                            </ClientCards.Info>
                        </ClientCards.Infos>
                    </ClientCards.Card>
                )
            } 
        </ClientCards>
    )
}

export default ClientCardsContainer;
