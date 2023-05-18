import { Icon } from '@iconify/react';
import { CardWithIconProps } from '../../types/card';

const CardSlim: React.FC<CardWithIconProps> = ({ title, text, iconName }) => {
    return (
        <div className="card flex w-full flex-col border-2 bg-neutral text-neutral-content hover:border-primary">
            <div className="flex flex-col justify-between gap-10 p-10">
                <div className="align-center flex justify-between">
                    <h3 className="card-title font-display text-4xl">{title}</h3>
                    <Icon icon={iconName} />
                </div>
                <p className="font-mono italic">{text}</p>
            </div>
        </div>
    );
};

export default CardSlim;
