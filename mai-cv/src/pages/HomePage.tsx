import { useState, useRef, useEffect } from "react";
import SelectedWorks from './SelectedWorks';
import PageWrapper from '../components/PageWrapper';

import mkWebLogo from '/images/MKWebSolutions.jpg';
import omnichunkLogo from '/images/Omnichunk_Logo.png';
import eduLumosLogo from '/images/EduLumous_Logo.jpeg';
import elevvoLogo from '/images/elevvopaths_logo.jpeg';

const timelineData = [
  {
    date: "Dec 2025 - Present",
    title: "AI Model Evaluation Engineer — Omnichunk",
    logo: omnichunkLogo,
    details: [
      "Volunteer / Part-time",
      "Designed evaluation framework to benchmark large language models",
      "Automated repeatable testing using Python, saving ~20 hours/week",
      "Analysed outputs and produced reports for model selection"
    ]
  },
  {
    date: "Jun 2024 - Present",
    title: "Full-Stack Web Developer — MK Web-Solutions",
    logo: mkWebLogo,
    details: [
      "Freelance",
      "Developed dynamic websites and web apps using HTML, CSS, JS, Python (Flask/Django)",
      "Built end-to-end solutions including frontend, backend, and database integration",
      "Delivered client-specific projects with responsive design and performance optimisation"
    ]
  },

  {
    date: "Oct 2025 - Nov 2025",
    title: "Data Scientist — EduLumos",
    logo: eduLumosLogo,
    details: [
      "Internship",
      "Performed data analysis, visualisation, and ML workflows",
      "Explored real-world datasets, trained models, and produced insights"
    ]
  },
  {
    date: "Aug 2025 - Sep 2025",
    title: "Machine Learning Engineer — Elevvo",
    logo: elevvoLogo,
    details: [
      "Internship",
      "Worked on 10+ end-to-end ML projects: regression, clustering, classification, recommendations",
      "Gained experience in time series and audio classification tasks"
    ]
  }
];

const HomePage: React.FC = () => {
  const [openCard, setOpenCard] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close expanded card on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpenCard(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenCard(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <PageWrapper>
      <div className="w-full relative">

        {/* Hero Section */}
        <section className="w-full h-screen flex bg-[#E4E0E0]">
          <div className="w-1/2 h-full flex items-center justify-center">
            <img
              src="/wave.gif"
              alt="Waving animation"
              className="w-[80%] h-auto lg:w-[90%] object-contain animate-float"
            />
          </div>
          <div className="w-1/2 h-full flex items-center justify-center">
            <h1 className="text-white text-[90px] md:text-[110px] lg:text-[140px] xl:text-[160px] font-bold leading-[1.1] text-left">
              Hi, I am <span className="text-blue-500">Mai</span>!
            </h1>
          </div>
        </section>

        {/* Biography Section */}
        <section className="relative w-full bg-[#E4E0E0] py-14 flex flex-col items-center">
          <h2 className="font-semibold text-[60px] leading-[73px] capitalize text-black mb-8">About Me</h2>
          <p className="font-normal text-[34px] leading-[140%] text-[#565656] max-w-[1150px] text-center mb-12">
            I’m a computer science graduate fascinated by AI and machine learning. I love turning data into insights and building projects that solve real problems, from predicting football matches to creating recommendation systems. Always exploring new tech and pushing my skills further.
          </p>

          {/* Experience Section */}
<section id="experience" className="w-full py-20 bg-gray-50 flex flex-col items-center">
  <div className="timeline relative w-full max-w-[1000px]">

    {/* Vertical Line */}
    <div className="absolute left-1/2 top-0 h-full w-1 bg-[#697565] transform -translate-x-1/2 z-0"></div>

    {timelineData.map((item, idx) => {
      const isOdd = idx % 2 === 0;

      return (
        <div
          key={idx}
          className={`timeline-item relative w-1/2 px-6 mb-12 ${isOdd ? 'left-0 text-right' : 'left-1/2 text-left'}`}
        >
 

          {/* Card */}
          <div className="timeline-content bg-white p-6 rounded-lg shadow-md max-w-[400px] inline-block relative z-20 hover:translate-y-[-3px] transition-transform">
            <div className="timeline-date font-bold text-[#3C3D37] mb-2">{item.date}</div>
                <img
                    src={item.logo}
                    alt={`${item.title} logo`}
                    className="w-20 h-20 object-contain mb-2 flex-shrink-0"
                    style={{ width: "48px", height: "48px" }}
                  />     
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <ul className="list-disc list-inside text-gray-700">
              {item.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        </div>
      )
    })}

  </div>
</section>
        </section>


        <SelectedWorks />
      </div>
    </PageWrapper>
  );
};

export default HomePage;