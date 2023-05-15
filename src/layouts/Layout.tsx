import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div id="main-layout" className="flex flex-col items-center justify-center gap-20">
            <Header />
            <main className="min-h-128 w-3/4">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
