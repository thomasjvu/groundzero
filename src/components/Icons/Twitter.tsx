import { Link } from "react-router-dom";
import { Icon } from "@iconify/react"
import { IconProps } from "../../types/icon";

const Twitter: React.FC<IconProps> = ({url, width, height}): JSX.Element => {

    return (
        <Link to={url}>
            <Icon icon="jam:twitter" width={width} height={height} className="hover:text-primary"/>
        </Link>
    )
}

export default Twitter
