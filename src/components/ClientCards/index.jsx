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


const ClientCards = ({ children, ...restProps }) => {
    return(
        <List { ...restProps }>
            { children }
        </List>
    )
}

ClientCards.Card = ({ children, ...restProps }) => {
    return(
        <Card { ...restProps }>
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

ClientCards.Text = function ClientCardText({ children, ...restProps }) {
    return(
        <Text { ...restProps }>
            { children }
        </Text>
    )
}

export default ClientCards;