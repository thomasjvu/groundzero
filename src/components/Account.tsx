import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Session } from '@supabase/supabase-js';
import { currencyList } from '../types/currency'

import Avatar from './Avatar';
import AvatarUpload from './AvatarUpload';
import ButtonSignout from '../components/ButtonSignout';
import { greetUser } from '../utils/time';

const Account: React.FC<{session: Session}> = ({ session }) => { 
// specify type of React FC props as an object with a single property `session` of type `Session`
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState("");
    const [description, setDescription] = useState("");
    const [website, setWebsite] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [twitter, setTwitter] = useState("");
    const [currency, setCurrency] = useState("");
    const [avatar_url, setAvatarUrl] = useState(null);

    console.log("Profile Session", session)

    useEffect(() => {
        async function getProfile() {
            setLoading(true);
            const { user } = session;

            let { data, error } = await supabase
                .from('profiles')
                .select(`username, description, website, linkedin, twitter, avatar_url, currency`)
                .eq(`id`, user.id)
                .single();

            if (error) {
                console.warn(error);
            } else if (data) {
                setUsername(data.username);
                setDescription(data.description);
                setWebsite(data.website);
                setTwitter(data.twitter)
                setLinkedin(data.linkedin)
                setAvatarUrl(data.avatar_url);
                setCurrency(data.currency);
            }

            setLoading(false);
        }
        getProfile();

    }, [session]);

    async function updateProfile(e: any) {
        e.preventDefault();

        setLoading(true);
        const { user } = session;

        const updates = {
            id: user.id,
            username,
            description,
            website,
            twitter,
            linkedin,
            avatar_url,
            currency,
            updated_at: new Date()
        };

        let { error } = await supabase.from('profiles').upsert(updates);

        if (error) {
            document.querySelector('#error-message')!.innerHTML = `Error: ${error.message}`;
        }
        setLoading(false);
    }

    return (
        <div className="flex flex-col items-center justify-center gap-10">
            {/* Greet User */}
            <div className='font-mono'>{greetUser()}, @{username}</div>
            {/* Account Settings */}
            <h2 className="font-display text-4xl">Account Settings</h2>
            <form onSubmit={updateProfile} className="flex w-1/4 flex-col gap-5 font-mono">
                <Avatar
                    url={avatar_url ?? ''}
                    size={150}
                />
                <AvatarUpload 
                    onUpload={(event: any, url: any) => {
                        setAvatarUrl(url);
                        updateProfile(event);
                    }}
                />
                <div className="form-group flex flex-col gap-2">
                    <label htmlFor="email" className="">
                        Email
                    </label>
                    <input id="email" className="input" type="text" value={session.user.email} disabled />
                </div>
                <div className="form-group flex flex-col gap-2">
                    <label htmlFor="username" className="">
                        Username
                    </label>
                    <input
                        id="username"
                        className="input-bordered input"
                        type="text"
                        required={true}
                        value={username || ''}
                        onChange={(e: any) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group flex flex-col gap-2">
                    <label htmlFor="description" className="">
                       Description 
                    </label>
                    <input
                        id="description"
                        className="input-bordered input"
                        type="text"
                        required={true}
                        value={description || ''}
                        onChange={(e: any) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-group flex flex-col gap-2">
                    <label htmlFor="website" className="">
                        Website
                    </label>
                    <input
                        id="website"
                        className="input-bordered input"
                        type="url"
                        value={website || ''}
                        onChange={(e: any) => setWebsite(e.target.value)}
                    />
                </div>
                <div className="form-group flex flex-col gap-2">
                    <label htmlFor="linkedin" className="">
                        LinkedIn
                    </label>
                    <input
                        id="linkedin"
                        className="input-bordered input"
                        type="url"
                        value={linkedin || ''}
                        onChange={(e: any) => setLinkedin(e.target.value)}
                    />
                </div>
                <div className="form-group flex flex-col gap-2">
                    <label htmlFor="website" className="">
                        Twitter
                    </label>
                    <input
                        id="twitter"
                        className="input-bordered input"
                        type="url"
                        value={twitter || ''}
                        onChange={(e: any) => setTwitter(e.target.value)}
                    />
                </div>
                <div className="form-group flex flex-col gap-2">
                    <label htmlFor="website" className="">
                        Currency
                    </label>
                    <select
                        id="currency"
                        className="input-bordered input "
                        value={currency || ''}
                        onChange={(e: any) => setCurrency(e.target.value)}>
                        <option value="">Select Currency...</option>
                        {currencyList.map((currency) => (
                            <option key={currency.value} value={currency.value}>
                                {currency.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <button className="btn-primary btn w-full" type="submit" disabled={loading}>
                        {loading ? 'Updating...' : 'Update'}
                    </button>
                </div>
                <div>
                    <ButtonSignout text="Sign Out" onClick={() => supabase.auth.signOut()} />
                </div>
                {/* Error Handling */}
                <div id="message-container">
                    <p id="error-message" className="text-center italic text-red-500"></p>
                </div>
            </form>
        </div>
    );
}

export default Account
