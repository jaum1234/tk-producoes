import Navbar from '../components/Navbar';
import navbarFixtures from '../fixtures/navbar';
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from '../components/Link';
import { Slide } from 'react-awesome-reveal';

const NavbarContainer = () => {

    const [ collapse, setCollapse ] = useState(false);
    const router = useRouter();
    const { asPath, locale } = router;

    const collapseMenu = () => {
        setCollapse(prev => !prev);
    }

    return(
        <>
            <Navbar>
                <Slide 
                    direction="down"
                    triggerOnce="true"
                >
                    <Navbar.Box>
                        <Navbar.Brand src={ navbarFixtures.logo }/>
                        <Navbar.Ham onOpen={ collapseMenu }/>
                        <Navbar.Collapse collapse={ collapse }>
                            <Navbar.Nav>
                                {
                                    navbarFixtures.navigation.items
                                        .filter(item => {
                                            if (item.locale === locale) {
                                                return item.links;
                                            }
                                        })
                                        .map(({id, label, url}) =>
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
                </Slide>
            </Navbar>
            <Navbar.Overlay collapse={ collapse }/>
        </>
    )
}

export default NavbarContainer;

