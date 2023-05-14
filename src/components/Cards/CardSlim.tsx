import { Icon } from "@iconify/react";

type Props = {
    title: string;
    text: string;
    iconName: string;
};

const CardSlim: React.FC<Props> = ({ title, text, iconName }) => {
    return (
        <div className="card w-full bg-neutral text-neutral-content flex flex-col">
            <div className="p-10 flex flex-col justify-between gap-10">
                <div className="flex justify-between align-center">
                    <h3 className="card-title font-display text-4xl">{title}</h3>
                    <Icon icon={iconName} />
                </div>
                <p className="font-mono italic">{text}</p>
            </div>
        </div>
    );
};

export default CardSlim;
