import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png"
// import SocialIcons from "./SocialIcons";
import ThemeChanger from "./ThemeChanger";

const Footer: React.FC = () => {

    const handleLogoClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <footer className="px-5 py-10 bg-base-200 text-base-content font-mono w-full flex justify-center">
            <div className="flex justify-between w-3/4">
                <div className="flex flex-col items-center justify-center">
                    <img src={Logo} alt="Logo" width="350" height="350" className="cursor-pointer" onClick={handleLogoClick}/>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="footer-title">Categories</span>
                    <Link to="/jobs/game-design" className="link link-hover">Game Design</Link>
                    <Link to="/jobs/game-development" className="link link-hover">Game Development</Link>
                    <Link to="/jobs/game-art" className="link link-hover">Game Art</Link>
                    <Link to="/jobs/qa-testing" className="link link-hover">QA Testing</Link>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="footer-title">Company</span>
                    <Link to="/about" className="link link-hover">About</Link>
                    <Link to="/branding" className="link link-hover">Branding</Link>
                    <Link to="/contact" className="link link-hover">Contact</Link>
                    <Link to="/credits" className="link link-hover">Credits</Link>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="footer-title">Legal</span>
                    <Link to="/terms" className="link link-hover">Terms of use</Link>
                    <Link to="/privacy" className="link link-hover">Privacy policy</Link>
                    <Link to="/cookies" className="link link-hover">Cookie policy</Link>
                    <ThemeChanger />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
