import { Button as StyledButton } from './styles/Button';

const Button = (props) => {
    return(
        <StyledButton {...props} onClick={ props.onClick }>{ props.children }</StyledButton>
    )
}

export default Button;