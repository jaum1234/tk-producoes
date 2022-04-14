import Home from "../src/screens/Home";

export default Home;

export const getStaticProps = async () => {

    const primaryTitle = 'TK PRODUÇÕES'
    const secundaryTitle = 'Edição de vídeos e imagens'

    return {
        props: {
            primaryTitle,
            secundaryTitle
        }
    }
} 