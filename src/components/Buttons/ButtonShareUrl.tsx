import {Icon} from '@iconify/react'

const ButtonCopyUrl: React.FC = () => {

    if (!navigator.share) return null;

    const share = async () => {
        try {
            const title = document.title;
            const url = window.location.href
            await navigator.share({ title, url})
        } catch (error) {
            console.error("Error Sharing: ", error)
        }
    }

    return (
        <button className="btn gap-2" onClick={share}>
            <Icon icon="jam:share-alt-f" />
            <span>Share</span>
        </button>
    )
}
export default ButtonCopyUrl; 
