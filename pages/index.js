import Home from "../src/screens/Home";

export default Home;

export const getStaticProps = async () => {

    const primaryTitle = 'TK PRODUÇÕES'
    const secundaryTitle = 'Edição de vídeos e imagens'
    const videoUrl = 'https://player.vimeo.com/video/667967430?h=8749bf9a83&autoplay=1&muted=1&loop=1'

    return {
        props: {
            videoUrl,
            primaryTitle,
            secundaryTitle
        }
    }
} 