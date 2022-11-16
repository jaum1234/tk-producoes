import { SocialMedias } from "../components";
import { socialMedias } from "../fixtures";

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