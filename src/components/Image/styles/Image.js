import styled from 'styled-components';
import { keyframes } from 'styled-components';



export const Box = styled.div`

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