import NextLink from 'next/link';

const Link = ({ children, href, target, locale, ...restProps }) => {
    return (
        <NextLink href={ href } locale={ locale }> 
            <a { ...restProps } target={ target }>
                { children }
            </a>
        </NextLink>
    )
}

export default Link;