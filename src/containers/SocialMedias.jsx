import SocialMedias from "../components/SocialMedias"

export const SocialMediasContainer = (props) => {
    return(
        <SocialMedias>
            <SocialMedias.List>
                { props.items.map(item => (
                    <SocialMedias.Link url={ item.url } key={ item.id }>
                        <SocialMedias.Icon>
                            { item.icon }
                        </SocialMedias.Icon>
                    </SocialMedias.Link>
                )) }
            </SocialMedias.List>
        </SocialMedias>
    )
}
