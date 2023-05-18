import { Link } from "react-router-dom"
import { CardWithImageProps } from "../../types/card";

const CardGlass: React.FC<CardWithImageProps> = ({ imageAlt, imageSrc, title, text, buttonText, buttonLink }) => {
    return (
        <div className="card glass w-full xl:w-96">
            <figure>
                <img src={imageSrc} alt={imageAlt} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-4xl">{title}</h2>
                <p className="font-mono text-lg">{text}</p>
                <div className="card-actions justify-end">
                    <Link to={buttonLink} className="btn-primary btn font-mono w-full">{buttonText}</Link>
                </div>
            </div>
        </div>
    );
};

export default CardGlass

