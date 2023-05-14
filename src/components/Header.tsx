import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

import GZOIcon from '../assets/images/icon.png';
import HeaderAvatar from './HeaderAvatar';

import { Session } from '@supabase/supabase-js';

const Header: React.FC = () => {
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
                            <Link to="/companies">
                                Companies
                                <Icon icon="jam:arrow-down" />
                            </Link>
                            <ul className="bg-base-100 p-2">
                                <li>
                                    <Link to="/aaa">AAA Studios</Link>
                                </li>
                                <li>
                                    <Link to="/indie">Indie Studios</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/news">News</Link>
                        </li>
                        <li>
                            <Link to="/resources">Resources</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    {!session ? (
                        <Link to="/profile">
                            <Icon icon="pixelarticons:human-handsdown" width="33" height="33" className="mr-5" />
                        </Link>
                    ) : (
                        <Link to="/profile" className="mr-5">
                            <HeaderAvatar session={session} />
                        </Link>
                    )}
                    <Link to="/post" className="btn font-mono">
                        Post a Job
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
