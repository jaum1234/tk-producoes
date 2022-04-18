
import { Container, Video } from './styles/PresentationVideo';

const PresentationVideo = ({ src, id }) => {
    return (
        <Container >
            <Video 
                id={ id }
                title='Presentation video'
                src={ src } 
                frameBorder="0" 
                allowFullScreen 
                allow='autoplay'>    
            </Video>
        </Container>
    )
}

export default PresentationVideo;