import { List, Link, Image } from "./styles/SocialMedias";

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

SocialMedias.Image = ({ src, ...restProps }) => {
    return(
        <Image src={ src } { ...restProps }/>
    )
}


export default SocialMedias;