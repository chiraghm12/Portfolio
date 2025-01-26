import { NavLink } from "react-router-dom"

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
            <div className='fixed top-0 left-0 h-screen w-full bg-[#081b29]'>
                <div className="relative flex justify-between items-center gap-2 h-screen justify-items-center p-5">
                    <div className="p-50 text-white w-1/2">
                        <div className="pl-40 pt-20 font-sans">
                            <p className="sm:text-4xl md:text-5xl font-bold">Hi, I&apos;m <span className="text-[#00abf0] tracking-tight">Chirag Mandaviya</span></p>
                            <p className="sm:text-3xl md:text-4xl font-bold pt-3">Software Developer</p>
                            <p className="text-base pt-5">I&apos;m a <span className="text-[#00abf0]">Software Developer</span> with a strong foundation in crafting scalable applications and solving complex problems. With experience in backend, frontend, and system integration, I thrive on turning ideas into impactful digital experiences.</p>
                            <div className="flex gap-x-5">
                                <button className="mt-7 px-5 py-3 rounded-sm bg-[#00abf0] flex items-center gap-x-2 duration-300 hover:shadow-[0px_0px_20px_10px_rgba(0,171,240,0.50)]" onClick={handleDownload}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path fill="#ffffff" d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6c4.5-4.2 7.1-10.1 7.1-16.3c0-12.3-10-22.3-22.3-22.3L304 256l0-96c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32l0 96-57.7 0C138 256 128 266 128 278.3c0 6.2 2.6 12.1 7.1 16.3l107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9z" /></svg>
                                    Resume
                                </button>
                                <button className="mt-7 px-5 py-3 rounded-sm bg-[#00abf0] duration-300 hover:shadow-[0px_0px_20px_10px_rgba(0,171,240,0.50)]">
                                    <NavLink to="/contact">
                                        Contact Me
                                    </NavLink>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="p-50 w-1/2 p-52">
                        <div className="w-5/6 h-5/6">
                            <img src="/src/assets/profile_photo.png" alt="Profile Photo" className="rounded-full opacity-95 duration-300 shadow-[0px_0px_50px_0px_rgba(0,171,240,0.50)] hover:shadow-[0px_0px_50px_20px_rgba(0,171,240,0.80)] hover:opacity-100" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
