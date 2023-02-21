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


const ClientCards = ({ children, ...restProps }: { children: JSX.Element }) => {
    return(
        <List { ...restProps }>
            { children }
        </List>
    )
}

ClientCards.Card = ({ children, ...restProps }: { children: JSX.Element }) => {
    return(
        <Card { ...restProps }>
            { children }
        </Card>
    )
}

ClientCards.Banner = function ClientCardBanner({ src, ...restProps }: { src: string }) {
    return <Banner src={ src } { ...restProps }/>
}

ClientCards.Infos = function ClientCardInfos({ children, ...restProps }: { children: JSX.Element }) {
    return(
        <Infos { ...restProps }>
            { children }
        </Infos>
    )
}

ClientCards.Info = function ClientCardInfo({ children, ...restProps }: { children: JSX.Element }) {
    return(
        <Info { ...restProps }>
            { children }
        </Info>
    )
}

ClientCards.Icon = function ClientCardIcon({ icon, ...restProps}: { icon: JSX.Element }) {
    return (
        <Icon { ...restProps }>
            { icon }
        </Icon>
    );
}

ClientCards.Statistic = function ClientCardStatistic({ statistics, ...restProps }: { statistics: number }) {

    const [statistic, setStatistic] = useState<number>(0);

    let increment: NodeJS.Timer;

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