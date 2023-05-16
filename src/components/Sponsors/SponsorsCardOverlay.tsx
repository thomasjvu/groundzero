type Props = {
    imageSrc: string;
    imageAlt: string;
    title: string;
    text: string;
    buttonText: string;
    buttonLink: string;
};

const SponsorsCardOverlay: React.FC<Props> = ({ title, text, buttonText, buttonLink, imageSrc, imageAlt }) => {
    return (
        <div className="card image-full w-full xl:w-96 bg-neutral-400 shadow-xl">
            <figure>
                <img src={imageSrc} alt={imageAlt} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-md">{title}</h2>
                <p>{text}</p>
                <div className="card-actions justify-end">
                    <a href={buttonLink} target="_blank" className="btn-secondary btn font-mono">{buttonText}</a>
                </div>
            </div>
        </div>
    );
};

export default SponsorsCardOverlay;
