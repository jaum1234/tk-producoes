const ClientCard = ({chidren, ...restProps}) => {
    return(
        <Box { ...restProps }>
            { children }
        </Box>
    )
}

ClientCard.Image = function ClientCardImage({ src, ...restProps }) {
    return <Image src={ src } { ...restProps }/>
}

ClientCard.Info = function ClientCardInfo({ children, ...restProps }) {
    return(
        <Info { ...restProps }>
            { children }
        </Info>
    )
}

ClientCard.Icon = function ClientCardIcon({ ...restProps }) {
    return <Icon { ...restProps }/>
}

ClientCard.Text = function ClientCardText({ children, ...restProps }) {
    return(
        <Text { ...restProps }>
            { children }
        </Text>
    )
}