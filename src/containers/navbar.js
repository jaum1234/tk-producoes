import Navbar from '../components/Navbar';
import navbarFixtures from '../fixtures/navbar';
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from '../components/Link';

const NavbarContainer = () => {

    const [ collapse, setCollapse ] = useState(false);
    const router = useRouter();
    const { asPath } = router;

    const collapseMenu = () => {
        setCollapse(prev => !prev);
    }

    return(
        <>
            <Navbar>
                <Navbar.Box>
                    <Navbar.Brand src={ navbarFixtures.logo }/>
                    <Navbar.Ham onOpen={ collapseMenu }/>
                    <Navbar.Collapse collapse={ collapse }>
                        <Navbar.Nav>
                            {
                                navbarFixtures.navigation.items.map(({ id, url, label }) => 
                                    <Navbar.Item key={ id } href={ url }>
                                        { label }
                                    </Navbar.Item>
                                )
                            }
                        </Navbar.Nav>
                        <Navbar.Divider/>
                        <Navbar.Languages>
                            { 
                                navbarFixtures.languages.map(({ id, src, locale }) =>
                                    
                                        <Navbar.Language 
                                            key={ id }
                                            src={ src }
                                            width={ 40 } 
                                            height={ 40 }
                                            onClick={() => {
                                                router.push(asPath, asPath, { locale })
                                            }}
                                        />
                                ) 
                            }
                        </Navbar.Languages>
                    </Navbar.Collapse>
                </Navbar.Box>
            </Navbar>
            <Navbar.Overlay collapse={ collapse }/>
        </>
    )
}

export default NavbarContainer;

