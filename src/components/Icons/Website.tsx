import { Icon } from "@iconify/react"
import { IconProps } from "../../types/icon";

const Website: React.FC<IconProps> = ({url, width, height}): JSX.Element => {

    return (
        <a href={url} target="_blank">
            <Icon icon="jam:link" width={width} height={height} className="hover:text-primary"/>
        </a>
    )
}

export default Website 
