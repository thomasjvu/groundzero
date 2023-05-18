import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import ThemeChanger from './ThemeChanger';
import { handleScrollTop } from '../../helpers/handleScrollTop';

const Footer: React.FC = (): JSX.Element => {
    return (
        <footer className="flex w-full justify-center bg-base-200 px-5 py-10 font-mono text-base-content">
            <div className="flex w-3/4 flex-col items-center justify-between gap-10 md:flex-row md:items-start">
                <div className="flex flex-col items-center justify-center pt-5">
                    <img
                        src={Logo}
                        alt="Logo"
                        width="350"
                        height="350"
                        className="cursor-pointer"
                        onClick={handleScrollTop}
                    />
                </div>
                <div className="flex hidden flex-col gap-5 xl:flex">
                    <span className="footer-title">Categories</span>
                    <Link to="/jobs/game-art" className="link-hover link">
                        Game Art
                    </Link>
                    <Link to="/jobs/game-design" className="link-hover link">
                        Game Design
                    </Link>
                    <Link to="/jobs/game-development" className="link-hover link">
                        Game Development
                    </Link>
                    <Link to="/jobs/qa-testing" className="link-hover link">
                        QA Testing
                    </Link>
                </div>
                <div className="flex hidden flex-col gap-5 md:flex">
                    <span className="footer-title">Company</span>
                    <Link to="/about" className="link-hover link">
                        About
                    </Link>
                    <Link to="/branding" className="link-hover link">
                        Branding
                    </Link>
                    <Link to="/contact" className="link-hover link">
                        Contact
                    </Link>
                    <Link to="/credits" className="link-hover link">
                        Credits
                    </Link>
                </div>
                <div className="flex flex-col items-start justify-start gap-5">
                    <span className="footer-title hidden md:block">Legal</span>
                    <Link to="/disclaimers" className="link-hover link hidden md:block">
                        Disclaimer
                    </Link>
                    <Link to="/terms" className="link-hover link hidden md:block">
                        Terms of Use
                    </Link>
                    <Link to="/privacy" className="link-hover link hidden md:block">
                        Privacy Policy
                    </Link>
                    <ThemeChanger />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
