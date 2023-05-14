import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import GZOIcon from '../assets/images/icon.png'

function Header() {
    const [session, setSession] = useState(null);

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
        <header className="navbar h-24 sticky top-0 bg-base-200 flex justify-center items-center p-5 z-[999]">
            <div className="w-3/4">
                <div className="flex-1">
                    <Link to="/">
                        <img src={GZOIcon} width="50px" height="50px" className="rounded"/>
                    </Link>
                </div>
                <div className="flex gap-5 items-center">
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
                    {!session ? 
                    <Link to="/profile">
                        <Icon icon="pixelarticons:human-handsdown" width="33" height="33" className="mr-5" />
                    </Link>
                    : 
                    <Link to="/profile">
                        <img src={session.user.user_metadata.avatar_url} width={33} height="33" className="rounded-full border mr-5 border-primary"/>
                        {/* <Icon icon="pixelarticons:human-handsup" width="33" height="33" className="mr-5" /> */}
                    </Link>
                    }
                    <Link to="/post" className="btn font-mono">Post a Job</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
