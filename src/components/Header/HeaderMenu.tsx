import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Menu: React.FC<{ onClose: () => void }> = ({ onClose }): JSX.Element => {
    return (
        <div className="fixed top-0 left-0 h-screen w-screen bg-base-100 z-[999]">
            <ul className="menu menu-vertical text-2xl flex flex-col items-center justify-center h-full">
                <li>
                    <Link to="/jobs">Jobs</Link>
                </li>
                <li>
                    <Link to="/companies">Companies</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/post" className="btn font-mono text-black" role="button">
                        Post Job
                    </Link>
                </li>
                <li>
                    <button className="block lg:hidden" onClick={onClose} aria-label="Close Menu">
                        <Icon icon="jam:close" />
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Menu
