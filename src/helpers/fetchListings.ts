import { supabase } from "../supabaseClient";
import { Listing } from "../types/listing";
import { ListingsInput } from "../types/listing";

export async function fetchListings({setListings, setIsLoading, setError}: ListingsInput): Promise<void> {
    try {
        const { data, error } = await supabase
            .from('listings')
            .select(
                `
                    id,
                    title,
                    category,
                    created_at,
                    level,
                    location,
                    setting,
                    rate,
                    min_wage,
                    max_wage,
                    contract,
                    company_id,
                    profiles:profiles(id, username, avatar_url, website, currency)
                `
            )
            .order('created_at', { ascending: false })
            .range(0, 9);
        console.log('Fetched Data:', data);

        if (error) {
            console.log(error);
            throw new Error('Error fetching listings');
        }

        if (data) {
            const transformedData: Omit<Listing, "tags" | "terms">[] = data.map((item) => ({
                id: item.id,
                title: item.title,
                category: item.category,
                created_at: item.created_at,
                level: item.level,
                location: item.location,
                setting: item.setting,
                rate: item.rate,
                min_wage: item.min_wage,
                max_wage: item.max_wage,
                contract: item.contract,
                company_id: item.company_id,
                profiles: item?.profiles
            })
            );
            setListings(transformedData);
            console.log('Listings Data: ', transformedData);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        setError(error.message);
    } finally {
        setIsLoading(false);
    }
}
