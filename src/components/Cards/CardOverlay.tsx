type Props = {
    imageSrc: string;
    imageAlt: string;
    title: string;
    text: string;
    buttonText: string;
};

const CardOverlay: React.FC<Props> = ({ title, text, buttonText, imageSrc, imageAlt }) => {
    return (
        <div className="card image-full w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={imageSrc} alt={imageAlt} />
                {title}
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{text}</p>
                <div className="card-actions justify-end">
                    <button className="btn-primary btn">{buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default CardOverlay;
