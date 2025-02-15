import { NavLink } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";

function About() {
    return (
        <>
            <div className='h-full w-full overflow-auto' style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}>
                <motion.div initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: easeInOut }} className="xl:text-3xl 2xl:text-5xl font-sans font-bold text-[#00abf0] text-center xl:p-10 2xl:p-10"><span className="text-white">ABOUT</span> ME</motion.div>
                <div className="flex justify-between items-center gap-2 font-sans">
                    <motion.div initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: easeInOut }} className="xl:px-24 xl:py-5 2xl:px-36 2xl:py-10 w-1/2">
                        <div className="w-2/3 h-2/3 xl:ml-20 2xl:ml-20">
                            <img src="/src/assets/profile_photo.png" alt="Profile Photo" className="rounded-full opacity-95 duration-300 shadow-[0px_0px_50px_0px_rgba(0,171,240,0.50)] hover:shadow-[0px_0px_50px_20px_rgba(0,171,240,0.80)] hover:opacity-100" />
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: easeInOut }}
                        className="xl:pr-20 2xl:pr-48 w-1/2 font-sans xl:text-xs 2xl:text-base"
                    >
                        <motion.p initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: easeInOut }} className="text-left text-white leading-7 tracking-wide"
                        >
                            Experienced <span className="text-[#00abf0]">Software Developer</span> with <span className="text-[#00abf0]">2 years</span> of hands-on
                            experience in backend development, specializing in building
                            efficient, scalable web applications and seamlessly
                            integrating REST APIs. Committed to delivering high-quality,
                            maintainable code by adhering to best practices,
                            implementing robust testing frameworks, and utilizing
                            version control effectively.
                        </motion.p>
                        <div className="xl:pt-3 2xl:pt-5 font-sans">
                            <motion.p initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: easeInOut, delay: 0.1 }} className="text-[#00abf0] font-bold xl:text-xl 2xl:text-3xl border-b-2 border-[#00abf0] flex gap-x-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="2xl:pt-1" viewBox="0 0 640 512"><path fill="#00abf0" d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" /></svg>
                                Education
                            </motion.p>
                            <motion.p initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: easeInOut, delay: 0.15 }} className="text-white xl:pl-2 2xl:pl-4 xl:pt-2 2xl:pt-4 font-bold"
                            >
                                B.TECH, Computer Science & Engineering
                            </motion.p>
                            <NavLink to="https://nirmauni.ac.in/" target="_blank">
                                <motion.p initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, ease: easeInOut, delay: 0.2 }} className="text-white xl:pl-2 2xl:pl-4 xl:pt-1 2xl:pt-2 flex xl:gap-1 2xl:gap-2"
                                >
                                    Nirma University
                                    <svg xmlns="http://www.w3.org/2000/svg" className="xl:mt-1 2xl:mt-2" width="10" height="10" viewBox="0 0 512 512"><path fill="#ffffff" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" /></svg>
                                </motion.p>
                            </NavLink>
                            <motion.p initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: easeInOut, delay: 0.25 }} className="text-white xl:pl-2 2xl:pl-4 xl:pt-1 2xl:pt-2"
                            >
                                June 2019 - June 2023 | Ahmedabad, India
                            </motion.p>
                        </div>
                        <button className="xl:mt-4 2xl:mt-7 xl:px-4 2xl:px-5 xl:py-3 2xl:py-4 text-white font-bold rounded-sm bg-[#00abf0] duration-300 hover:shadow-[0px_0px_20px_10px_rgba(0,171,240,0.50)]">
                            <NavLink to="/contact">
                                Contact Me
                            </NavLink>
                        </button>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default About
