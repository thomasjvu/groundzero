import Header from "../components/Header"
import Footer from "../components/Footer"
import React, { ReactNode } from "react"

type LayoutProps = {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <div className="min-h-screen">
            <div className="flex flex-col justify-center items-center gap-20">
                <Header />
                <main className="min-h-3/4 w-3/4">{children}</main>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
