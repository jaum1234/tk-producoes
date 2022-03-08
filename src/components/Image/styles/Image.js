import styled from 'styled-components';

export const StyledImage = styled.img`
    box-shadow: ${props => props.boxShadow || "none"};

    height: ${props => props.h || "auto"};
    
    margin: ${props => props.m || "0"};
    margin-top: ${props => props.mt || "0"};
    margin-bottom: ${props => props.mb || "0"};
    margin-left: ${props => props.ml || "0"};
    margin-right: ${props => props.mr || "0"};
    
    width: ${props => props.w || "auto"};

`