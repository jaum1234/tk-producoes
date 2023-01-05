import { FaEye } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import ClientCards from "../components/ClientCards";

const ClientCardsContainer = ({ clients }) => {

    const reduceNumber = (number) => {
        if (number >= 1000 && number < 1000000) {
 	    return String(Math.trunc(number/1000)) + "K";
	} 
	
	if (number >= 1000000) {
	    return String(Math.trunc(number/1000000)) + "M";
	}

	return number;
    };

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
                                        reduceNumber(client.statistics.subscriberCount) 
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
