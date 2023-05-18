import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Profile } from '../../types/profile';
import { Listing } from '../../types/listing';
import ListingCard from '../Listings/ListingCard';

import IconWebsite from '../Icons/IconWebsite';
import IconTwitter from '../Icons/IconTwitter';
import IconLinkedin from '../Icons/IconLinkedin';

import { fetchCompany } from '../../helpers/fetchCompany';
import { fetchCompanyListings } from '../../helpers/fetchCompanyListings';

const CompanyDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [company, setCompany] = useState<Profile | null>(null);

    const [listings, setListings] = useState<Listing[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [page, setPage] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(true);

    useEffect(() => {
        fetchCompany(id, setCompany);
        fetchCompanyListings({
            id,
            page,
            setHasMore,
            setListings,
            setIsLoading,
            setError
        })
    }, [id, page]);

    const handleLoadMore = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setPage((prevPage) => prevPage + 1)
    }

    if (!company) {
        return <div>Loading Company...</div>;
    }

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    return (
        <div id="company-details" className="flex flex-col gap-5">
            <section id="company-header" className="flex flex-col items-center justify-center gap-5">
                <img
                    src={`${import.meta.env.VITE_SUPABASE_STORAGE}${company.avatar_url}`}
                    width={100}
                    height={100}
                    className="rounded"
                />
                <h2 className="font-display text-4xl md:text-6xl">{company.username}</h2>
            </section>
            <section id="company-social-links" className="flex justify-end gap-5">
                {company.twitter && <IconTwitter url={company.twitter} width={20} height={20} />}
                {company.linkedin && <IconLinkedin url={company.linkedin} width={20} height={20} />}
                {company.website && <IconWebsite url={company.website} width={20} height={20} />}
            </section>
            <section id="company-description" className="flex flex-col justify-start">
                <h2 className="font-display text-2xl md:text-4xl">About</h2>
                <p className="font-mono">{company.description}</p>
            </section>
            <section id="company-listings" className="company-listings flex w-full flex-col gap-5">
                {listings.map((listing: Partial<Listing>) => (
                    <ListingCard listing={listing} key={listing.id} />
                ))}
            </section>
            {!isLoading && hasMore && (
                <button className='btn btn-primary font-mono text-lg' onClick={handleLoadMore}>Load More</button>
            )}
            {error && <div className="text-red-500">Error: {error}</div>}
        </div>
    );
}

export default CompanyDetails;
