import { Button as StyledButton } from './styles/Button';

const Button = ({ children, onClick, ...restProps }) => {
    return(
        <StyledButton 
            { ...restProps } 
            onClick={ onClick }
        >
            { children }
        </StyledButton>
    )
}

export default Button;