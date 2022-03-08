import { Fade, Roll } from "react-reveal";
import Button from "../../../../components/Button";
import PresentationVideo from "../../../../components/PresentationVideo";
import { Box, Flex } from "../../../../layout";
import logo from '../../../../assets/img/asas.png';
import Image from "../../../../components/Image";
import Text from '../../../../components/Text';

const Landing = () => {
    return(
        <Box as='section' pb="10rem">
            <Flex 
                flexDir="column"
                alignItems="center"
            >
                <Fade top>
                    <Roll>
                        <Image 
                            src={ logo }
                            mb="3rem"
                            mt="3rem"
                            w="90px"
                        />
                    </Roll>

                    <Text 
                        mb="0.8rem" 
                        as="h1"
                        fw="bold" 
                        color='#7E328B'
                        hoverColor='#AB47BC'  
                        textShadow='5px 5px 20px black' 
                        textAlign="center"
                    >
                        
                        TK PRODUÇOES
                    </Text>
                    <Text 
                        as="p" 
                        textShadow='5px 5px 20px black'
                        textAlign='center'
                    >
                        Edição de vídeos e imagens
                    </Text>
                </Fade>
                <Fade bottom>
                    <Box mb="1rem">
                        <PresentationVideo/>
                    </Box>
                    <Button 
                        as='a' 
                        href='https://www.behance.net/joopedrogalvo'
                        target="_blank"
                    >
                        Veja mais dos meus trabalhos
                    </Button>
                </Fade>
            </Flex>
        </Box>
    )
}

export default Landing;