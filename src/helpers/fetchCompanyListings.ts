import { supabase } from "../supabaseClient";
import { Listing } from "../types/listing";
import { ListingsInputInfinite } from "../types/listing";

export async function fetchCompanyListings({id, page, setListings, setIsLoading, setError, setHasMore}: ListingsInputInfinite): Promise<void> {

    try {

        setIsLoading(true)

        const { data, error } = await supabase
            .from('listings')
            .select(
                `
                    id,
                    title,
                    category,
                    content,
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
            .eq('company_id', id)
            .range(page * 5, (page + 1) * 5 - 1)
        console.log('Fetched Data:', data);

        if (error) {
            console.log(error);
            throw new Error('Error fetching listings');
        }

        if (data) {
            const transformedData: Omit<Listing, "tags" | "terms" | "content">[] = data.map((item) => ({
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

            // Clear the listings state if it's the first page
            if (page === 0) {
                setListings(transformedData)
            } else {
                setListings((prevListings) => [...prevListings, ...transformedData]);
            }

            // console.log('Listings Data: ', transformedData); // check data

            if (data.length < 5) {
                setHasMore(false)
            }
        }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        setError(error.message);
    } finally {
        setIsLoading(false);
    }
}
