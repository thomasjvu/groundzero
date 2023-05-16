import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { Listing } from '../../types/listing';

type QueryOption = 'date-asc' | 'date-dsc'; // define the possible query options

const ListingsAll: React.FC = () => {
    const [listings, setListings] = useState<Listing[]>([]); // specify the type of listings
    const [queryOption, setQueryOption] = useState<QueryOption>('date-dsc');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // trigger a fetch whenever the query option changes
    useEffect(() => {
        fetchListings();
    }, [queryOption]);

    // fetch the top 10 listings depending on the query
    const fetchListings = async () => {
        try {
            if (queryOption === 'date-asc') {
                let { data, error } = await supabase
                    .from('listings')
                    .select()
                    .order('created_at', { ascending: true })
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
            } else if (queryOption === 'date-dsc') {
                let { data, error } = await supabase
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
            }
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleQueryOptionChange = (option: QueryOption) => {
        setQueryOption(option);
    };

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    if (error) {
        return (
            <div className='text-red-500'>Error: {error}</div>
        )
    }

    return (
        <div className="latest-listings flex w-full flex-col gap-5">
            <div id="query-selector-group" className="flex items-center justify-end gap-5 font-mono">
                <label htmlFor="query-option">Sort by:</label>
                <select
                    id="query-option"
                    className="select-bordered select"
                    onChange={(e) => handleQueryOptionChange(e.target.value as QueryOption)}>
                    <option value="date-dsc">Date (Dsc)</option>
                    <option value="date-asc">Date (Asc)</option>
                    <option value="relevance">Relevance</option>
                </select>
            </div>
            {listings.map((listing) => (
                <Link to={`/jobs/${listing.id}`} key={listing.id}>
                    <div className="rounded-xl border bg-transparent p-10">
                        <h3 className="font-mono text-xl font-bold">{listing.title}</h3>
                        <h4 className="font-mono text-xl">{listing.category}</h4>
                        {/* <h6>{listing.company}</h6> */}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ListingsAll;
