import { useState, useEffect } from 'react';
import { Listing } from '../../types/listing';
import { fetchListingsAll } from '../../helpers/fetchListingsAll';
import ListingCard from './ListingCard';

type QueryOption = 'date-asc' | 'date-dsc'; // define the possible query options

const ListingsAll: React.FC = (): JSX.Element => {
    const [listings, setListings] = useState<Listing[]>([]); // specify the type of listings
    const [queryOption, setQueryOption] = useState<QueryOption>('date-dsc');

    // trigger a fetch whenever the query option changes
    useEffect(() => {
        fetchListings();
    }, [queryOption]);

    const fetchListings = async () => {
        try {
            const data = await fetchListingsAll(queryOption);
            setListings(data);
        } catch (error: any) {
            throw error;
        }
    };

    const handleQueryOptionChange = (option: QueryOption) => {
        setQueryOption(option);
    };

    return (
        <div className="latest-listings flex w-full flex-col gap-5">
            <div id="query-selector-group" className="flex items-center justify-end gap-5 font-mono">
                <label htmlFor="query-option">Sort by:</label>
                <select
                    id="query-option"
                    className="select-bordered select"
                    onChange={(e) => handleQueryOptionChange(e.target.value as QueryOption)}>
                    <option value="date-dsc">Date ↓</option>
                    <option value="date-asc">Date ↑</option>
                </select>
            </div>
            {listings.map((listing: Partial<Listing>) => (
                <ListingCard listing={listing} key={listing.id} />
            ))}
        </div>
    );
};

export default ListingsAll;
