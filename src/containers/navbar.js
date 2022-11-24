import Navbar from '../components/Navbar';

import { useState } from 'react';
import { useRouter } from "next/router";
import { useEffect } from 'react';
import navbarFixtures from '../fixtures/navbar';

const NavbarContainer = () => {

    const [ collapse, setCollapse ] = useState(false);
    const { locale, locales, asPath } = useRouter();

    const collapseMenu = () => {
        setCollapse(prev => !prev);
    }

    useEffect(() => {
        console.log(locale);
    }, [locale])

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
                                        href={ asPath }
                                        locale={ locale } 
                                        width={ 40 } 
                                        height={ 40 }
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

