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

// Languages data in JSON format - can be fetched from backend
const languagesData = [
  { name: "C", icon: "SiC", level: "Intermediate" },
  { name: "C++", icon: "SiCplusplus", level: "Intermediate" },
  { name: "Python", icon: "FaPython", level: "Advanced" },
  { name: "JavaScript", icon: "FaJs", level: "Advanced" },
  { name: "Java", icon: "FaJava", level: "Beginner" },
];

export default function Language() {
  // To fetch from backend, replace languagesData with:
  // const [languages, setLanguages] = useState([]);
  // useEffect(() => {
  //   fetch('/api/languages')
  //     .then(res => res.json())
  //     .then(data => setLanguages(data));
  // }, []);

  return (
    <div className="mt-8 md:mt-20">
      <h3 className="text-lg md:text-3xl font-bold mb-4 md:mb-10 text-center">Programming Languages</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-6">
        {languagesData.map((language, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 md:p-6 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-all cursor-pointer group"
          >
            <div className="flex flex-col items-center text-center gap-1.5 md:gap-3">
              <div className="text-3xl md:text-6xl text-blue-600 group-hover:text-indigo-600 transition-colors">
                {getIcon(language.icon)}
              </div>
              <h4 className="text-xs md:text-lg font-bold text-gray-800">{language.name}</h4>
              <span className="text-[9px] md:text-xs text-gray-500 bg-white px-1.5 py-0.5 md:px-2 md:py-1 rounded-full">
                {language.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
