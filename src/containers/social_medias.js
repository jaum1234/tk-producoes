import SocialMedias from "../components/SocialMedias";
import socialMedias from "../fixtures/social_medias";

const SocialMediasContainer = () => {
    return(
        <SocialMedias>
            {
                socialMedias.map(({ id, href, icon }) => 
                    <SocialMedias.Link 
                        key={ id } 
                        href={ href }
                    >
                        <SocialMedias.Icon 
                            src={ icon }
                        />
                    </SocialMedias.Link>
                )
            }
        </SocialMedias>
    )
}

export default SocialMediasContainer;