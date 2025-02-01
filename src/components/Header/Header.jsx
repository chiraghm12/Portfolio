import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header className="sticky top-0 left-0 z-20 bg-transparent shadow-md backdrop-blur-lg">
            <div className="mx-auto px-40 py-5">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="text-white text-6xl font-sans font-bold tracking-tighter">
                        <NavLink to="/">
                        <h1>C<span className="text-[#00abf0]">M</span></h1>
                        </NavLink>
                    </div>
                    <nav>
                        <ul className="flex gap-10 justify-between text-white font-sans font-semibold tracking-wide">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `duration-200 ease-in-out ${isActive ? "text-[#00abf0] border-b border-[#00abf0]" : "text-white"} hover:text-[#00abf0]`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `duration-200 ${isActive ? "text-[#00abf0] border-b border-[#00abf0]" : "text-white"} hover:text-[#00abf0]`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/skills"
                                    className={({ isActive }) =>
                                        `duration-200 ${isActive ? "text-[#00abf0] border-b border-[#00abf0]" : "text-white"} hover:text-[#00abf0]`
                                    }
                                >
                                    Skills
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/experience"
                                    className={({ isActive }) =>
                                        `duration-200 ${isActive ? "text-[#00abf0] border-b border-[#00abf0]" : "text-white"} hover:text-[#00abf0]`
                                    }
                                >
                                    Experience
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `duration-200 ${isActive ? "text-[#00abf0] border-b border-[#00abf0]" : "text-white"} hover:text-[#00abf0]`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
