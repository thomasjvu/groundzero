export interface CardProps {
    title: string;
    text: string;
    buttonText: string;
    features: string[];
}

export interface CardWithImageProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    text: string;
    buttonText: string;
    buttonLink: string;
}

export interface CardWithIconProps {
    title: string;
    text: string;
    iconName: string;
}
