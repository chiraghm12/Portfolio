function Contact() {
    return (
        <>
            <div className="h-full overflow-auto p-4 text-white text-center">
                <div className="px-20 py-10 text-center font-bold text-5xl">
                    CONTACT <span className="text-[#00abf0]">ME</span>
                </div>
                <div className="px-96">
                    <form className="px-20">
                        <div className="flex flex-wrap gap-4">
                            <div className="flex flex-col gap-2 w-[calc(50%-8px)]">
                                <label className="text-white text-left flex-grow" htmlFor="fname">First Name</label>
                                <input className="text-white focus:outline-none border-2 border-[#00abf0] bg-transparent rounded-md p-3 flex-grow" type="text" name="fname" id="fname" placeholder="First Name" />
                            </div>
                            <div className="flex flex-col gap-2 w-[calc(50%-8px)]">
                                <label className="text-white text-left flex-grow" htmlFor="lname">Last Name</label>
                                <input className="text-white focus:outline-none border-2 border-[#00abf0] bg-transparent rounded-md p-3 flex-grow" type="text" name="lname" id="lname" placeholder="Last Name" />
                            </div>
                            <div className="flex flex-col gap-2 w-[calc(50%-8px)]">
                                <label className="text-white text-left flex-grow" htmlFor="email">Email</label>
                                <input className="text-white focus:outline-none border-2 border-[#00abf0] bg-transparent rounded-md p-3 flex-grow" type="email" name="email" id="email" placeholder="Email" />
                            </div>
                            <div className="flex flex-col gap-2 w-[calc(50%-8px)]">
                                <label className="text-white text-left flex-grow" htmlFor="phone">Phone Number</label>
                                <input className="text-white focus:outline-none border-2 border-[#00abf0] bg-transparent rounded-md p-3 flex-grow" type="number" name="phone" id="phone" placeholder="Phone Number" />
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label className="text-white text-left flex-grow" htmlFor="msg">Message</label>
                                <textarea className="text-white focus:outline-none border-2 border-[#00abf0] bg-transparent rounded-md p-3 flex-grow" name="msg" id="msg" rows="10"></textarea>
                            </div>
                            <button className="px-5 py-3 font-bold rounded-sm bg-[#00abf0] duration-300 hover:shadow-[0px_0px_20px_10px_rgba(0,171,240,0.50)]">
                                    Send Message
                                </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
