import { Box, Flex } from "../../layout";
import { Link, StyledSocialMedias } from "./styles/SocialMedias";

const SocialMedias = (props) => {
    return(
        <StyledSocialMedias mb="2rem">
            { props.children }
        </StyledSocialMedias>
    )
}

SocialMedias.Link = ({ children, href, ...restProps}) => {
    return <Link target={'_blank'} href={ href } {...restProps}> { children }</Link>;
}


export default SocialMedias;