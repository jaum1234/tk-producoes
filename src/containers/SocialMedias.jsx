import SocialMedias from "../components/SocialMedias"

export const SocialMediasContainer = ({ items }) => {
    return(
        <SocialMedias>
            <SocialMedias.List justifyContent="center" alignItems="center">
                { items.map(({ url, id, icon }) => (
                    <SocialMedias.Link url={ url } key={ id }>
                        <SocialMedias.Icon>
                            { icon }
                        </SocialMedias.Icon>
                    </SocialMedias.Link>
                )) }
            </SocialMedias.List>
        </SocialMedias>
    )
}
