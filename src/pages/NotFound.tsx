import { Link } from "react-router-dom"
import Icon from '../assets/images/icon.png'

const NotFound: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-3/4 flex flex-col justify-center items-center gap-10">
                <img src={Icon} alt="logo" width="75" height="75" className="rounded border border-base-100"/>
                <h1 className="font-display text-4xl md:text-7xl">404 Not Found</h1>
                <p className="font-mono text-center">The page you are looking for doesn't exist</p>
                <Link to="/" className="btn w-1/2 font-mono">Go Back</Link>
            </div>
        </div>
    )
}

export default NotFound
