import React from "react";
import ReactDOM from 'react-dom';
import {
    Body,
    Close,
    Content,
    Footer,
    Head,
    Overlay,
    Picture,
    StyledModal,
    Text,
    Title
} from "./styles/Modal";

const Modal = ({
    show,
    children,
    handleClose,
    ...restProps
}) => {

    if (!show) {
        return null;
    }

    return (
        ReactDOM.createPortal(
            <Overlay onClick={ handleClose }>
                <StyledModal
                    hidden
                    onClick={ event => event.stopPropagation() }
                    { ...restProps }
                >
                    { children }
                </StyledModal>
            </Overlay>,
            document.getElementById('__next')
        )
    )
}

Modal.Head = function ModalHead({ children, ...restProps }) {
    return (
        <Head { ...restProps }>
            { children }
        </Head>
    )
}

Modal.Title = function ModalTitle({ children, ...restProps }) {
    return (
        <Title { ...restProps }>
            { children }
        </Title>
    )
}

Modal.Body = function ModalBody({ children, ...restProps }) {
    return (
        <Body { ...restProps }>
            { children }
        </Body>
    )
}

Modal.Content = function ModalContent({ children, ...restProps }) {
    return (
        <Content { ...restProps}>
            { children }
        </Content>
    )
}

Modal.Text = function ModalText({ children, ...restProps }) {
    return (
        <Text { ...restProps}>
            { children }
        </Text>
    )
}

Modal.Picture = function ModalPicture({
    src,
    alt,
    ...restProps
}) {
    return (
        <Picture { ...restProps}>
        </Picture>
    )
}

Modal.Close = function ModalClose({ handleClose, ...restProps }) {
    return (
        <Close onClick={ handleClose } { ...restProps }/>
    )
}

Modal.Footer = function ModalFooter({ children, ...restProps }) {
    return (
        <Footer { ...restProps}>
            { children }
        </Footer>
    )
}

export default Modal;