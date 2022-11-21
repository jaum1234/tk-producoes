import styled from 'styled-components';

export const Container = styled.div`
    width: 1320px;
    margin: 0 auto;

    display: ${props => props.display || "block"};
    align-items: ${props => props.alignItems || "flex-start"};

    @media screen and (min-width: 1200px) and (max-width: 1399px) {
        width: 1140px;
    }

    @media screen and (min-width: 992px) and (max-width: 1199px) {
        width: 960px;
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        width: 720px;
    }

    @media screen and (min-width: 576px) and (max-width: 767px) {
        width: 540px;
    }

    @media screen and (max-width: 575px) {
        width: 90%;
    }
`

export const Box = styled.div`
    background: ${props => props.bg || "none"};
    background-image: ${props => `url(${props.bgImg})` || "none"};
    background-attachment: ${props => props.bgAttach || ""};

    box-sizing: border-box;

    margin-top: ${props => props.mt || "0"};
    margin-bottom: ${props => props.mb || "0"};
    margin-left: ${props => props.ml || "0"};
    margin-right: ${props => props.mr || "0"};

    padding-top: ${props => props.pt || "0"};
    padding-bottom: ${props => props.pb || "0"};
    padding-left: ${props => props.pl || "0"};
    padding-right: ${props => props.pr || "0"};

    position: ${props => props.position || ""};

    width: ${props => props.w || "auto"};
`

export const Flex = styled.div`
    display: flex;
    align-items: ${props => props.alignItems || "flex-start"};
    flex-direction: ${props => props.flexDir || "row"};
    flex-wrap: ${props => props.flexWrap || "nowrap"};
    justify-content: ${props => props.justifyContent || "flex-start"};
`

export const Grid = styled.div`
    display: grid;
    align-items: ${props => props.alignItems};
    gap: ${props => props.gap};
    grid-template-columns: ${props => props.templateColumns};
`