import logo from "../../public/assets/img/logo_tkprod.png";
import brazil_flag from '../../public/assets/img/brazil-flag.png'
import usa_flag from '../../public/assets/img/united-states-of-america.png'

const navbarFixtures = {
    logo,
    navigation: {
        items: [
            {
                id: 1,
                label: "Home",
                url: "/",
            },
            {
                id: 2,
                label: "Sobre mim",
                url: "/sobre-mim"
            }
        ]
    },
    languages: [
        {
            id: 1,
            src: brazil_flag,
            locale: "pt-BR"
        },
        {   id: 2,
            src: usa_flag,
            locale: "en-US"
        }
    ]
}

export default navbarFixtures;