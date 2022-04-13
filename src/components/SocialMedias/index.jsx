import { Box, Flex } from "../../layout";
import { List, Icon, Link } from "./styles/SocialMedias";

const SocialMedias = (props) => {
    return(
        <Box mb="2rem">
            { props.children }
        </Box>
    )
}

SocialMedias.List = ({ children, ...restProps}) => {
    return(
        <List {...restProps}>
            { children }
        </List>    
    ) 
}

SocialMedias.Link = ({ children, url, ...restProps}) => {
    return <Link target={'_blank'} href={ url } {...restProps}> { children }</Link>;
}

SocialMedias.Icon = ({ children, ...restProps}) => {
    return <Icon {...restProps}> { children } </Icon>;
}

export default SocialMedias;