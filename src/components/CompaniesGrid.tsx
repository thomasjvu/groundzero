import GridItem from "./GridItem"

interface CompaniesHelped {
    name: string
    image: string
    alt: string
}

const companiesHelpedList: CompaniesHelped[] = [
    { 
      name: "Nintendo",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/1024px-Nintendo.svg.png",
      alt: "Nintendo Logo"
    },
    { 
      name: "Nintendo",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/1024px-Nintendo.svg.png", 
      alt: "Nintendo Logo"
    },
    { 
      name: "Nintendo",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/1024px-Nintendo.svg.png",
      alt: "Nintendo Logo"
    },
    { 
      name: "Nintendo",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/1024px-Nintendo.svg.png", 
      alt: "Nintendo Logo"
    },
]

const CompaniesGrid: React.FC = () => {
    return (
        <section>
            <h3 className="text-4xl font-display">Companies</h3>        
            <p className="font-mono py-5">We're helping some of the biggest companies in the world with their hiring.</p>
            <div className="companies-grid grid grid-cols-6 grid-rows-2 gap-10">
                {companiesHelpedList.map((companyHelped) => (
                    <GridItem src={companyHelped.image} alt={companyHelped.alt} key={companyHelped.name}/>
                ))}
            </div>
        </section>
    )
}

export default CompaniesGrid
