import Head from 'next/head';
import styled from 'styled-components';
import themes from '../src/styles/themes';
import Navbar from '../src/containers/navbar';
import { Container } from '../src/layout';
import { GlobalStyles } from '../src/styles/GlobalStyles';

const SecundaryBackground = styled.div`

    background-color: ${themes.colors.light_purple};
    width: 100%;
    position: absolute;
    bottom: 0%;
    clip-path: polygon(0 300px, 100% 0, 100% 100%, 0% 100%);

    z-index: -1;
    height: 125vh;

    @media screen and (max-width: 480px) {
        clip-path: polygon(0 150px, 100% 0, 100% 100%, 0% 100%);
    }
`

function MyApp({ Component, pageProps }) {
    return (
        <>
            <SecundaryBackground/>
            {/* <MainBackground/> */}
            <Head>
                <title>Home - Edição de vídeos e imagens - TK Produções</title>
            </Head>
            <GlobalStyles/>
            <Navbar/>
            <Container>
                <Component {...pageProps} />
            </Container>
        </>
    )
}
   
export default MyApp