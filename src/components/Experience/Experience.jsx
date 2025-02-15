import { NavLink } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";
import sadnaLogo from './../../assets/sadna.svg';
import crestLogo from './../../assets/crest_data_logo.jpg'

function Experience() {
    return (
        <>
            <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory"
                style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
            >
                {/* itechcloud experience */}
                <div className="h-screen text-white">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        // animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: easeInOut }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="snap-start overflow-hidden"
                    >
                        <div className="xl:p-10 2xl:p-24">
                            <div className="inline-block xl:py-10 xl:px-20 2xl:px-20 2xl:py-10 rounded-xl">
                                <NavLink to="https://www.itechcloudsolution.com/" target="_blank">
                                    <img className="bg-white rounded-xl xl:p-3 2xl:p-5 shadow-[0px_0px_20px_10px_rgba(0,171,240,0.50)]" src="https://www.itechcloudsolution.com/wp-content/themes/iTechCloudNew/assets/img/logo.webp" alt="itech cloud" />
                                </NavLink>
                            </div>
                            <div className="text-white font-sans xl:px-20 2xl:px-20 xl:py-1 2xl:py-5">
                                <p className="xl:text-3xl 2xl:text-5xl font-bold">iTechCloud Solution</p>
                                <p className="xl:pt-1 2xl:pt-2 xl:text-sm 2xl:text-base"> Surat, Gujarat, India</p>
                                <p className="xl:pt-1 2xl:pt-2 xl:text-lg 2xl:text-xl text-[#00abf0] font-semibold">Salesforce Developer | Sep 2024 - Present</p>
                                <p className="xl:pt-2 2xl:pt-3 xl:text-base 2xl:text-xl">
                                    - Collaborated on the <span className="text-[#00abf0]">development</span> and <span className="text-[#00abf0]">customization</span> of Salesforce applications to enhance
                                    business processes and <span className="text-[#00abf0]">improve client workflows</span>. Implemented robust solutions for
                                    automation, data management, and CRM optimization, ensuring seamless integration
                                    with existing systems. Built <span className="text-[#00abf0]">Lightning Web Components (LWC)</span> using <span className="text-[#00abf0]">JavaScript</span>, enhancing user experience and functionality.
                                </p>
                                <p className="xl:pt-1 2xl:pt-2 xl:text-base 2xl:text-xl"> - Integrated Salesforce with external systems using <span className="text-[#00abf0]">Python</span> and <span className="text-[#00abf0]">FastAPI</span>, enabling seamless data exchange and automation. Worked on <span className="text-[#00abf0]">API development</span> and integration, improving system interoperability and efficiency.</p>

                                <p className="xl:pt-3 2xl:pt-5 xl:text-base 2xl:text-xl"><span className="font-semibold text-[#00abf0]">Skills: </span>JavaScript, APEX, HTML, CSS, FastAPI, PostgreSQL, Salesforce, Lightning Web Components, Salesforce DataLoader </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* sadna experience */}
                <div className="h-screen text-white" >
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        // animate={{ opacity: 1, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.7, ease: easeInOut }}
                        className="snap-start overflow-hidden"
                    >
                        <div className="xl:p-10 2xl:p-24">
                            <div className="inline-block xl:py-10 xl:px-20 2xl:px-20 2xl:py-10 rounded-xl ">
                                <NavLink to="https://scriptalldna.com/" target="_blank">
                                    <img className="bg-white rounded-xl xl:p-3 2xl:p-5 shadow-[0px_0px_20px_10px_rgba(0,171,240,0.50)]" src={sadnaLogo} alt="itech cloud" />
                                </NavLink>
                            </div>
                            <div className="text-white font-sans xl:px-20 2xl:px-20 xl:py-1 2xl:py-5">
                                <p className="xl:text-3xl 2xl:text-5xl font-bold">Script All DNA Technologies</p>
                                <p className="xl:pt-1 2xl:pt-2 xl:text-sm 2xl:text-base"> Ahmedabad, Gujarat, India</p>
                                <p className="xl:pt-1 2xl:pt-2 xl:text-lg 2xl:text-xl text-[#00abf0] font-semibold">Python Backend Developer | Aug 2023 - Jul 2024</p>
                                <p className="xl:pt-2 2xl:pt-3 xl:text-base 2xl:text-xl">
                                    - Designed and developed scalable <span className="text-[#00abf0]">RESTful APIs</span> using <span className="text-[#00abf0]">Django REST Framework</span>, focusing on CRUD operations, <span className="text-[#00abf0]">token-based</span> authentication, and <span className="text-[#00abf0]">user role</span> management. Managed <span className="text-[#00abf0]">MySQL</span> with <span className="text-[#00abf0]">Django ORM</span>, handled migrations, and ensured maintainability through <span className="text-[#00abf0]">PEP 8</span> standards and tools like <span className="text-[#00abf0]">Black</span>, <span className="text-[#00abf0]">Flake8</span>, and <span className="text-[#00abf0]">isort</span>.
                                </p>
                                <p className="xl:pt-1 2xl:pt-2 xl:text-base 2xl:text-xl"> - Enhanced system efficiency by implementing <span className="text-[#00abf0]">Celery</span> with <span className="text-[#00abf0]">Redis</span> for task scheduling, real-time updates with <span className="text-[#00abf0]">WebSocket</span>, and optimized query performance with <span className="text-[#00abf0]">Django Filters</span>. Created unit tests, documented APIs with <span className="text-[#00abf0]">Swagger</span>, and utilized Django Signals for decoupled architecture. Ensured robust error tracking with comprehensive logging and contributed to Agile processes and continuous integration.</p>

                                <p className="xl:pt-3 2xl:pt-5 xl:text-base 2xl:text-xl"><span className="font-semibold text-[#00abf0]">Skills: </span>Python, Django Rest Framework, MySQL, SQLite, Git, GitHub, Postman, Trello  </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* crest experience */}
                <div className="h-screen text-white" >
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        // animate={{ opacity: 1, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.7, ease: easeInOut }}
                        className="snap-start overflow-hidden"
                    >
                        <div className="xl:p-10 2xl:p-24">
                            <div className="inline-block xl:py-10 xl:px-20 2xl:px-20 2xl:py-10 rounded-xl">
                                <NavLink to="https://www.crestdata.ai/" target="_blank">
                                    <img className="bg-white rounded-xl xl:h-24 2xl:h-32 shadow-[0px_0px_20px_10px_rgba(0,171,240,0.50)]" src={crestLogo} alt="crest data systems" />
                                </NavLink>
                            </div>
                            <div className="text-white font-sans xl:px-20 2xl:px-20 xl:py-1 2xl:py-5">
                                <p className="xl:text-3xl 2xl:text-5xl font-bold">Crest Data Systems</p>
                                <p className="xl:pt-1 2xl:pt-2 xl:text-sm 2xl:text-base"> Ahmedabad, Gujarat, India</p>
                                <p className="xl:pt-1 2xl:pt-2 xl:text-lg 2xl:text-xl text-[#00abf0] font-semibold">Software Engineer | Jan 2023 - May 2023</p>
                                <p className="xl:pt-2 2xl:pt-3 xl:text-base 2xl:text-xl">
                                    - Worked with Splunk Enterprise and <span className="text-[#00abf0]">UCC Framework</span> to build and deploy custom add-ons, enabling seamless <span className="text-[#00abf0]">data integration</span> and enhanced functionality.
                                </p>
                                <p className="xl:pt-1 2xl:pt-2 xl:text-base 2xl:text-xl"> - Designed interactive <span className="text-[#00abf0]">dashboards</span> with advanced visualizations and real-time drill-down features to provide actionable insights.</p>

                                <p className="xl:pt-1 2xl:pt-2 xl:text-base 2xl:text-xl"> - Developed and integrated <span className="text-[#00abf0]">Python scripts</span> to automate processes, customize data workflows, and extend Splunk&apos;s core capabilities.</p>

                                <p className="xl:pt-3 2xl:pt-5 xl:text-base 2xl:text-xl"><span className="font-semibold text-[#00abf0]">Skills: </span>Python, Splunk Enterprise, UCC Framework, Jira, BitBucket</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Experience
