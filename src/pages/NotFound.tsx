import { Link } from "react-router-dom"
import Logo from '../assets/images/logo.png'

const NotFound: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-1/2 flex flex-col justify-center items-center gap-10">
                <img src={Logo} alt="logo" width="50" height="50" className="rounded border border-black"/>
                <h1 className="font-display text-7xl">404 Not Found</h1>
                <p className="font-mono">The page you are looking for does not exist.</p>
                <Link to="/" className="btn w-3/4 font-mono">Go Back</Link>
            </div>
        </div>
    )
}

export default NotFound
