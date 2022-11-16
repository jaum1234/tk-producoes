import Head from 'next/head';
import styled from 'styled-components';
import themes from '../src/styles/themes';
import { Navbar } from '../src/containers';
import { Container } from '../src/layout';
import { GlobalStyles } from '../src/styles/GlobalStyles';

const MainBackground = styled.div`
    background-color: ${themes.colors.dark_purple};
    z-index: -2;
    position: absolute;
    width: 100%;
    height: 100%;
`

const SecundaryBackground = styled.div`
    background-color: ${themes.colors.light_purple};
    width: 100%;
    height: 140vh;
    position: absolute;
    top: 62%;
    z-index: -1;
    clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%);
`

function MyApp({ Component, pageProps }) {
    return (
        <>
            <SecundaryBackground/>
            <MainBackground/>
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