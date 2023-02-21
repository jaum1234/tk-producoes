import {
    List, 
    Card, 
    Banner,
    Infos, 
    Info, 
    Text,
    Icon
} from './styles/ClientCards';
import Image from "../Image";
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import numberReducer from '../../utils/number_reducer';


const ClientCards = ({ children, ...restProps }) => {
    return(
        <List { ...restProps }>
            { children }
        </List>
    )
}

ClientCards.Card = ({ children, redirect, ...restProps }) => {
    return(
        <Card { ...restProps } onClick={ redirect }>
            { children }
        </Card>
    )
}

ClientCards.Banner = function ClientCardBanner({ src, ...restProps }) {
    return <Banner src={ src } { ...restProps }/>
}

ClientCards.Infos = function ClientCardInfos({ children, ...restProps }) {
    return(
        <Infos { ...restProps }>
            { children }
        </Infos>
    )
}

ClientCards.Info = function ClientCardInfo({ children, ...restProps }) {
    return(
        <Info { ...restProps }>
            { children }
        </Info>
    )
}

ClientCards.Icon = function ClientCardIcon({ icon, ...restProps}) {
    return (
        <Icon { ...restProps }>
            { icon }
        </Icon>
    );
}

ClientCards.Statistic = function ClientCardStatistic({ statistics, ...restProps }) {

    const [statistic, setStatistic] = useState(0);

    let increment;

    const incrementStatistics = () => {

        if (statistic <= statistics) {
            increment = setInterval(() => {

                if (statistic < 1000) {
                    setStatistic(prev => prev + 1);    
                } else if (statistic >= 1000 && statistic < 1000000) {
                    setStatistic(prev => prev + 1000);
                } else {
                    setStatistic(prev => prev + 1000000)
                }
                
            }, 0.005);
        }
    }

    // const shouldIncrement = () => {

    //     const scrollPosition = window.scrollY;

    //     const desiredPosition = window.innerHeight*0.8

    //     return scrollPosition > desiredPosition;
    // }

    useEffect(() => {

        incrementStatistics();
        
        return () => clearInterval(increment);

    }, [statistic]);

    return(
        <Text { ...restProps }>
            { numberReducer(statistic) }
        </Text>
    )
}

export default ClientCards;