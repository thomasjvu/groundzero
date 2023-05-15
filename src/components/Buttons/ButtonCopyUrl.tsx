import {Icon} from '@iconify/react'

const ButtonCopyUrl: React.FC = () => {

    const url = window.location.href

    const handleClick = () => {
        navigator.clipboard.writeText(url)
    }

    return (
        <button className="btn gap-2" onClick={handleClick}>
            <Icon icon="jam:link" />
            <span>Copy</span>
        </button>
    )
}
export default ButtonCopyUrl; 
