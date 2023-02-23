import { StyledButton } from './styles/Button';

type ButtonProps = {
    children: React.ReactNode,
    onClick?: () => void
}

const Button = ({ children, onClick, ...restProps }: ButtonProps) => {
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