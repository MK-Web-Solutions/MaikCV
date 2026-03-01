import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type Project, projectsData } from "../data/projectsData";

const ProjectCard = ({ project, onOpen }: { project: Project; onOpen: () => void }) => {
  //const thumbnail = project.images?.[0]?.src || "/placeholder.png";
  return (
    <div
      style={{ color: "white" }}
      className="min-w-[220px] w-[220px] h-[300px] rounded-[20px] overflow-hidden p-4 flex flex-col justify-between cursor-pointer transition duration-200 hover:bg-[#3C3D37] hover:-translate-y-1"
      onClick={onOpen}
    >
      <div className="w-full h-[180px] overflow-hidden rounded-[15px]">
        {/* <img src={thumbnail} alt={project.title} className="w-full h-full object-cover" /> */}
      </div>
      <div className="mt-4 flex flex-col items-center text-center">
        <h3 className="font-bold text-base leading-tight line-clamp-2">{project.title}</h3>
      </div>
    </div>
  );
};

const SelectedWorks = () => {
  const [openCard, setOpenCard] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("AI & ML");
  const modalRef = useRef<HTMLDivElement>(null);

  const tabs = ["AI & ML", "Data Science", "Software", "Embedded Systems"];
  const currentProject = projectsData.find((p: Project) => p.title === openCard);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenCard(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpenCard(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [modalRef]);

  const displayedProjects = projectsData.filter((p) => p.type === activeTab);

  // Group projects by subType
  const groupedProjects: Record<string, Project[]> = {};
  displayedProjects.forEach((p) => {
    const key = p.subType || "Other";
    if (!groupedProjects[key]) groupedProjects[key] = [];
    groupedProjects[key].push(p);
  });

  return (
    <div className="bg-[#1D2124] flex flex-col gap-12 py-16" style={{ color: "white" }}>

{/* Tabs */}
<div className="flex justify-center gap-4 mb-12">
  {tabs.map((tab) => (
    <motion.button
      key={tab}
      onClick={() => setActiveTab(tab)}
      whileHover={{ scale: 1.05 }}          // Grow a bit on hover
      whileTap={{ scale: 0.95 }}            // Shrink slightly when clicked
      transition={{ type: "spring", stiffness: 300 }}
      className={`px-6 py-2 rounded-full font-medium
        ${activeTab === tab
          ? "bg-white text-black"
          : "bg-[#E4E0E0] text-black hover:bg-[#C0BEBE]"} 
      `}
    >
      {tab}
      {/* Optional: animated underline */}
      <motion.div
        layoutId="underline"
        className={`h-[2px] bg-black mt-1 rounded`}
        style={{ opacity: activeTab === tab ? 1 : 0 }}
      />
    </motion.button>
  ))}
</div>
      {/* Projects grouped by subType */}
      {Object.keys(groupedProjects).map((subType) => (
        <div key={subType}>
<h2 className="text-2xl font-bold mb-4 text-center">{subType}</h2>          <div className="overflow-x-auto w-full scroll-smooth px-4">
            <div className="flex gap-[54px] snap-x snap-mandatory">
              {groupedProjects[subType].map((project, index) => (
                <div
                  key={project.id}
                  className={`flex-shrink-0 snap-center ${
                    index === 0 ? "ml-auto" : ""
                  } ${index === groupedProjects[subType].length - 1 ? "mr-auto" : ""}`}
                >
                  <ProjectCard project={project} onOpen={() => setOpenCard(project.title)} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Fullscreen modal */}
      <AnimatePresence>
        {currentProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ color: "white" }}
          >
<motion.div
  ref={modalRef}
  className="bg-[#2C2F33] rounded-[20px] shadow-2xl flex flex-col p-8"
  style={{
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "clamp(320px, 65vw, 950px)",
    maxHeight: "85vh",
  }}
>
  <div className=" flex-1 overflow-y-auto">
              {/*
              {currentProject.images && currentProject.images.length > 0 && (
                <div className="w-full overflow-hidden relative">
                  <img
                    src={currentProject.images[0].src}
                    alt={currentProject.images[0].caption}
                    className="w-full h-[400px] object-cover"
                  />
                  <p className="text-sm mt-1 text-center">{currentProject.images[0].caption}</p>
                </div>
              )} */}
<h2 className="text-3xl font-bold mb-6 text-center">  
  {currentProject.title}
</h2>

{/* Problem */}
<div className="mb-6">
  <h3 className="text-lg font-semibold mb-2 text-gray-300">Problem</h3>
  <p className="text-gray-200 leading-relaxed">
    {currentProject.problem}
  </p>
</div>

{/* Solution */}
<div className="mb-6">
  <h3 className="text-lg font-semibold mb-2 text-gray-300">Solution</h3>
  <p className="text-gray-200 leading-relaxed">
    {currentProject.solution}
  </p>
</div>



{/* Tech Stack */}
<div className="mb-6">
  <h3 className="text-lg font-semibold mb-3 text-gray-300">Tech Stack</h3>
<div className="flex flex-wrap gap-3 mt-2">
  {currentProject.stack.map((tech, i) => (
    <span
      key={i}
      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-white"
    >
      {tech}
    </span>
  ))}
</div>
</div>

{/* GitHub Link */}
{currentProject.githubLink && (
  <a
    href={currentProject.githubLink}
    target="_blank"
    rel="noreferrer"
    className="inline-block mt-2 text-white underline hover:text-gray-300"
    style={{color: "#E4E0E0",marginTop: "20px",marginBottom: "10px"}}
  >
    View Project on GitHub →
  </a>
)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectedWorks;