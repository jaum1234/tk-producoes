import Head from 'next/head';
import { Container, Flex } from '../src/layout';
import { GlobalStyles } from '../src/styles/GlobalStyles';
import Navbar from '../src/components/Navbar';
import logo from '../public/assets/img/logo_tkprod.png'
import brazil_flag from '../public/assets/img/brazil-flag.png'
import usa_flag from '../public/assets/img/united-states-of-america.png'


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Edição de vídeos e imagens - TK Produções</title>
            </Head>
            <GlobalStyles/>
            <Navbar>
                <Navbar.Brand src={ logo }/>
                <Flex alignItems='center'>
                    <Navbar.Nav>
                        <Navbar.Item href='/'>Home</Navbar.Item>
                        <Navbar.Item href='/sobre-mim'>Sobre mim</Navbar.Item>
                    </Navbar.Nav>
                    <Navbar.Divider/>
                    <Navbar.Language src={ brazil_flag } width={ 40 } height={ 40 }/>
                    <Navbar.Language src={ usa_flag }  width={ 40 } height={ 40 }/>
                </Flex>
            </Navbar>
            <Container>
                <Component {...pageProps} />
            </Container>
        </>
    )
}
   
export default MyApp