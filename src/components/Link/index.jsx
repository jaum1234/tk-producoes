import NextLink from 'next/link';

const Link = ({ children, href, target, ...restProps }) => {
    return (
        <NextLink href={ href }>
            <a { ...restProps } target={ target }>
                { children }
            </a>
        </NextLink>
    )
}

export default Link;