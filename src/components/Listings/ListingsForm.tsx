import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { categoryList } from '../../types/category';
import { Session } from '@supabase/supabase-js';

// type Listing = {
//     location: Location
//     setting: Setting
//     contract: Contract
// }

type Location = {
    name: string;
    value: string;
};

const locationList: Location[] = [
    { name: 'New York', value: 'new-york' },
    { name: 'London', value: 'london' },
    { name: 'Paris', value: 'paris' },
    { name: 'Tokyo', value: 'tokyo' },
    { name: 'California', value: 'california' },
    { name: 'Washington', value: 'washington' },
    { name: 'Boston', value: 'boston' },
    { name: 'Global', value: 'global' }
];

type Setting = {
    name: string;
    value: string;
};

const settingList: Setting[] = [
    { name: 'Remote', value: 'remote' },
    { name: 'Hybrid', value: 'hybrid' },
    { name: 'On-Site', value: 'on-site' }
];

type Contract = {
    name: string;
    value: string;
};

const contractList: Contract[] = [
    { name: 'Full Time', value: 'full-time' },
    { name: 'Part Time', value: 'part-time' },
    { name: 'Contract', value: 'contract' },
    { name: 'Temporary', value: 'temporary' },
    { name: 'Freelance', value: 'freelance' },
    { name: 'Internship', value: 'internship' },
    { name: 'Externship', value: 'externship' }
];

type Level = {
    name: string;
    value: string;
};

const levelList: Level[] = [
    { name: 'Intern', value: 'intern' },
    { name: 'Entry Level', value: 'entry' },
    { name: 'Associate', value: 'associate' },
    { name: 'Senior', value: 'senior' },
    { name: 'Manager', value: 'manager' },
    { name: 'Director', value: 'director' },
    { name: 'Executive', value: 'executive' }
];

type Rate = {
    name: string;
    value: string;
}

const rateList: Rate[] = [
    { name: 'Annual', value: 'annual'},
    { name: 'Hourly', value: 'hourly'},
    { name: 'Weekly', value: 'weekly'},
] 



const ListingsForm: React.FC = () => {

    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        // console.log("Header Session", session)
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
            {session && (
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
                                <option key={cat.value} value={cat.value}>
                                    {cat.name}
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
                                <option key={loc.value} value={loc.value}>
                                    {loc.name}
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
                                <option key={contract.value} value={contract.value}>
                                    {contract.name}
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
                                <option key={level.value} value={level.value}>
                                    {level.name}
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
                                <option key={setting.value} value={setting.value}>
                                    {setting.name}
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
                                <option key={rate.value} value={rate.value}>
                                    {rate.name}
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
