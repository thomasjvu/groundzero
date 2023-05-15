import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { getFriendlyDate } from '../utils/time.js';
import { Icon } from '@iconify/react';
import ButtonCopyUrl from './Buttons/ButtonCopyUrl.tsx';
import ButtonShareUrl from './Buttons/ButtonShareUrl.tsx';

const ListingDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [listing, setListing] = useState<any>(null);

    useEffect(() => {
        fetchListing();
    }, []);

    async function fetchListing() {
        const { data } = await supabase.from('listings').select().eq('id', id).single();
        setListing(data);
        console.log('Listing Data: ', data);
    }

    if (!listing) {
        return <div>Loading...</div>;
    }

    const contentWithLineBreaks = listing.content.replace(/\n/g, '<br>');

    return (
        <div id="listing-details" className="w-full flex flex-col gap-10">
            <section className="flex w-full flex-col items-center justify-center font-mono">
                <h1 className="text-4xl">{listing.title}</h1>
                <div id="listing-details-primary" className="flex gap-5">
                    <span>{listing.contract}</span>
                    <span>{listing.location}</span>
                    <span>{listing.setting}</span>
                </div>
                <div id="listing-details-buttons" className="flex gap-5">
                    <ButtonCopyUrl />
                    <ButtonShareUrl />
                    <div id="listing-details-button-group" className="btn flex items-center gap-2">
                        <Icon icon="pixelarticons:section-copy" />
                        <span>Save</span>
                    </div>
                    <div id="listing-details-button-group" className="btn flex items-center gap-2">
                        <Icon icon="pixelarticons:section-copy" />
                        <span>Share</span>
                    </div>
                    <div id="listing-details-button-group" className="btn flex items-center gap-2">
                        <Icon icon="pixelarticons:section-copy" />
                        <span>Report</span>
                    </div>
                </div>
                <div id="listing-details-secondary" className="flex gap-5">
                    <span>{getFriendlyDate(listing.created_at)}</span>
                </div>
            </section>
            <section id="listing-details-content" className="flex items-center justify-center">
                <div className="w-2/4">
                    <h2 className="font-display text-4xl uppercase">Job Description</h2>
                    <div className="font-mono" dangerouslySetInnerHTML={{__html: contentWithLineBreaks}}></div>
                    <a className='btn w-full' href="" target='_blank'>Apply</a>
                </div>
            </section>
        </div>
    );
};

export default ListingDetails;
