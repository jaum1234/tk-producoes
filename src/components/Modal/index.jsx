import { Box, CloseButton, Body, Content, Image, Text, Title, List, Link, Icon, Label  } from './styles/Modal';

const Modal = ({ children, ...restProps }) => {
    return(
        <Box { ...restProps }>
            { children } 
        </Box>
    )
}

Modal.CloseButton = ({ onClick, ...restProps }) => {
    return <CloseButton onClick={ onClick } { ...restProps }/>
}

Modal.Body = ({ children, ...restProps }) => {
    return <Body { ...restProps }>{ children }</Body>
}

Modal.Image = ({ src, ...restProps }) => {
    return <Image src={ src } { ...restProps }/>
}

Modal.Content = ({ children, ...restProps }) => {
    return <Content { ...restProps }>{ children }</Content>
}

Modal.Title = ({ children, ...restProps }) => {
    return <Title { ...restProps }>{ children }</Title>
}

Modal.Text = ({ children, ...restProps }) => {
    return <Text { ...restProps }>{ children }</Text>
}

Modal.List = ({ children, ...restProps }) => {
    return <List { ...restProps }> { children } </List>;
}

Modal.Link = ({ children, url, ...restProps }) => {
    return <Link target={'_blank'} href={ url } { ...restProps }> {children}</Link>;
}

Modal.Icon = ({ children, ...restProps }) => {
    return <Icon { ...restProps }> {children} </Icon>;
}

Modal.Label = ({ children, ...restProps }) => {
    return <Label { ...restProps }>{ children }</Label>
}

export default Modal;