import { Fade } from "react-reveal";
import { Box, Flex } from "../../../../layout";
import { SocialMediasContainer } from "../../../../containers/SocialMedias";
import socialMedias from "../../../../fixtures/social-medias";
import Text from '../../../../components/Text';

const ContactMe = () => {
    return(
        <Box as='section'>
            <Fade top>
                <Flex alignItems="center" flexDir="column">
                    <Text 
                        as='h3'
                        textAlign="center"
                        mb="2rem"
                        fw="bold"
                        textShadow='5px 5px 15px black' 
                    >
                        <span style={{color: "#7E328B"}}>Gostou do meu trabalho?</span> <br></br> Entre em contato pelas minhas redes sociais
                    </Text>
                    <SocialMediasContainer items={ socialMedias }/>  
                </Flex>
            </Fade>
        </Box>
    )
}

export default ContactMe;