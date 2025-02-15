import { NavLink } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";
import githubLogo from './../../assets/github_icon.svg';
import linkedinLogo from './../../assets/linkedin_icon.svg'; 
function Header() {
    return (
        <header className="sticky top-0 w-full z-20 bg-transparent shadow-md backdrop-blur-lg">
            <div className="mx-auto xl:px-32 2xl:px-40 xl:py-3 2xl:py-5">
                <div className="flex flex-wrap justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: easeInOut }} className="text-white xl:text-3xl 2xl:text-6xl font-sans font-bold tracking-tighter">
                        <NavLink to="/home">
                            <h1>C<span className="text-[#00abf0]">M</span></h1>
                        </NavLink>
                    </motion.div>
                    <nav>
                        <ul className="flex xl:gap-7 2xl:gap-10 justify-between text-white font-sans font-semibold tracking-wide">
                            {["Home", "About", "Skills", "Experience", "Contact"].map((item, index) => (
                                <motion.li key={item} initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: easeInOut, delay: index * 0.1 }} >
                                    <NavLink
                                        to={`/${item.toLowerCase()}`}
                                        className={({ isActive }) =>
                                            `duration-200 ease-in-out xl:text-xs 2xl:text-base ${isActive ? "text-[#00abf0] border-b border-[#00abf0]" : "text-white"
                                            } hover:text-[#00abf0]`
                                        }
                                    >
                                        {item}
                                    </NavLink>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex gap-x-5">
                        <motion.div initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: easeInOut, delay: 0.1 }}>
                            <NavLink to="https://github.com/chiraghm12" target="_blank">
                                <img className=" 2xl:mt-[3px] xl:mt-[1px] xl:w-[30px] xl:h-[25px] 2xl:w-[38px] 2xl:h-[33px]" src={githubLogo} alt="github" />
                            </NavLink>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: easeInOut, delay: 0.2 }}>
                            <NavLink to="https://www.linkedin.com/in/chirag-mandaviya-4b5b971ab/" target="_blank">
                                <img className="2xl:w-[40px] 2xl:h-[40px] xl:w-[30px] xl:h-[30px]" src={linkedinLogo} alt="linkedin" />
                            </NavLink>
                        </motion.div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
