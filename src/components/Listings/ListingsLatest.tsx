import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { Listing } from '../../types/listing';
import { Icon } from '@iconify/react';
import { getRelativeTime } from '../../utils/time';

const ListingsLatest: React.FC = () => {
    const [listings, setListings] = useState<any>([]);
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
                .select(`
                    id,
                    title,
                    category,
                    created_at,
                    level,
                    location,
                    setting,
                    rate,
                    min_wage,
                    max_wage,
                    contract,
                    company_id,
                    profiles:profiles(id, username, avatar_url)
                `)
                .order('created_at', { ascending: false })
                .range(0, 9)
                console.log("Fetched Data:", data)

            if (error) {
                console.log(error)
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
                    setting: item.setting,
                    rate: item.rate,
                    min_wage: item.min_wage,
                    max_wage: item.max_wage,
                    contract: item.contract,
                    company_id: item.company_id,
                    username: item.profiles?.username || '',
                    avatar_url: item.profiles?.avatar_url || ''
                }));
                setListings(transformedData);
                console.log('Listings Data: ', transformedData);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
                listings.map((listing:Partial<Listing>) => {
                    const {title, username, min_wage, max_wage, level, location, setting, rate, contract, created_at} = listing
                    const createdAt = created_at ? new Date(created_at) : null;
                    const relativeTime = createdAt ? getRelativeTime(createdAt) : '';
                return (
                    <Link to={`/jobs/${listing.id}`} key={listing.id}>
                        <div className="rounded-xl border bg-transparent p-10 font-mono hover:border-primary flex flex-col gap-4">
                            <div id="group-row" className="flex flex-col md:flex-row gap-5 uppercase">
                                <img className="rounded" src={`${import.meta.env.VITE_SUPABASE_STORAGE}${listing.avatar_url}`} width={50} height={50} />
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
