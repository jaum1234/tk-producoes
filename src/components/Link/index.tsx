import NextLink from 'next/link';

export type LinkProps = {
    children: React.ReactNode,
    href?: any,
    target?: any,
    locale?: string | false | undefined
}

const Link = ({ children, href, target, locale, ...restProps }: LinkProps) => {
    return (
        <NextLink href={ href } locale={ locale }> 
            <a { ...restProps } target={ target }>
                { children }
            </a>
        </NextLink>
    )
}

export default Link;