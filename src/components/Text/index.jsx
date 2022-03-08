import { Text as StyledText } from "./styles/Text"

const Text = ({ children, ...restProps }) => {
    return(
        <StyledText { ...restProps }>{ children }</StyledText>
    )
}

export default Text;