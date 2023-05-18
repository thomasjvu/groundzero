import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';

import Menu from './HeaderMenu';
import HeaderAvatar from './HeaderAvatar';
import GZOIcon from '../../assets/images/icon.png';

import { handleSession } from '../../helpers/handleSession';

const Header: React.FC = (): JSX.Element => {
    const session = handleSession()
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className="navbar z-[999] flex h-24 items-center justify-center bg-base-200 p-5 lg:sticky lg:top-0">
            <div className="w-3/4">
                <div className="flex-1">
                    <Link to="/">
                        <img src={GZOIcon} width="50px" height="50px" className="rounded" />
                    </Link>
                </div>
                <div className="flex flex-row-reverse lg:flex-row items-center gap-5">
                    {/* Toggle Menu */}
                    <button className="block lg:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
                        {showMenu ? <Icon icon="jam:close" width="50px" height="50px" /> : <Icon icon="jam:menu" width="50px" height="50px"/>}
                    </button>
                    {showMenu && <Menu onClose={toggleMenu} />}
                    <ul
                        className={`menu menu-horizontal items-center px-1 font-mono uppercase lg:flex lg:flex-row ${
                            !showMenu ? 'hidden' : 'flex flex-col'
                        }`}>
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
                                    <Link to="/about">About Us</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/training">Training</Link>
                        </li>
                        <li>
                            <Link to="/post" className="btn font-mono text-black ml-5" role="button">
                                Post Job
                            </Link>
                        </li>
                    </ul>
                        {!session ? (
                            <Link to="/profile" role="button">
                                <Icon
                                    icon="pixelarticons:human-handsdown"
                                    width="33"
                                    height="33"
                                    className="ml-6"
                                />
                            </Link>
                        ) : (
                                <Link to="/profile" className="ml-6" role="button">
                                    <HeaderAvatar session={session} />
                                </Link>
                            )}
                </div>
            </div>
        </header>
    );
};

export default Header;
