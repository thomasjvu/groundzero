import { CardWithImageProps } from '../../types/card';

const CardOverlay: React.FC<CardWithImageProps> = ({
    title,
    text,
    buttonText,
    imageSrc,
    imageAlt,
    buttonLink
}): JSX.Element => {
    return (
        <div className="card image-full w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={imageSrc} alt={imageAlt} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{text}</p>
                <div className="card-actions justify-end">
                    <a href={buttonLink} target="_blank" className="btn-secondary btn font-mono">
                        {buttonText}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CardOverlay;
