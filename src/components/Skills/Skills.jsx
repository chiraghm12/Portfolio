import { useState } from "react"
import ProgrammingLanguageSkills from "./ProgrammingLanguageSkills"
import WebDevelopmentSkills from "./WebDevelopmentSkills"
import ToolsSkills from "./ToolsSkills"
import OtherSkills from "./OtherSkills"

function Skills() {

    const [skillTab, selectedSkillTab] = useState("ProgrammingLanguage")

    const skillTabs = [
        { id: "ProgrammingLanguage", label: "Programming Languages", content: <ProgrammingLanguageSkills /> },
        { id: "WebDevelopment", label: "Web Development", content: <WebDevelopmentSkills /> },
        { id: "Tools", label: "Tools", content: <ToolsSkills /> },
        { id: "Other", label: "Other", content: <OtherSkills /> }
    ]

    return (
        <>
            <div className='fixed top-0 left-0 h-screen w-full bg-[#081b29]'></div>
            <div className="relative text-white mt-5">
                <ul className="flex justify-between items-center gap-2 w-3/5 m-auto bg-[#00abf0] rounded-lg p-3">
                    {skillTabs.map((tab) => (
                        <li key={tab.id}>
                            <button
                                onClick={() => selectedSkillTab(tab.id)}
                                className={`p-2 rounded duration-300 ${
                                    skillTab === tab.id ? "bg-white text-[#081b29]" : "bg-transparent, text-white"
                                }`}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Skills
