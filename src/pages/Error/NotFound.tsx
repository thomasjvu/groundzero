import { Link } from 'react-router-dom';
import LayoutError from '../../layouts/LayoutError';

const NotFound: React.FC = () => {
    return (
        <LayoutError>
            <>
                <h1 className="font-display text-4xl md:text-7xl">404 Not Found</h1>
                <p className="text-center font-mono">The page you are looking for doesn't exist</p>
                <Link to="/" className="btn w-1/2 font-mono">
                    Go Back
                </Link>
            </>
        </LayoutError>
    );
};

export default NotFound;
