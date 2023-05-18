import { supabase } from "../supabaseClient";
import { StarredListingsInput } from "../types/listing";

export const fetchStarredListings = async ({setStarredListings, setIsLoading, setError}: StarredListingsInput): Promise<void> => {

    try {

        setIsLoading(true)

        const { data: starredListings, error } = await supabase
            .from('profiles')
            .select('starred_listings')
            .order('updated_at', { ascending: false})

        if (error) {
            console.error(error)
        }

        if (starredListings) {
            setStarredListings(starredListings)
            console.log("starred listings", starredListings)
        }

    } catch (error: any) {
        setError(error.message)
        // console.error(error)
    } finally {
        setIsLoading(false)
    }
}
