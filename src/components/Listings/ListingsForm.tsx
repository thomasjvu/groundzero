import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { Session } from '@supabase/supabase-js';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

import { categoryList } from '../../types/category';
import { locationList } from '../../types/location';
import { settingList } from '../../types/setting';
import { contractList } from '../../types/contract';
import { levelList } from '../../types/level';
import { rateList } from '../../types/rate';
import { capitalizeFirstLetter } from '../../utils/stringUtils';

const ListingsForm: React.FC = () => {

    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

    }, []);

    const [listing, setListing] = useState({
        title: '',
        content: '',
        category: '',
        location: '',
        contract: '',
        setting: '',
        level: '',
        rate: '',
        min_wage: 0,
        max_wage: 0,
        link: '',
        company_id: null as string | null,
        terms: false
    });

    const { title, content, category, location, contract, setting, level, rate, min_wage, max_wage, link, terms } = listing;


    async function createListing() {
        if (!terms || !title || !content || !link) return;

        try {
            await supabase
                .from('listings')
                .insert([{ title, content, category, location, contract, setting, level, rate, min_wage, max_wage, link, company_id: session?.user.id, terms }])
                .single();
            setListing({
                title: '',
                content: '',
                category: '',
                location: '',
                contract: '',
                setting: '',
                level: '',
                rate: '',
                min_wage: 0,
                max_wage: 0,
                link: '',
                company_id: session?.user.id || null,
                terms: false
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {session && session.user.user_metadata.company === true && (
                <form
                    className="new-listing-form flex flex-col gap-5"
                    onSubmit={(e) => {
                        e.preventDefault();
                        createListing();
                    }}>
                    <div className="formGroup flex flex-col gap-2">
                        <label htmlFor="listing-title">Title</label>
                        <input
                            id="listing-title"
                            className="input-bordered input w-full font-mono"
                            type='text'
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setListing({ ...listing, title: e.target.value })}
                            required={true}
                        />
                    </div>
                    <div className="formGroup flex flex-col gap-2">
                        <label htmlFor="listing-content">Content</label>
                        <ReactQuill
                            id="listing-content-quill"
                            placeholder="Job description content goes here..."
                            value={content}
                            theme="bubble"
                            onChange={(e) => setListing({ ...listing, content: e })}
                        />
                    </div>
                    <div className="formGroup flex flex-col gap-2">
                        <label htmlFor="listing-category">Category</label>
                        <select
                            id="listing-category"
                            className="input-bordered input w-full font-mono"
                            value={category}
                            onChange={(e) => setListing({ ...listing, category: e.target.value })}
                            required={true}>
                            <option value="">Select Category...</option>
                            {categoryList.map((cat) => (
                                <option key={cat} value={cat}>
                                    {capitalizeFirstLetter(cat)}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="formGroup flex flex-col gap-2">
                        <label htmlFor="listing-location">Location</label>
                        <select
                            id="listing-location"
                            className="input-bordered input w-full font-mono"
                            value={location}
                            onChange={(e) => setListing({ ...listing, location: e.target.value })}>
                            <option value="">Select Location...</option>
                            {locationList.map((loc) => (
                                <option key={loc} value={loc}>
                                    {capitalizeFirstLetter(loc)}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="formGroup flex flex-col gap-2">
                        <label htmlFor="listing-contract">Contract</label>
                        <select
                            id="listing-contract"
                            className="input-bordered input w-full font-mono"
                            value={contract}
                            onChange={(e) => setListing({ ...listing, contract: e.target.value })}>
                            <option value="">Select Contract...</option>
                            {contractList.map((contract) => (
                                <option key={contract} value={contract}>
                                    {capitalizeFirstLetter(contract)}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="formGroup flex flex-col gap-2">
                        <label htmlFor="listing-level">Level</label>
                        <select
                            id="listing-contract"
                            className="input-bordered input w-full font-mono"
                            value={level}
                            onChange={(e) => setListing({ ...listing, level: e.target.value })}>
                            <option value="">Select Level...</option>
                            {levelList.map((level) => (
                                <option key={level} value={level}>
                                    {capitalizeFirstLetter(level)}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="formGroup flex flex-col gap-2">
                        <label htmlFor="listing-setting">Setting</label>
                        <select
                            id="listing-setting"
                            className="input-bordered input w-full font-mono"
                            value={setting}
                            onChange={(e) => setListing({ ...listing, setting: e.target.value })}>
                            <option value="">Select Setting...</option>
                            {settingList.map((setting) => (
                                <option key={setting} value={setting}>
                                    {capitalizeFirstLetter(setting)}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="formGroup flex flex-col gap-2">
                        <label htmlFor="listing-setting">Rate</label>
                        <select
                            id="listing-setting"
                            className="input-bordered input w-full font-mono"
                            value={rate}
                            onChange={(e) => setListing({ ...listing, rate: e.target.value })}>
                            <option value="">Select Rate...</option>
                            {rateList.map((rate) => (
                                <option key={rate} value={rate}>
                                    {capitalizeFirstLetter(rate)}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="formGroup flex flex-col gap-2">
                        <label htmlFor="listing-title">Minimum Wage</label>
                        <input
                            id="listing-title"
                            type="number"
                            className="input-bordered input w-full font-mono"
                            step=".01"
                            value={min_wage.toString()}
                            onChange={(e) => setListing({ ...listing, min_wage: Number(e.target.value) })}
                        />
                    </div>
                    <div className="formGroup flex flex-col gap-2">
                        <label htmlFor="listing-title">Maximum Wage</label>
                        <input
                            id="listing-title"
                            type="number"
                            className="input-bordered input w-full font-mono"
                            step=".01"
                            value={max_wage.toString()}
                            onChange={(e) => setListing({ ...listing, max_wage: Number(e.target.value) })}
                        />
                    </div>
                    <div className="formGroup flex flex-col gap-2">
                        <label htmlFor="listing-link">Link to Apply</label>
                        <input
                            id="listing-link"
                            className="input-bordered input w-full font-mono"
                            type="url"
                            placeholder="https://linktoapplication.com/123"
                            value={link}
                            onChange={(e) => setListing({ ...listing, link: e.target.value })}
                            required={true}
                        />
                    </div>
                    <div className="formGroup flex items-center justify-between">
                        <label htmlFor="listing-terms">
                            I agree with the <Link to="/tos">Terms of Service</Link>
                        </label>
                        <input
                            type="checkbox"
                            checked={terms}
                            className="checkbox"
                            onChange={(e) => setListing({ ...listing, terms: e.target.checked })}
                            required
                        />
                    </div>
                    <button className="btn w-full font-mono">🔥 Create Listing</button>
                </form>
            )}
        </>
    );
};

export default ListingsForm;
