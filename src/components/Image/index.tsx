import { Box } from './styles/Image';
import NextImage from 'next/image';

type ImageProps = {
    src: string,
    alt?: string | undefined,
    width?: string | number | undefined,
    height?: string | number | undefined,
    objectFit?: any
}

const Image = ({ src, alt, width, height, objectFit, ...restProps }: ImageProps) => {
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