import { Profile } from "./profile";

export interface Company {
    id: string;
}

export interface UpdatedCompany extends Company {
    profile: Profile
}
