import { Box, Flex } from "../../../../layout";
import { SocialMediasContainer } from "../../../../containers/SocialMedias";
import socialMedias from "../../../../fixtures/social-medias";
import Text from '../../../../components/Text';

const ContactMe = () => {
    return(
        <Box as='section'>
                <Flex alignItems="center" flexDir="column">
                    <Text 
                       
                        textAlign="center"
                        mb="2rem"
                        fw="bold"
                    >
                        <span style={{color: "#7E328B"}}>Gostou do meu trabalho?</span> <br></br> Entre em contato pelas minhas redes sociais
                    </Text>
                    <SocialMediasContainer items={ socialMedias }/>  
                </Flex>
        </Box>
    )
}

export default ContactMe;