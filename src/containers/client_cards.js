import { ClientCards } from "../components"
import { FaEye } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { useState, useEffect } from "react";
import { youtube } from "../apis";

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

        if (response.data.items)
            setClients(response.data.items);
        
    }, []);

    return(
        <ClientCards>
            {
                clients.map(client => 
                    <ClientCards.Card key={ client.id }>
                        
                        <ClientCards.Infos>
                            <ClientCards.Info>
                                <ClientCards.Icon icon={ <FaEye/> }/>
                                <ClientCards.Text>
                                    { client.statistics && client.statistics.viewCount }
                                </ClientCards.Text>
                            </ClientCards.Info>
                            <ClientCards.Info>
                                <ClientCards.Icon icon={ <MdGroups/> }/>
                                <ClientCards.Text>
                                    { client.statistics && client.statistics.subscriberCount }
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