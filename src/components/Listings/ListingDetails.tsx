import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFriendlyDate } from '../../utils/time.js';
import ButtonCopyUrl from '../Buttons/ButtonCopyUrl.tsx';
import ButtonShareUrl from '../Buttons/ButtonShareUrl.tsx';
import { fetchListing } from '../../helpers/fetchListing.ts';
import { Listing } from '../../types/listing.ts';
import { lineBreakContent } from '../../utils/stringUtils.ts';

const ListingDetails: React.FC = (): JSX.Element => {
    const { id } = useParams<{ id: string }>();
    const [ listing, setListing ] = useState<Listing | null>(null);

    useEffect(() => {
        if (id) {
            fetchListing(id)
            .then((data) => setListing(data))
            .catch((error) => console.error(error))
        }
    }, []);


    if (!listing) {
        return <div>Loading...</div>;
    }

    const contentWithLineBreaks = lineBreakContent(listing.content)


    return (
        <div id="listing-details" className="w-full flex flex-col gap-10">
            <section className="flex w-full flex-col items-center justify-center font-mono gap-2">
                <h1 className="text-4xl">{listing.title}</h1>
                <div id="listing-details-primary" className="flex gap-5">
                    <span>{listing.contract}</span>
                    <span>{listing.location}</span>
                    <span>{listing.setting}</span>
                </div>
                <div id="listing-details-secondary" className="flex gap-5">
                    <span>{getFriendlyDate(listing.created_at)}</span>
                </div>
                <div id="listing-details-buttons" className="flex gap-5 justify-end items-end">
                    <ButtonCopyUrl />
                    <ButtonShareUrl />
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
