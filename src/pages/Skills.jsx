import SkillCard from "../Components/SkillCard";
import Language from "../Components/Language";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as DiIcons from "react-icons/di";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io5";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";

// Helper function to dynamically get any icon from react-icons
const getIcon = (iconName) => {
  // Check all icon libraries
  const IconComponent = 
    FaIcons[iconName] ||
    SiIcons[iconName] ||
    AiIcons[iconName] ||
    BiIcons[iconName] ||
    BsIcons[iconName] ||
    DiIcons[iconName] ||
    GiIcons[iconName] ||
    IoIcons[iconName] ||
    MdIcons[iconName] ||
    RiIcons[iconName];
  
  // Return the icon component or a default code icon
  return IconComponent ? <IconComponent /> : <FaIcons.FaCode />;
};

// Skills data in JSON format - can be fetched from backend
const skillsData = [
  {
    id: 1,
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: "FaHtml5" },
      { name: "CSS", icon: "FaCss3Alt" },
      { name: "JavaScript", icon: "FaJs" },
      { name: "React", icon: "FaReact" }
    ]
  },
  {
    id: 2,
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: "FaNode" },
      { name: "Express", icon: "SiExpress" },
      { name: "MongoDB", icon: "SiMongodb" }
    ]
  },
  {
    id: 3,
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: "FaGitAlt" },
      { name: "VS Code", icon: "FaCode" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" }
    ]
  },


];

export default function Skills() {
  // To fetch from backend, replace skillsData with:
  // const [skills, setSkills] = useState([]);
  // useEffect(() => {
  //   fetch('/api/skills')
  //     .then(res => res.json())
  //     .then(data => setSkills(data));
  // }, []);

  return (
    <section className="bg-white py-8 md:py-20 px-3 md:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-10 text-center"> <br></br></h2>
        
        {/* Interactive Timeline View */}
        <div className="mt-4 md:mt-10">
          <ul className="timeline timeline-snap-icon timeline-vertical lg:timeline-horizontal">
            {skillsData.map((category, index) => (
              <li key={category.id}>
                {index !== 0 && <hr className="bg-blue-500" />}
                <div className="timeline-middle">
                  <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3 w-3 md:h-5 md:w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? 'timeline-start' : 'timeline-end'} mb-4 md:mb-10`}>
                  <div className="text-sm md:text-lg font-black mb-1.5 md:mb-2">{category.title}</div>
                  <div className="bg-gray-100 p-2 md:p-4 rounded-lg shadow-sm md:shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex flex-wrap gap-1.5 md:gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex}
                          className="flex items-center gap-1 md:gap-2 bg-white px-2 py-1 md:px-3 md:py-2 rounded-full shadow-sm hover:scale-110 transition-transform cursor-pointer"
                        >
                          <span className="text-blue-500 text-sm md:text-xl">
                            {getIcon(skill.icon)}
                          </span>
                          <span className="text-[10px] md:text-sm font-medium">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {index !== skillsData.length - 1 && <hr className="bg-blue-500" />}
              </li>
            ))}
          </ul>
        </div>

        {/* Programming Languages Section */}
        <Language />
      </div>
    </section>
  );
}
