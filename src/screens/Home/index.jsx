import { Box, Container } from '../../layout';
import background from '../../../public/assets/img/fundo.png';
import Landing from './Sections/Landing';
import AboutMe from './Sections/AboutMe';
import ContactMe from './Sections/ContactMe';

const Home = ({ videoUrl, primaryTitle, secundaryTitle }) => {
    return (
        <>
            <Box pb="2rem">
                <Container>
                    <Landing
                        videoUrl={ videoUrl }
                        primaryTitle={ primaryTitle }
                        secundaryTitle={ secundaryTitle }
                    />
                </Container>
                <Box></Box>
            </Box>
        </>
    )
}

export default Home;