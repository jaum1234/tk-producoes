import NextLink from 'next/link';

const Link = ({ children, href, ...restProps }) => {
    return (
        <NextLink href={ href }>
            <a { ...restProps }>
                { children }
            </a>
        </NextLink>
    )
}

export default Link;