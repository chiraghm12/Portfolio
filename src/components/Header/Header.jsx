import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header className="sticky top-0 left-0 z-20 bg-transparent shadow-md backdrop-blur-lg">
            <div className="mx-auto px-40 py-5">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="text-white text-6xl font-sans font-bold tracking-tighter">
                        <h1>C<span className="text-[#00abf0]">M</span></h1>
                    </div>
                    <nav>
                        <ul className="flex gap-10 justify-between text-white font-sans font-semibold tracking-wide">
                            <li>
                                <NavLink 
                                to="/" 
                                    className={({isActive}) => 
                                        `${isActive ? "text-[#00abf0]" : "text-white"}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink>

                                </NavLink>
                                About</li>
                            <li>Skills</li>
                            <li>Experience</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
