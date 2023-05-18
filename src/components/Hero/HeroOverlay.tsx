import { Link } from 'react-router-dom';
import { HeroOverlayProps } from '../../types/hero';

const HeroOverlay: React.FC<HeroOverlayProps> = ({
    image,
    title,
    text,
    primaryButtonText,
    secondaryButtonText,
    primaryButtonLink,
    secondaryButtonLink
}): JSX.Element => {
    return (
        <div
            className="no-repeat hero rounded border border-white bg-contain bg-left bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}>
            {/* bg-overlay */}
            <div className="hero-overlay rounded-xl bg-opacity-5"></div>
            <div className="py-20 text-center">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="mb-5 font-display text-xl font-bold sm:text-4xl xl:text-5xl">{title}</h1>
                    <p className="mb-5 font-mono">{text}</p>
                    <div id="hero-buttons" className="flex justify-center gap-5 lg:gap-10 xl:gap-20">
                        {primaryButtonText && (
                            <Link to={primaryButtonLink ?? ''} className="btn-primary btn font-mono text-xs lg:text-sm">
                                {primaryButtonText}
                            </Link>
                        )}
                        {secondaryButtonText && (
                            <Link
                                to={secondaryButtonLink ?? ''}
                                className="btn-secondary btn font-mono text-xs lg:text-sm">
                                {secondaryButtonText}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroOverlay;
