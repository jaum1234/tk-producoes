import styled from 'styled-components';

type BoxProps = {
    boxShadow?: string | "none", 
    m?: string,
    mt?: string,
    mb?: string,
    ml?: string,
    mr?: string,
    opacity?: string
}

export const Box = styled.div<BoxProps>`

    display: flex;
    justify-content: flex-start;
    align-items: center;

    box-shadow: ${props => props.boxShadow || "none"};

    margin: ${props => props.m};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};

    opacity: ${props => props.opacity};

    
`