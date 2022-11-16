import { List, Link, Icon } from "./styles/SocialMedias";

const SocialMedias = ({ children }) => {
    return(
        <List>
            { children }
        </List>
    )
}

SocialMedias.Link = ({ children, href, ...restProps}) => {
    return(
        <Link target={'_blank'} href={ href } {...restProps}> 
            { children }
        </Link>
    )
}

SocialMedias.Icon = ({ src, ...restProps }) => {
    return(
        <Icon src={ src } { ...restProps }/>
    )
}


export default SocialMedias;