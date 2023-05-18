import CompanyDisplayItem from "./CompanyDisplayItem"
import { companiesDisplayList } from "../../types/company"

const CompaniesDisplay: React.FC = (): JSX.Element => {
    return (
        <section className="companies-grid-section">
            <h3 className="text-4xl font-display">Companies</h3>
            <p className="font-mono py-5 italic">We have listings from some of the biggest gaming-related companies in the world.</p>
            <div className="companies-grid flex justify-between gap-5 lg:gap-10">
                {companiesDisplayList.map((companyDisplay) => (
                    <CompanyDisplayItem imageSrc={companyDisplay.imageSrc} imageAlt={companyDisplay.imageAlt} key={companyDisplay.name} />
                ))}
            </div>
        </section>
    )
}

export default CompaniesDisplay
