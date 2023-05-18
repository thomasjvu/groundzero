import { Listing } from '../types/listing';
import { supabase } from '../supabaseClient';

export const fetchListing = async (id: string): Promise<Listing | null> => {
    const { data, error } = await supabase.from('listings').select().eq('id', id).single();

    if (error) {
        throw error;
    }

    if (data) {
        // Map the returned data to the Listing type
        const listing: Listing = {
            id: data.id,
            title: data.title,
            content: data.content,
            category: data.category,
            created_at: data.created_at,
            level: data.level,
            contract: data.contract,
            location: data.location,
            setting: data.setting,
            rate: data.rate,
            min_wage: data.min_wage,
            max_wage: data.max_wage,
            link: data.link,
            terms: data.terms,
            profiles: data.profiles,
            tags: data.tags
        };

        console.log('Listing Data: ', listing);
        return listing;
    }

    return null;
};
