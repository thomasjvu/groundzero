// import { Category } from "./category";
// import { Rate } from "./rate";
// import { Setting } from "./setting";
// import { Level } from "./level";
// import { Contract } from "./contract";
// import { Location } from "./location";

export interface Listing {
    id: string;
    title: string;
    category?: string;
    created_at: string;
    level?: string;
    contract?: string;
    location?: string;
    setting?: string;
    rate?: string;
    min_wage?: number;
    max_wage?: number;
    company_id?: string;
    avatar_url?: string;
    username?: string;
    tags?: string[];
}
