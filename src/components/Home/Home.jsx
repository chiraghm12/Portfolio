import { NavLink } from "react-router-dom"
import { easeInOut, motion } from "framer-motion";
function Home() {

    const handleDownload = () => {
        // Link to the PDF file inside public folder
        const pdfUrl = '/Chirag-Mandaviya-Resume.pdf';

        // Creating an invisible anchor tag to trigger the download
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Chirag-Mandaviya-Resume.pdf'; // Specify the name you want for the downloaded file
        link.click();
    };

    return (
        <>
            <div className="h-full w-full overflow-auto">
                <div className="flex justify-between items-center gap-x-2 mt-7">
                    <motion.div className="text-white w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: easeInOut }}
                    >
                        <div className="pl-24 xl:pl-32 2xl:pl-40 font-sans">
                            <motion.p initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: easeInOut }} className="xl:text-3xl 2xl:text-5xl font-bold">Hi, I&apos;m <span className="text-[#00abf0] tracking-tight">Chirag Mandaviya</span></motion.p>
                            <motion.p initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: easeInOut, delay: 0.1 }} className="xl:text-2xl 2xl:text-4xl font-bold xl:pt-1 2xl:pt-3">Software Developer</motion.p>
                            <motion.p initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: easeInOut, delay: 0.2 }} className="xl:text-sm 2xl:text-base xl:pt-3 2xl:pt-5 leading-7">I&apos;m a <span className="text-[#00abf0]">Software Developer</span> with a strong foundation in crafting scalable applications and solving complex problems. With experience in backend, frontend, and system integration, I thrive on turning ideas into impactful digital experiences.</motion.p>
                            <motion.div initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: easeInOut, delay: 0.3 }} className="flex gap-x-5 xl:mt-5 2xl:mt-7">
                                <button className="px-5 py-3 font-bold rounded-sm bg-[#00abf0] flex items-center gap-x-2 duration-300 hover:shadow-[0px_0px_20px_10px_rgba(0,171,240,0.50)]" onClick={handleDownload}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path fill="#ffffff" d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6c4.5-4.2 7.1-10.1 7.1-16.3c0-12.3-10-22.3-22.3-22.3L304 256l0-96c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32l0 96-57.7 0C138 256 128 266 128 278.3c0 6.2 2.6 12.1 7.1 16.3l107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9z" /></svg>
                                    Resume
                                </button>
                                <button className="px-5 py-3 font-bold rounded-sm bg-[#00abf0] duration-300 hover:shadow-[0px_0px_20px_10px_rgba(0,171,240,0.50)]">
                                    <NavLink to="/contact">
                                        Contact Me
                                    </NavLink>
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div className="w-1/2 xl:px-10 2xl:pl-32"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: easeInOut }}
                    >
                        <div className="w-5/6 h-5/6">
                            <div className="xl:p-20 2xl:p-20">
                                <img src="/src/assets/profile_photo.png" alt="Profile Photo" className="rounded-full opacity-95 duration-300 shadow-[0px_0px_50px_0px_rgba(0,171,240,0.50)] hover:shadow-[0px_0px_50px_20px_rgba(0,171,240,0.80)] hover:opacity-100" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Home
