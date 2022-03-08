import { StyledImage } from './styles/Image';

const Image = ({ src, ...restProps }) => {
    return(
        <StyledImage src={ src } { ...restProps }/>
    )
}

export default Image;