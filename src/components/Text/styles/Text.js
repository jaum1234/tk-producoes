import styled from 'styled-components';

export const Text = styled.p`
    color: ${props => props.color || "#fff"};

    font-family: ${props => props.ff || "Quicksand, sans-serif"/*"Space Grotesk, sans-serif"*//*"Poppins, sans-serif"*/};
    font-size: ${props => props.fs || "16px"};
    font-weight: ${props => props.fw || "normal"};

    line-height: ${props => props.lineHeight || "auto"};
    letter-spacing: ${props => props.letterSpacing || "auto"};

    margin-top: ${props => props.mt || "0"};
    margin-bottom: ${props => props.mb || "0"};
    margin-left: ${props => props.ml || "0"};
    margin-right: ${props => props.mr || "0"};

    padding-top: ${props => props.pt || "0"};
    padding-bottom: ${props => props.pb || "0"};
    padding-left: ${props => props.pl || "0"};
    padding-right: ${props => props.pr || "0"};

    text-align: ${props => props.textAlign || "start"};
    text-shadow: ${props => props.textShadow || "none"};
    text-transform: ${props => props.textTransform || "none"};

    transition: 0.5s ease-in-out;

    word-spacing: ${props => props.wordSpacing || "0"};

    &:hover {
        color: ${props => props.hoverColor || "none"}
    }
`