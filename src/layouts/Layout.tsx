import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { LayoutProps } from '../types/layout';


const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
    return (
        <div id="main-layout" className="flex flex-col items-center justify-center gap-20">
            <Header />
            <main className="min-h-128 w-3/4">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
