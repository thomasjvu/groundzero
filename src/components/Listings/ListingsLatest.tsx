import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { Listing } from '../../types/listing';

const ListingsLatest: React.FC = () => {
    const [listings, setListings] = useState<Listing[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // trigger a fetch when the component mounts
    useEffect(() => {
        fetchListings();
    }, []);

    // get the latest listings
    async function fetchListings(): Promise<void> {
        try {
            const { data, error } = await supabase
                .from('listings')
                .select()
                .order('created_at', { ascending: false })
                .range(0, 9);

            if (error) {
                throw new Error('Error fetching listings');
            }

            if (data) {
                const transformedData = data.map((item: any) => ({
                    id: item.id,
                    title: item.title,
                    category: item.category,
                    created_at: item.created_at,
                    level: item.level,
                    location: item.location,
                    salary_min: item.salary_min,
                    salary_max: item.salary_max,
                    contract: item.contract,
                    setting: item.setting
                }));
                setListings(transformedData);
                console.log('Listings Data: ', transformedData);
            }
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }

    }

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    if (error) {
        return <div className='text-red-500'>Error: {error}</div>
    }

    return (
        <div className="latest-listings flex w-full flex-col gap-5">
            {listings &&
                listings.map((listing: Partial<Listing>) => (
                    <Link to={`/jobs/${listing.id}`} key={listing.id}>
                        <div className="rounded-xl border bg-transparent p-10">
                            <h3 className="font-mono text-xl font-bold">{listing.title}</h3>
                            {/* <h3 className="font-mono text-xl">{listing.content}</h3> */}
                            <h4 className="font-mono text-xl">{listing.category}</h4>
                            {/* <h6>{listing.company}</h6> */}
                        </div>
                    </Link>
                ))}
        </div>
    );
};

export default ListingsLatest;
