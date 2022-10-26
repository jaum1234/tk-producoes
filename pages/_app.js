import Head from 'next/head';
import { Container, Flex } from '../src/layout';
import { GlobalStyles } from '../src/styles/GlobalStyles';

import styled from 'styled-components';
import themes from '../src/styles/themes';
import { NavbarContainer } from '../src/containers/navbar';

const BackgroundOverlay = styled.div`
    background-color: ${themes.colors.light_purple};
    height: 200px;
    clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);
    position: absolute;
    top: 20%;
`

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Edição de vídeos e imagens - TK Produções</title>
            </Head>
            <GlobalStyles/>
            <NavbarContainer/>
            <Container>
                <Component {...pageProps} />
            </Container>
            <BackgroundOverlay/>
        </div>
    )
}
   
export default MyApp