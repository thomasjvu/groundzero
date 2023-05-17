import { useState, useEffect } from 'react';
import { Listing } from '../../types/listing';
import { fetchListings } from '../../helpers/fetchListings';
import ListingCard from './ListingCard';

const ListingsLatest: React.FC = () => {
    const [listings, setListings] = useState<Listing[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // trigger a fetch of listings when the component mounts
    useEffect(() => {
        fetchListings({setListings, setIsLoading, setError})
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
