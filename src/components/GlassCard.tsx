import { Link } from "react-router-dom"

type Props = {
    alt: string 
    src: string
    title: string
    text: string
    buttonText: string
    buttonLink: string
}

const GlassCard: React.FC<Props> = ({ alt, src, title, text, buttonText, buttonLink }) => {
    return (
        <div className="card glass w-96">
            <figure>
                <img src={src} alt={alt} />
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

export default GlassCard

