import { Link } from 'react-router-dom';
import { useState, useEffect, SetStateAction } from 'react';
import { Listing } from '../../types/listing';
import { Icon } from '@iconify/react';
import { getRelativeTime } from '../../utils/time';
import { fetchListings } from '../../helpers/fetchListings';
import { Dispatch } from 'react';

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
            {listings &&
                listings.map((listing:Partial<Listing>) => {
                    const {title, min_wage, max_wage, level, location, setting, rate, contract, created_at, profiles} = listing
                    const username = Array.isArray(profiles) ? profiles[0]?.username : profiles?.username
                    const avatar_url = Array.isArray(profiles) ? profiles[0]?.avatar_url: profiles?.avatar_url
                    console.log("Level", level)
                    const createdAt = created_at ? new Date(created_at) : null;
                    const relativeTime = createdAt ? getRelativeTime(createdAt) : '';
                return (
                    <Link to={`/jobs/${listing.id}`} key={listing.id}>
                        <div className="rounded-xl border bg-transparent p-10 font-mono hover:border-primary flex flex-col gap-4">
                            <div id="group-row" className="flex flex-col md:flex-row gap-5 uppercase">
                                <img className="rounded" src={`${import.meta.env.VITE_SUPABASE_STORAGE}${avatar_url}`} width={50} height={50} />
                                <div>
                                    <h3 className="text-xl font-bold">{title}</h3>
                                    <p className="font-mono text-sm">{username}</p>
                                </div>
                            </div>
                            <div id="group-row" className="flex flex-col md:flex-row gap-5 uppercase">
                                <div id="group-level" className='flex items-center gap-1'>
                                    <Icon icon="jam:crown-f" width={15} height={15}/>
                                    <span className="text-sm">{level}</span>
                                </div>
                                <div id="group-location" className='flex items-center gap-1'>
                                    <Icon icon="jam:gps-f" width={15} height={15}/>
                                    <span className="text-sm">{location}</span>
                                </div>
                                <div id="group-location" className='flex items-center gap-1'>
                                    <Icon icon="jam:newspaper-f" width={15} height={15}/>
                                    <span className="text-sm">{setting}</span>
                                </div>
                            </div>
                            {listing.min_wage && listing.max_wage && listing.rate &&
                                <div id="group-row" className="hidden md:flex flex-col md:flex-row gap-5 uppercase">
                                    <div id="group-salary" className='flex items-center gap-1'>
                                        <Icon icon="jam:coin-f" width={15} height={15}/>
                                        <span className="text-sm">${min_wage} - </span>
                                        <span className="text-sm">${max_wage}</span>
                                        <span className="text-sm">({rate})</span>
                                    </div>
                                    <div id="group-contract" className='flex items-center gap-1'>
                                        <Icon icon="jam:newspaper-f" width={15} height={15}/>
                                        <span className="text-sm">{contract}</span>
                                    </div>
                                </div>
                            }
                            <div id="group-row" className="hidden md:flex flex-col md:flex-row gap-5 uppercase">
                                <div id="group-calendar" className='flex items-center gap-1'>
                                    <Icon icon="jam:calendar-alt-f" width={15} height={15}/>
                                    <span className="text-sm">{relativeTime}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
                })}
        </div>
    );
};

export default ListingsLatest;
