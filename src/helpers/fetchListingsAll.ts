import { supabase } from '../supabaseClient';
import { Listing } from '../types/listing';

type QueryOption = 'date-asc' | 'date-dsc';

export const fetchListingsAll = async (queryOption: QueryOption): Promise<Listing[]> => {
    try {
        let data;
        if (queryOption === 'date-asc') {
            const { data: ascData, error } = await supabase
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
                    link,
                    min_wage,
                    max_wage,
                    contract,
                    company_id,
                    profiles:profiles(id, username, avatar_url, website, currency)
                `
                )
                .order('created_at', { ascending: true })
                .range(0, 9);

            if (error) {
                throw new Error('Error fetching listings');
            }

            data = ascData;
        } else if (queryOption === 'date-dsc') {
            const { data: descData, error } = await supabase
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
                    link,
                    min_wage,
                    max_wage,
                    contract,
                    company_id,
                    profiles:profiles(id, username, avatar_url, website, currency)
                `
                )
                .order('created_at', { ascending: false })
                .range(0, 9);

            if (error) {
                throw new Error('Error fetching listings');
            }

            data = descData;
        }

        if (data) {
            const transformedData = data.map((item: any) => ({
                id: item.id,
                title: item.title,
                category: item.category,
                content: item.content,
                created_at: item.created_at,
                level: item.level,
                location: item.location,
                salary_min: item.salary_min,
                salary_max: item.salary_max,
                contract: item.contract,
                link: item.link,
                setting: item.setting,
                profiles: item?.profiles
            }));
            return transformedData;
        } else {
            throw new Error('No data received');
        }
    } catch (error) {
        throw error;
    }
};
