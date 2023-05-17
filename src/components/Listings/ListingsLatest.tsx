// import { Link } from 'react-router-dom';
import { useState, useEffect, SetStateAction } from 'react';
import { Listing } from '../../types/listing';
// import { Icon } from '@iconify/react';
// import { getRelativeTime } from '../../utils/time';
import { fetchListings } from '../../helpers/fetchListings';
import { Dispatch } from 'react';
import ListingCard from './ListingCard';

const ListingsLatest: React.FC = () => {
    const [listings, setListings] = useState<Listing[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    type ListingsInput = {
        setListings: Dispatch<SetStateAction<Listing[]>>
        setIsLoading: Dispatch<SetStateAction<boolean>>
        setError: Dispatch<SetStateAction<string | null>>
    }

    // trigger a fetch when the component mounts
    useEffect(() => {
        const listingsInput: ListingsInput = {
            setListings,
            setIsLoading,
            setError
        }
        async function handleFetchListings(listingsInput: ListingsInput) {
            await fetchListings(listingsInput)
        }

        handleFetchListings(listingsInput)
    }, []);

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
            {listings.map((listing: Partial<Listing>) => (
                <ListingCard listing={listing} key={listing.id} />
            ))}
        </div>
    );
};

export default ListingsLatest;
