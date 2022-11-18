import { FaEye } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { youtube } from "../apis";
import { useState, useEffect } from "react";
import ClientCards from "../components/ClientCards";
import numberReducer from '../utils/number_reducer';

const ClientCardsContainer = () => {

    const [clients, setClients] = useState([]);

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
                                    { client.statistics.viewCount }
                                </ClientCards.Text>
                            </ClientCards.Info>
                            <ClientCards.Info>
                                <ClientCards.Icon icon={ <MdGroups/> }/>
                                <ClientCards.Text>
                                    { client.statistics.subscriberCount }
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