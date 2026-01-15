import { Github, Linkedin, Mail } from "lucide-react";

export const PROFILE = {
    name: "Adil Shaik",
    role: "Software Engineer Associate",
    tagline: "Transforming Complex Logic into Seamless Experiences.",
    subtext: "Specializing in Intelligent Automation and Enterprise Solutions at Infor.",
    location: "Ongole, INDIA",
    email: "adilsssha119@gmail.com",
    phone: "8341740523",
    socials: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/adil-shaik-19aa83237",
            icon: Linkedin,
        },
        {
            name: "GitHub",
            url: "https://github.com/sadil33",
            icon: Github,
        },
        {
            name: "Email",
            url: "mailto:adilsssha119@gmail.com",
            icon: Mail,
        },
    ],
    about: {
        title: "About Me",
        text: "I am a results-driven Software Engineer Associate passionate about bridging the gap between complex enterprise logic and seamless user experiences. With deep expertise in **Angular**, **Java**, and **H5 Scripting**, I specialize in transforming rigid ERP systems into flexible, user-centric solutions. Beyond traditional development, I am pioneering **Intelligent Automation** initiatives, leveraging **UiPath** and **Generative AI** to drive operational efficiency. My goal is simple: to build software that not only works flawlessly but empowers the people who use it.",
        stats: [
            { label: "Experience", value: "2+ Years" }, // Aug 2023 - Present
            { label: "Projects", value: "3+" },
            { label: "CGPA", value: "8.7" },
        ]
    },
    skills: [
        { category: "Frontend", items: ["Angular", "React", "TypeScript", "Tailwind CSS", "H5 Scripting"] },
        { category: "Automation & AI", items: ["UiPath (RPA)", "Generative AI", "Python", "Automation", "Orchestrator"] },
        { category: "Backend & Systems", items: ["Java", "Infor M3", "Infor IDM", "SQL", "Node.js"] },
        { category: "Tools", items: ["Git", "VS Code", "Infor ION", "Agile"] },
    ]
};
