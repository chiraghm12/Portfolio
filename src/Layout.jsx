import Header from "./components/Header/Header"
import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <>
            <div className="flex flex-col h-screen bg-[#081b29]">
                <Header />
                <div className="flex-1 overflow-hidden">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout