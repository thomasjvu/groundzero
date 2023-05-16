export interface Listing {
    id: string;
    title: string;
    category?: string;
    created_at: string;
    level?: string;
    location?: string;
    salary_min?: number;
    salary_max?: number;
    contract?: string;
    setting?: string;
    company_id?: string;
}
