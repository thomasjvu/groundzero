// import { Category } from "./category";
// import { Rate } from "./rate";
// import { Setting } from "./setting";
// import { Level } from "./level";
// import { Contract } from "./contract";
// import { Location } from "./location";
// import { Profile } from "./profile";

export interface Listing {
    id: string;
    title: string;
    // category?: Category;
    category?: string;
    created_at: string;
    // level?: Level;
    level?: string;
    // contract?: Contract;
    contract?: string;
    // location?: Location;
    location?: string;
    // setting?: Setting;
    setting?: string;
    // rate?: Rate;
    rate?: string;
    min_wage?: number;
    max_wage?: number;
    company_id?: string;
    tags?: string[];
    avatar_url?: string;
    username?: string;
}
