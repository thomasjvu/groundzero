import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import GZOIcon from '../assets/images/icon.png';

interface HeaderProps {
    url?: string;
}

const Header: React.FC<HeaderProps> = ({url}) => {
    const [session, setSession] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        // console.log("Header Session", session)
    }, []);

    useEffect(() => {
        if (url) downloadImage(url);

    }, [url]);

    async function downloadImage(path: string) {
        try {
            const { data, error } = await supabase.storage.from("avatars").download(path);
            if (error) {
                throw error;
            }
            const url = URL.createObjectURL(data);
            setAvatarUrl(url);
        } catch (error: any) {
            console.log("Error downloading image: ", error.message);
        }
    }

    // useEffect(() => {
    //     async function getUserAvatar() {
    //         let { data: profiles, error } = await supabase.from('profiles').select('avatar_url');

    //         if (error) {
    //             console.log(error);
    //         } else {
    //             if (profiles && profiles.length > 0) {
    //                 setAvatarUrl(profiles[0].avatar_url);
    //             }
    //         }
    //     }

    //     getUserAvatar();
    // }, []);

    return (
        <header className="navbar sticky top-0 z-[999] flex h-24 items-center justify-center bg-base-200 p-5">
            <div className="w-3/4">
                <div className="flex-1">
                    <Link to="/">
                        <img src={GZOIcon} width="50px" height="50px" className="rounded" />
                    </Link>
                </div>
                <div className="flex items-center gap-5">
                    <ul className="menu menu-horizontal px-1 font-mono uppercase">
                        <li>
                            <Link to="/jobs">Jobs</Link>
                        </li>
                        <li tabIndex={0}>
                            <a>
                                Companies
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24">
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </a>
                            <ul className="bg-base-100 p-2">
                                <li>
                                    <a>AAA Studios</a>
                                </li>
                                <li>
                                    <a>Indie Studios</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>News</a>
                        </li>
                        <li>
                            <a>Career Advice</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                    {!session ? (
                        <Link to="/profile">
                            <Icon icon="pixelarticons:human-handsdown" width="33" height="33" className="mr-5" />
                        </Link>
                    ) : (
                        <Link to="/profile">
                            <img
                                src={avatarUrl}
                                width={33}
                                height="33"
                                className="mr-5 rounded-full border border-primary"
                            />
                            {/* <Icon icon="pixelarticons:human-handsup" width="33" height="33" className="mr-5" /> */}
                        </Link>
                    )}
                    <Link to="/post" className="btn font-mono">
                        Post a Job
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
