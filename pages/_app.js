import Head from 'next/head';
import { Container } from '../src/layout';
import { GlobalStyles } from '../src/styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Edição de vídeos e imagens - TK Produções</title>
            </Head>
            <GlobalStyles/>
            <Container>
                <Component {...pageProps} />
            </Container>
        </>
    )
}
   
export default MyApp