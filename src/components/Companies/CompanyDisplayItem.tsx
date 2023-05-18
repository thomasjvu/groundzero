import { CompanyDisplayItemProps } from "../../types/company"

const CompanyDisplayItem: React.FC<CompanyDisplayItemProps> = ({imageAlt, imageSrc}): JSX.Element => {
    return (
        <div className="flex items-center">
            <img src={imageSrc} alt={imageAlt} width={125} height={125} className="rounded grayscale hover:grayscale-0"/>
        </div>
    )
}


export default CompanyDisplayItem
