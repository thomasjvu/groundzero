import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { Listing } from '../../types/listing';

type QueryOption = 'date-asc' | 'date-dsc'; // define the possible query options

const ListingsAll: React.FC = () => {
    const [listings, setListings] = useState<Listing[]>([]); // specify the type of listings
    const [queryOption, setQueryOption] = useState<QueryOption>('date-dsc');

    useEffect(() => {
        fetchListings();
    }, [queryOption]); // trigger a fetch whenever the query option changes

    const fetchListings = async () => {
        try {
            if (queryOption === 'date-asc') {
                let { data, error } = await supabase
                    .from('listings')
                    .select()
                    .order('created_at', { ascending: true })
                    .range(0, 9)

                if (error) {
                    throw error;
                }
                if (data) {
                    setListings(data);
                    console.log('Listings Data: ', data);
                }
            } else if (queryOption === 'date-dsc') {
                let { data, error } = await supabase
                    .from('listings')
                    .select()
                    .order('created_at', { ascending: false })
                    .range(0, 9)

                if (error) {
                    throw error;
                }
                if (data) {
                    setListings(data);
                    console.log('Listings Data: ', data);
                }
            }
        } catch (error) {
            console.error('error fetching listings: ', error);
        }
    };

    const handleQueryOptionChange = (option: QueryOption) => {
        setQueryOption(option);
    };

    return (
        <div className="latest-listings flex w-full flex-col gap-5">
            <div id="query-selector-group" className='flex gap-5 items-center justify-end font-mono'>
                <label htmlFor="query-option">Sort by:</label>
                <select id="query-option" className="select select-bordered" onChange={(e) => handleQueryOptionChange(e.target.value as QueryOption)}>
                    <option value="date-asc">Date (Asc)</option>
                    <option value="date-dsc">Date (Desc)</option>
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
