import { FaEye } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import ClientCards from "../components/ClientCards";
import { Channel } from '../types/channel';


const ClientCardsContainer = ({ clients }: { clients: Array<Channel> }) => {

    return(
        <ClientCards>
            {
                clients.map((client: Channel) => 
                    <ClientCards.Card 
                        key={ client.id }
                        href={ 
                            client.customUrl ? 
                                `https://youtube.com/${client.customUrl}` 
                                :
                                `https://youtube.com/channel/${client.id}`  
                        }
                        target="_blank"
                    >
                        <ClientCards.Banner 
                            src={ client.thumbnails.url } 
                            width={ 411 }
                            height={ 274 }
                            objectFit="cover"
                        />
                        <ClientCards.Infos>
                            <ClientCards.Info>
                                <ClientCards.Icon icon={ <FaEye/> }/>
                                <ClientCards.Statistic statistics={ client.statistics.views }/>
                            </ClientCards.Info>
                            <ClientCards.Info>
                                <ClientCards.Icon icon={ <MdGroups/> }/>
                                <ClientCards.Statistic statistics={ client.statistics.subs }/>
                            </ClientCards.Info>
                        </ClientCards.Infos>
                    </ClientCards.Card>
                )
            } 
        </ClientCards>
    )
}

export default ClientCardsContainer;
