import IconDiscord from "./IconDiscord";
import IconTwitter from "./IconTwitter";
import IconLinkedin from "./IconLinkedin";

const SocialIcons: React.FC = () => {
    return (
        <div id="social-icons" className="flex gap-5">
            <IconDiscord url="https://discord.com" width={25} height={25} />
            <IconTwitter url="https://twitter.com" width={25} height={25} />
            <IconLinkedin url="https://linkedin.com" width={25} height={25} />
        </div>
    )
}

export default SocialIcons
