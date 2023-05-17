import { Dispatch } from "react";
import { SetStateAction } from "react";

import { Category } from "./category";
import { Rate } from "./rate";
import { Setting } from "./setting";
import { Level } from "./level";
import { Contract } from "./contract";
import { Location } from "./location";
import { Profile } from "./profile";

export interface Listing {
    id: string;
    title: string;
    category?: Category;
    created_at: string;
    level?: Level;
    contract?: Contract;
    location?: Location;
    setting?: Setting;
    rate?: Rate;
    min_wage?: number;
    max_wage?: number;
    terms?: boolean;
    profiles?: Profile | Profile[] | null;
    tags?: string[];
}

export type ListingsInput = {
    setListings: Dispatch<SetStateAction<Listing[]>>
    setIsLoading: Dispatch<SetStateAction<boolean>>
    setError: Dispatch<SetStateAction<string | null>>
}
