import styled from "styled-components";
import themes from "../../../styles/themes";
import MyLink from "../../Link";

const StyledSocialMedias = styled.div`
    display: flex;
    list-style: none;
`

const Link = styled(MyLink)`
    cursor: pointer;
    margin: 0 0.8rem;
    transition: 0.2s ease-in-out;
    font-size: 25px;

    &:hover {
        color: ${themes.colors.red} !important;
    }
`


export { StyledSocialMedias, Link };
