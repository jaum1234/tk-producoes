import { Container, List, Icon, Link, Text } from "./styles/SocialMedias";

const SocialMedias = (props) => {
    return(
        <Container>
            { props.children }
        </Container>
    )
}

SocialMedias.List = ({ children, ...restProps}) => {
    return <List {...restProps}> { children } </List>
}

SocialMedias.Link = ({ children, url, ...restProps}) => {
    return <Link target={'_blank'} href={ url } {...restProps}> { children }</Link>;
}

SocialMedias.Icon = ({ children, ...restProps}) => {
    return <Icon {...restProps}> { children } </Icon>;
}

SocialMedias.Text = ({ children, ...restProps}) => {
    return <Text {...restProps}>{ children }</Text>
}



export default SocialMedias;