import Head from 'next/head';
import styled from 'styled-components';
import themes from '../src/styles/themes';
import Navbar from '../src/containers/navbar';
import { Container } from '../src/layout';
import { GlobalStyles } from '../src/styles/GlobalStyles';
import { Slide } from 'react-awesome-reveal';
import { AppProps } from 'next/app';

// const SecundaryBackground = styled.div`

//     background-color: ${themes.colors.light_purple};
//     width: 100%;
//     position: absolute;
//     top: 100%;
//     clip-path: polygon(0 300px, 100% 0, 100% 100%, 0% 100%);

//     height: 157%;
//     z-index: -1;
//     @media screen and (max-width: 1200px) {
//         height: 75%;
//     }


//     @media screen and (max-width: 480px) {
//         clip-path: polygon(0 150px, 100% 0, 100% 100%, 0% 100%);
//         height: 80%;
//     }
// `

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Edição de vídeos e imagens - TK Produções</title>
            </Head>
            <GlobalStyles/>
            <Navbar/>
            {/* <SecundaryBackground/> */}
            <Container>
                <Component {...pageProps} />
            </Container>
        </>
    )
}
   
export default MyApp