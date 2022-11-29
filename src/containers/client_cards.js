import { FaEye } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import ClientCards from "../components/ClientCards";

const ClientCardsContainer = ({ clients }) => {

    return(
        <ClientCards>
            {
                clients.map(client => 
                    <ClientCards.Card key={ client.id }>
                        <ClientCards.Banner 
                            src={ client.snippet.thumbnails.high.url } 
                            width={ 411 }
                            height={ 274 }
                            objectFit="cover"
                        />
                        <ClientCards.Infos>
                            <ClientCards.Info>
                                <ClientCards.Icon icon={ <FaEye/> }/>
                                <ClientCards.Text>
                                    { 
                                        client.statistics.viewCount  
                                    }
                                </ClientCards.Text>
                            </ClientCards.Info>
                            <ClientCards.Info>
                                <ClientCards.Icon icon={ <MdGroups/> }/>
                                <ClientCards.Text>
                                    { 
                                        client.statistics.subscriberCount 
                                    }
                                </ClientCards.Text>
                            </ClientCards.Info>
                        </ClientCards.Infos>
                    </ClientCards.Card>
                )
            } 
        </ClientCards>
    )
}

export default ClientCardsContainer;