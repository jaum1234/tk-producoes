import { Box } from './styles/Image';
import NextImage from 'next/image';

const Image = ({ src, alt, width, height, objectFit, ...restProps }) => {
    return(
        <Box { ...restProps }>
            <NextImage 
                src={ src } 
                alt={ alt } 
                width={ width }
                height={ height }
                objectFit={ objectFit }
            />
        </Box>
    )
}

export default Image;