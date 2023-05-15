import { Icon } from "@iconify/react";

const SocialIcons: React.FC = () => {
    return (
        <div id="social-icons" className="flex gap-5">
            <a href="https://discord.com" target="_blank">
                <Icon icon="jam:discord" className="text-xl hover:text-accent"/>
            </a>
            <a href="https://twitter.com" target="_blank">
                <Icon icon="jam:twitter" className="text-xl hover:text-accent"/>
            </a>
            <a href="https://linkedin.com" target="_blank">
                <Icon icon="jam:linkedin" className="text-xl hover:text-accent"/>
            </a>
        </div>
    )
}

export default SocialIcons
