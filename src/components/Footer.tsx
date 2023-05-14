// import Icon from "../assets/images/icon.png"
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
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                    <ThemeChanger />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
