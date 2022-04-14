import Image from 'next/image';
import styled from 'styled-components';
import { keyframes } from 'styled-components'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

export const Box = styled.div`
    box-shadow: ${props => props.boxShadow || "none"};

    margin: ${props => props.m};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};

    animation: ${rotate} 5s linear infinite
`