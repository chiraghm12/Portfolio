import { useState } from "react"
import ProgrammingLanguageSkills from "./ProgrammingLanguageSkills"
import WebDevelopmentSkills from "./WebDevelopmentSkills"
import ToolsSkills from "./ToolsSkills"
import OtherSkills from "./OtherSkills"

function Skills() {

    const [skillTab, selectedSkillTab] = useState("ProgrammingLanguage")

    const skillTabs = [
        { id: "ProgrammingLanguage", label: "Programming Languages", content: ProgrammingLanguageSkills},
        { id: "WebDevelopment", label: "Web Development", content: WebDevelopmentSkills},
        { id: "Tools", label: "Tools", content: ToolsSkills},
        { id: "Other", label: "Other", content: OtherSkills}
    ]

    // Find the selected skill component
    const SelectedComponent = skillTabs.find(tab => tab.id === skillTab)?.content;

    return (
        <>
            <div className='fixed top-0 left-0 h-screen w-full bg-[#081b29]'></div>
            <div className="relative text-white mt-5">
                <ul className="flex justify-between items-center gap-2 w-3/5 m-auto bg-[#00abf0] rounded-xl p-3">
                    {skillTabs.map((tab) => (
                        <li key={tab.id}>
                            <button
                                onClick={() => selectedSkillTab(tab.id)}
                                className={`p-2 rounded-lg duration-300 ease-in-out transition-all px-5 text-lg hover:bg-white hover:text-[#081b29] ${
                                    skillTab === tab.id ? "bg-white text-[#081b29]" : "bg-transparent, text-white"
                                }`}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Render only the selected skill component */}
                <div className="mt-5">
                    {SelectedComponent && <SelectedComponent />}
                </div>
            </div>
        </>
    )
}

export default Skills
