import Navbar from '../components/Navbar';
import logo from '../../public/assets/img/logo_tkprod.png'
import brazil_flag from '../../public/assets/img/brazil-flag.png'
import usa_flag from '../../public/assets/img/united-states-of-america.png'
import { useRouter } from 'next/router';
import { useState } from 'react';

const NavbarContainer = () => {

    const [ collapse, setCollapse ] = useState(false);

    const collapseMenu = () => {
        setCollapse(prev => !prev);
    }

    return(
        <>
            <Navbar>
                <Navbar.Box>
                    <Navbar.Brand src={ logo }/>
                    <Navbar.Ham onOpen={ collapseMenu }/>
                    <Navbar.Collapse collapse={ collapse }>
                        <Navbar.Nav>
                            <Navbar.Item href='/'>Home</Navbar.Item>
                            <Navbar.Item href='/sobre-mim'>Sobre mim</Navbar.Item>
                        </Navbar.Nav>
                        <Navbar.Divider/>
                        <Navbar.Languages>
                            <Navbar.Language src={ brazil_flag } width={ 40 } height={ 40 }/>
                            <Navbar.Language src={ usa_flag }  width={ 40 } height={ 40 }/>
                        </Navbar.Languages>
                    </Navbar.Collapse>
                </Navbar.Box>
            </Navbar>
            <Navbar.Overlay collapse={ collapse }/>
        </>
    )
}

export default NavbarContainer;

