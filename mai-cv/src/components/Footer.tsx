import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython, faTelegramPlane, faHtml5, faCss3, faJs
} from '@fortawesome/free-brands-svg-icons';
import {
  faBrain, faNetworkWired, faRobot, faLayerGroup, faCommentDots,
  faChartLine, faDatabase, faTasks, faCogs, faProjectDiagram,
  faBookOpen, faChartPie, faCode, faCodeBranch, faServer, faDesktop,
  faLaptopCode, faSitemap, faUsersCog, faClock, faLightbulb
} from '@fortawesome/free-solid-svg-icons';

const skillsData = {
  languages: [
    { icon: faPython, name: "Python" },
    { icon: faCode, name: "C++" },
    { icon: faHtml5, name: "HTML" },
    { icon: faCss3, name: "CSS" },
    { icon: faJs, name: "JavaScript" },
    { icon: faDatabase, name: "SQL" },
  ],
  frameworks: [
    { icon: faServer, name: "Flask / FastAPI" },
    { icon: faTelegramPlane, name: "TensorFlow" },
    { icon: faCogs, name: "NumPy" },
    { icon: faProjectDiagram, name: "Scikit-learn" },
    { icon: faBookOpen, name: "Jupyter Notebooks" },
    { icon: faChartPie, name: "Matplotlib / Seaborn" },
    { icon: faLaptopCode, name: "Full-Stack Development" },
  ],
  tools: [
    { icon: faCodeBranch, name: "Git / Version Control" },
    { icon: faDesktop, name: "Tkinter" },
    { icon: faSitemap, name: "UML & Software Design" },
    { icon: faUsersCog, name: "Agile Methodologies" },
    { icon: faClock, name: "Time Management" },
    { icon: faLightbulb, name: "Problem Solving" },
  ],
  ai: [
    { icon: faBrain, name: "Machine Learning" },
    { icon: faNetworkWired, name: "Deep Learning" },
    { icon: faRobot, name: "Artificial Intelligence" },
    { icon: faLayerGroup, name: "Neural Networks" },
    { icon: faCommentDots, name: "Natural Language Processing" },
    { icon: faChartLine, name: "Data Visualization" },
    { icon: faTasks, name: "Data Manipulation (Pandas)" },
  ],
};

const Footer = () => {



  const renderCategory = (title: string, skills: { icon: any; name: string }[]) => (
    <>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-6 text-center mb-8">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2 p-4 transition-transform duration-300 hover:scale-110 hover:text-blue-500">
            <FontAwesomeIcon icon={skill.icon} size="2x" />
            <p className="text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <footer className="w-full py-16 flex flex-col items-center bg-[#E4E0E0]">

      {/* Skills Section */}
      <section className="w-full max-w-6xl px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Skills & Tools</h2>
        {renderCategory("Languages", skillsData.languages)}
        {renderCategory("Frameworks / Libraries", skillsData.frameworks)}
        {renderCategory("Tools & Methodologies", skillsData.tools)}
        {renderCategory("AI & Data Science", skillsData.ai)}
      </section>

      <img src="/logo.svg" alt="Logo" className="w-full max-w-[450px] h-auto mb-8" />

  {/* Contact Section */}
  <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 text-gray-800">
    <a href="mailto:mai_mohsen02@hotmail.com" className="hover:text-blue-500">mai_mohsen02@hotmail.com</a>
    <span>|</span>
    <a href="tel:+447709865298" className="hover:text-blue-500">+44 7709 865298</a>
    <span>|</span>
    <a href="https://github.com/maik122" target="_blank" rel="noreferrer" className="hover:text-blue-500">GitHub</a>
    <span>|</span>
    <a href="https://www.linkedin.com/in/mai-k-30b040192/" target="_blank" rel="noreferrer" className="hover:text-blue-500">LinkedIn</a>
  </div>

  <p>@ 2026 MK Web-Solutions. All rights reserved.</p>
</footer>
  );
};

export default Footer;