import Modal from "../components/Modal"
import aboutMeLinks from "../fixtures/about-me-links";


export const ModalContainer = (props) => {
    return(
        <Modal>
            <Modal.CloseButton onClick={ props.onClick }/>
            <Modal.Body>
                <Modal.Image src={ props.img } alt="Foto de perfil do Joao Pedro"/>
                <Modal.Content>
                    <Modal.Title>Joao Pedro Galvao</Modal.Title>
                    { props.texts.map(item => (
                        <Modal.Text>
                            { item.text }
                        </Modal.Text>
                    )) }
                    <Modal.List>
                        { aboutMeLinks.map(item => (
                            <Modal.Link url={ item.url }>
                                <Modal.Icon>
                                    { item.icon }
                                </Modal.Icon>
                                <Modal.Label>
                                    { item.label }
                                </Modal.Label>
                            </Modal.Link>
                        )) }
                    </Modal.List>
                </Modal.Content>
            </Modal.Body>
        </Modal>
    )
}