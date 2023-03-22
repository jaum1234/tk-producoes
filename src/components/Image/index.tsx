import { Box } from './styles/Image';
import NextImage, { StaticImageData } from 'next/image';

export type ImageProps = {
    src: StaticImageData,
    alt?: string | undefined,
    width?: string | number | undefined,
    height?: string | number | undefined,
    objectFit?: any,
    onClick?: () => void
}

const Image = ({ src, alt, width, height, objectFit, onClick, ...restProps }: ImageProps) => {
    return(
        <Box { ...restProps }>
            <NextImage 
                src={ src } 
                alt={ alt } 
                width={ width }
                height={ height }
                objectFit={ objectFit }
                onClick={ onClick }
            />
        </Box>
    )
}

export default Image;