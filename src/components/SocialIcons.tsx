import { Icon } from "@iconify/react";

const SocialIcons: React.FC = () => {
    return (
        <div id="social-icons" className="flex justify-center gap-5">
            <a href="https://twitter.com">
                <Icon icon="jam:twitter" className="text-xl"/>
            </a>
            <a href="https://twitter.com">
                <Icon icon="jam:discord" className="text-xl"/>
            </a>
            <a href="https://twitter.com">
                <Icon icon="jam:linkedin" className="text-xl"/>
            </a>
        </div>
    )
}

export default SocialIcons
