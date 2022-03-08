import { Box, Container } from '../../layout';
import background from '../../assets/img/fundo.png';
import Landing from './Sections/Landing';
import AboutMe from './Sections/AboutMe';
import ContactMe from './Sections/ContactMe';

console.log(window.innerWidth);

const Home = () => {

    return (
        <>
            <Box bgImg={ background } bgAttach="fixed" pb="2rem">
                <Container>
                    <Landing/>
                    <AboutMe/>
                    <ContactMe/>
                </Container>
            </Box>
        </>
    )
}

export default Home;