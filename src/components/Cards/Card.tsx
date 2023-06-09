import { Link } from 'react-router-dom';
import { CardProps } from '../../types/card'

const Card: React.FC<CardProps> = ({ title, text, buttonLink, buttonText, features }) => {
    return (
        <div className="card w-full bg-neutral text-neutral-content flex flex-col">
            <div className="p-10 flex flex-col justify-between gap-10">
                <h3 className="card-title font-display text-4xl">{title}</h3>
                <p className="font-mono italic">{text}</p>
                <Link to={buttonLink} className="btn bg-yellow-500 text-black font-mono w-full">{buttonText}</Link>
                <div className="card-features font-mono">
                    <ul className="flex flex-col gap-2">
                        {features.map((feature, index) => (
                            <li className="text-left list-disc" key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Card;
