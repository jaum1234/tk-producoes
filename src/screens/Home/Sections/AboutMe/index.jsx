import { Fade } from "react-reveal";
import { Box, Flex } from "../../../../layout";
import { useEffect, useState } from "react";
import Text from '../../../../components/Text';
import Image from "../../../../components/Image";
import aboutMeTexts from "../../../../fixtures/about-me-texts";
import perfil from '../../../../../public/assets/img/perfil.jpg';


const AboutMe = () => {

    const [imgWidth, setImgWidth] = useState();
 
    const resizeImg = () => {
        if (window.innerWidth < 374) {
            setImgWidth("95%");
            return;
        }
        setImgWidth("350px");
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            resizeImg();
        })
    });

    useEffect(() => {
        resizeImg();
    });



    return(
        <Box pb="10rem" as='section'>
                <Flex justifyContent="center" alignItems="center">
                    <Text 
                        as='h2' 
                        fw="bold"
                        textAlign="center"
                        lineHeight="1.25"
                        mb="3rem"
                    >
                        Conheça um <br></br>pouco sobre mim
                    </Text>
                </Flex>
                <Flex justifyContent="center" alignItems="center" flexDir='row' flexWrap='wrap' >
                    <Image src={ perfil }/>
                    <Box w="500px" 
                        pl="2rem"
                        pr="2rem"
                    >
                        <Text 
                            color='#7E328B'  
                            fw="bold"
                            mb="1.5rem"
                            textTransform="uppercase"
                        >
                            João Pedro Galvão
                        </Text>
                        {
                            aboutMeTexts.map(({ id, text }) => (
                                <Text 
                                    key={ id }
                                    lineHeight="24px" 
                                    mb="1rem"
                                >
                                    { text }
                                </Text>
                            ))
                        }
                    </Box>
                </Flex>
        </Box>
    )
}

export default AboutMe;