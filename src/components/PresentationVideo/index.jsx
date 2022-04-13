
import { Container, Video } from './styles/PresentationVideo';

const PresentationVideo = ({ src }) => {
    return (
        <Container>
            <Video 
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