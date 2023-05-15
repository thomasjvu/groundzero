import LayoutError from '../../layouts/LayoutError';

const Error: React.FC = (): JSX.Element => {
    return (
        <LayoutError>
            <h1 className="font-display text-4xl md:text-7xl">Oops! Something went wrong</h1>
            <p className="text-center font-mono">Please try again later.</p>
            <a className="btn btn-primary font-mono" href="/">Go Home</a>
        </LayoutError>
    );
};

export default Error;
