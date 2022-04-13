import { Fade, Roll } from "react-reveal";
import Button from "../../../../components/Button";
import PresentationVideo from "../../../../components/PresentationVideo";
import { Box, Flex } from "../../../../layout";
import logo from '../../../../../public/assets/img/asas.png';
import Image from "../../../../components/Image";
import Text from '../../../../components/Text';
import { MdOutlineWork } from 'react-icons/md';
import { RiUser5Fill } from 'react-icons/ri';
import { useState } from "react";
import Modal from "../../../../components/Modal";

const Landing = ({ videoUrl, primaryTitle, secundaryTitle }) => {

    const [modal, setModal] = useState(false); 

    const showModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    return(
        <Box>

            <Modal
                show={ modal }
                handleClose={ closeModal }
            >
                <Modal.Head>
                    <Modal.Title>João Pedro Galvao</Modal.Title>
                    <Modal.Close handleClose={ closeModal }/>
                </Modal.Head>
                <Modal.Body>

                </Modal.Body>
            </Modal>

            <Flex 
                flexDir="column"
                alignItems="center"
            >
                    <Image 
                        src={ logo }
                        mb="1.5rem"
                        mt="3rem"
                        width={90}
                        height={90}
                    />

                    <Text 
                        mb="0.8rem" 
                        as="h1"
                        fw="bold" 
                        color='#7E328B'
                        textAlign="center"
                    >
                        
                        { primaryTitle }
                    </Text>
                    <Text 
                        as="p" 
                        textAlign='center'
                    >
                        { secundaryTitle }
                    </Text>
                    <Box mb="1rem">
                        <PresentationVideo src={ videoUrl }/>
                    </Box>
                    <Flex>
                        <Button 
                            as='a' 
                            href='https://www.behance.net/joopedrogalvo'
                            target="_blank"
                            width='230px'
                        >
                            <MdOutlineWork/>
                            Meus trabalhos
                        </Button>
                        <Button width='200px' onClick={ showModal }>
                            <RiUser5Fill/>
                            Sobre mim
                        </Button>
                    </Flex>
            </Flex>
        </Box>
    )
}

export default Landing;