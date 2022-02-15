import { Container, List, Icon, Link, Text } from "./styles/SocialMedias";

const SocialMedias = (props) => {
    return(
        <Container>
            { props.children }
        </Container>
    )
}

SocialMedias.List = function SocialMediasList(props) {
    return <List {...props}> {props.children} </List>
}

SocialMedias.Link = function SocialMediasLink(props) {
    return <Link target={'_blank'} href={ props.url } {...props}> {props.children}</Link>;
}

SocialMedias.Icon = function SocialMediasIcon(props) {
    return <Icon {...props}> {props.children} </Icon>;
}

SocialMedias.Text = function SocialMediasText(props) {
    return <Text {...props}>{ props.children }</Text>
}



export default SocialMedias;