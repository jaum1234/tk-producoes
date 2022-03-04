
import { Container, Video } from './styles/PresentationVideo';

const PresentationVideo = () => {
    const videoUrl = 'https://player.vimeo.com/video/667967430?h=8749bf9a83&autoplay=1&muted=1&loop=1';

    return (
        <Container>
            <Video 
                title='Presentation video'
                src={ videoUrl } 
                frameBorder="0" 
                allowFullScreen 
                allow='autoplay'>    
            </Video>
        </Container>
    )
}

export default PresentationVideo;