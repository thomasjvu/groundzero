type Props = {
    src: string;
    alt: string;
}

const GridItem: React.FC<Props> = ({alt, src}) => {
    return (
        <div className="grid-item">
            <img src={src} alt={alt} />
        </div>
    )
}


export default GridItem
