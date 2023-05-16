type Props = {
    src: string;
    alt: string;
}

const DisplayCompanyItem: React.FC<Props> = ({alt, src}) => {
    return (
        <div className="flex items-center">
            <img src={src} alt={alt} width="100" height="100" className="rounded grayscale hover:grayscale-0"/>
        </div>
    )
}


export default DisplayCompanyItem
