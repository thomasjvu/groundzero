type Props = {
    image: string;
    title: string;
    text: string;
    primaryButtonText: string;
    secondaryButtonText: string;
};

const HeroOverlay: React.FC<Props> = ({ image, title, text, primaryButtonText, secondaryButtonText }) => {
    return (
        <div className="no-repeat hero bg-contain bg-left bg-no-repeat border border-white rounded" style={{ backgroundImage: `url(${image})` }}>
            {/* overlay */}
            <div className="hero-overlay rounded-xl bg-opacity-5"></div>
            <div className="py-20 text-right">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="mb-5 font-display text-5xl font-bold">{title}</h1>
                    <p className="mb-5 font-mono">{text}</p>
                    <div id="hero-buttons" className="flex justify-center gap-20">
                        <button className="btn btn-primary font-mono">{primaryButtonText}</button>
                        <button className="btn btn-secondary font-mono">{secondaryButtonText}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroOverlay;
