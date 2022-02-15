import { Box, CloseButton, Body, Content, Image, Text, Title, List, Link, Icon, Label  } from './styles/Modal';

const Modal = (props) => {
    return(
        <Box>
            { props.children } 
        </Box>
    )
}

Modal.CloseButton = function ModalCloseButton(props) {
    return <CloseButton onClick={ props.onClick }/>
}

Modal.Body = function ModalBody(props) {
    return <Body>{ props.children }</Body>
}

Modal.Image = function ModalImage(props) {
    return <Image src={ props.src }/>
}

Modal.Content = function ModalContent(props) {
    return <Content>{ props.children }</Content>
}

Modal.Title = function ModalTitle(props) {
    return <Title>{ props.children }</Title>
}

Modal.Text = function ModalText(props) {
    return <Text>{ props.children }</Text>
}

Modal.List = function ModalList(props) {
    return <List> { props.children } </List>;
}

Modal.Link = function ModalLink(props) {
    return <Link target={'_blank'} href={ props.url }> {props.children}</Link>;
}

Modal.Icon = function ModalIcon(props) {
    return <Icon> {props.children} </Icon>;
}

Modal.Label = function ModalLabel(props) {
    return <Label>{ props.children }</Label>
}

export default Modal;