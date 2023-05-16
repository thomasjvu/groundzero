type Props = {
    title: string;
    text: string;
    buttonText: string;
    features: string[];
};

const Card: React.FC<Props> = ({ title, text, buttonText, features }) => {
    return (
        <div className="card w-full bg-neutral text-neutral-content flex flex-col">
            <div className="p-10 flex flex-col justify-between gap-10">
                <h3 className="card-title font-display text-4xl">{title}</h3>
                <p className="font-mono italic">{text}</p>
                <button className="btn bg-yellow-500 text-black font-mono w-full">{buttonText}</button>
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
