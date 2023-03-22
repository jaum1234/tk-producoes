import { StaticImageData } from "next/image";
import { List, Link, Icon } from "./styles/SocialMedias";

const SocialMedias = ({ children }: { children: React.ReactNode }) => {
    return(
        <List>
            { children }
        </List>
    )
}

SocialMedias.Link = ({ children, href, ...restProps}: { children: React.ReactNode, href: string }) => {
    return(
        <Link target={'_blank'} href={ href } {...restProps}> 
            { children }
        </Link>
    )
}

SocialMedias.Icon = ({ src, ...restProps }: { src: StaticImageData }) => {
    return(
        <Icon src={ src } { ...restProps }/>
    )
}


export default SocialMedias;