import { List, Link, Icon } from "./styles/SocialMedias";

const SocialMedias = ({ children }: { children: JSX.Element }) => {
    return(
        <List>
            { children }
        </List>
    )
}

SocialMedias.Link = ({ children, href, ...restProps}: { children: JSX.Element, href: string }) => {
    return(
        <Link target={'_blank'} href={ href } {...restProps}> 
            { children }
        </Link>
    )
}

SocialMedias.Icon = ({ src, ...restProps }: { src: string }) => {
    return(
        <Icon src={ src } { ...restProps }/>
    )
}


export default SocialMedias;