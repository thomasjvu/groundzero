import { Link } from "react-router-dom";
import { Icon } from "@iconify/react"
import { IconProps } from "../../types/icon";

const Website: React.FC<IconProps> = ({url, width, height}): JSX.Element => {

    return (
        <Link to={url}>
            <Icon icon="jam:link" width={width} height={height} className="hover:text-primary"/>
        </Link>
    )
}

export default Website 
