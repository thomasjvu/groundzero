import { Profile } from "./profile";

export interface Company {
    id: string;
}

export interface UpdatedCompany extends Company {
    profile: Profile
}

export interface CompanyDisplayItemProps {
    imageAlt: string;
    imageSrc: string;
}

export interface CompanyDisplayInfo {
    name: string
    imageAlt: string
    imageSrc: string
}

export const companiesDisplayList: CompanyDisplayInfo[] = [
    {
        name: "Nintendo",
        imageSrc: "https://res.cloudinary.com/dlcz9y0nv/image/upload/v1684197022/gzo/gaming%20companies/Nintendo_Icon_auylsm.png",
        imageAlt: "Nintendo Logo"
    },
    {
        name: "Sony PlayStation",
        imageSrc: "https://res.cloudinary.com/dlcz9y0nv/image/upload/v1684197173/gzo/gaming%20companies/PlayStation_Icon_gzsjaq.png",
        imageAlt: "PlayStation Logo"
    },
    {
        name: "Microsoft Xbox",
        imageSrc: "https://res.cloudinary.com/dlcz9y0nv/image/upload/v1684197021/gzo/gaming%20companies/Xbox_Icon_gvimws.png",
        imageAlt: "Microsoft Logo"
    },
    {
        name: "Rockstar",
        imageSrc: "https://res.cloudinary.com/dlcz9y0nv/image/upload/v1684197293/gzo/gaming%20companies/Rockstar_Icon_s2d9mz.png",
        imageAlt: "Rockstar Logo"
    },
    {
        name: "Electronic Arts",
        imageSrc: "https://res.cloudinary.com/dlcz9y0nv/image/upload/v1684197510/gzo/gaming%20companies/EA_Icon_xvnge1.png",
        imageAlt: "EA Logo"
    },
    {
        name: "Nexon",
        imageSrc: "https://res.cloudinary.com/dlcz9y0nv/image/upload/v1684195545/gzo/gaming%20companies/Nexon_Icon_tnj7du.jpg",
        imageAlt: "Nexon Logo"
    }
]
