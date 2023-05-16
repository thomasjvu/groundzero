import DisplayCompanyItem from "./DisplayCompanyItem"

interface CompanyDisplayInfo {
    name: string
    image: string
    alt: string
}

const displayCompaniesList: CompanyDisplayInfo[] = [
    {
        name: "Nintendo",
        image: "https://res.cloudinary.com/dlcz9y0nv/image/upload/v1684197022/gzo/gaming%20companies/Nintendo_Icon_auylsm.png",
        alt: "Nintendo Logo"
    },
    {
        name: "Sony PlayStation",
        image: "https://res.cloudinary.com/dlcz9y0nv/image/upload/v1684197173/gzo/gaming%20companies/PlayStation_Icon_gzsjaq.png",
        alt: "PlayStation Logo"
    },
    {
        name: "Microsoft Xbox",
        image: "https://res.cloudinary.com/dlcz9y0nv/image/upload/v1684197021/gzo/gaming%20companies/Xbox_Icon_gvimws.png",
        alt: "Microsoft Logo"
    },
    {
        name: "Rockstar",
        image: "https://res.cloudinary.com/dlcz9y0nv/image/upload/v1684197293/gzo/gaming%20companies/Rockstar_Icon_s2d9mz.png",
        alt: "Rockstar Logo"
    },
    {
        name: "Electronic Arts",
        image: "https://res.cloudinary.com/dlcz9y0nv/image/upload/v1684197510/gzo/gaming%20companies/EA_Icon_xvnge1.png",
        alt: "EA Logo"
    },
    {
        name: "Nexon",
        image: "https://res.cloudinary.com/dlcz9y0nv/image/upload/v1684195545/gzo/gaming%20companies/Nexon_Icon_tnj7du.jpg",
        alt: "Nexon Logo"
    }
]

const DisplayCompanies: React.FC = () => {
    return (
        <section className="companies-grid-section">
            <h3 className="text-4xl font-display">Companies</h3>
            <p className="font-mono py-5 italic">We have listings from some of the biggest gaming-related companies in the world.</p>
            <div className="companies-grid flex justify-between gap-10">
                {displayCompaniesList.map((displayCompany) => (
                    <DisplayCompanyItem src={displayCompany.image} alt={displayCompany.alt} key={displayCompany.name} />
                ))}
            </div>
        </section>
    )
}

export default DisplayCompanies
