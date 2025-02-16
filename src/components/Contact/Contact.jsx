import { useState } from "react";
import { easeInOut, motion } from "framer-motion";

function Contact() {

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        msg: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("data: ", formData);
        alert("Submit Successfully..!!")

        // Clear form after submission
        setFormData({ fname: "", lname: "", email: "", phone: "", msg: "" });
    };

    return (
        <>
            <div className="h-full overflow-auto p-4 text-white text-center">
                <motion.div initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: easeInOut }} className="xl:px-20 2xl:px-20 xl:py-5 2xl:py-10 text-center font-bold xl:text-3xl 2xl:text-5xl">
                    CONTACT <span className="text-[#00abf0]">ME</span>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: easeInOut }} className="xl:px-60 2xl:px-96 font-sans xl:text-xs 2xl:text-base">
                    <form className="xl:px-32 2xl:px-32" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap xl:gap-3 2xl:gap-4">
                            <div className="flex flex-col xl:gap-1 2xl:gap-2 w-[calc(50%-8px)]">
                                <label className="text-white text-left flex-grow" htmlFor="fname">First Name</label>
                                <input className="text-white focus:outline-none border border-[#00abf0] bg-transparent rounded-md xl:p-2 2xl:p-3 flex-grow" type="text" name="fname" id="fname" placeholder="First Name" value={formData.fname} onChange={handleChange} required />
                            </div>
                            <div className="flex flex-col xl:gap-1 2xl:gap-2 w-[calc(50%-8px)]">
                                <label className="text-white text-left flex-grow" htmlFor="lname">Last Name</label>
                                <input className="text-white focus:outline-none border border-[#00abf0] bg-transparent rounded-md xl:p-2 2xl:p-3 flex-grow" type="text" name="lname" id="lname" placeholder="Last Name" value={formData.lname} onChange={handleChange} required />
                            </div>
                            <div className="flex flex-col xl:gap-1 2xl:gap-2 w-[calc(50%-8px)]">
                                <label className="text-white text-left flex-grow" htmlFor="email">Email</label>
                                <input className="text-white focus:outline-none border border-[#00abf0] bg-transparent rounded-md xl:p-2 2xl:p-3 flex-grow" type="email" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="flex flex-col xl:gap-1 2xl:gap-2 w-[calc(50%-8px)]">
                                <label className="text-white text-left flex-grow" htmlFor="phone">Phone Number</label>
                                <input className="text-white focus:outline-none border border-[#00abf0] bg-transparent rounded-md xl:p-2 2xl:p-3 flex-grow" type="number" name="phone" id="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                            </div>
                            <div className="flex flex-col xl:gap-1 2xl:gap-2 w-full">
                                <label className="text-white text-left flex-grow" htmlFor="msg">Message</label>
                                <textarea className="text-white focus:outline-none border border-[#00abf0] bg-transparent rounded-md xl:p-2 2xl:p-3 flex-grow xl:min-h-[150px] 2xl:min-h-[250px]" name="msg" id="msg" value={formData.msg} onChange={handleChange} required></textarea>
                            </div>
                            <button className="xl:px-4 2xl:px-5 xl:py-3 2xl:py-4 font-bold rounded-sm bg-[#00abf0] duration-300 hover:shadow-[0px_0px_20px_10px_rgba(0,171,240,0.50)]">
                                Send Message
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </>
    )
}

export default Contact
