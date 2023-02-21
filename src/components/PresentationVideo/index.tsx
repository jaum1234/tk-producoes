
import { Container, Video } from './styles/PresentationVideo';

type PresentationVideoProps = {
    id: any,
    src: string
}

const PresentationVideo = ({ src, id }: PresentationVideoProps) => {
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