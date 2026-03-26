import SelectedWorks from './SelectedWorks';
import PageWrapper from '../components/PageWrapper';

import mkWebLogo from '/images/MKWebSolutions.jpg';
import omnichunkLogo from '/images/Omnichunk_Logo.png';
// import eduLumosLogo from '/images/EduLumous_Logo.jpeg';
import elevvoLogo from '/images/elevvopaths_logo.jpeg';

const timelineData = [
{
    date: "Dec 2025 - Present",
    title: "AI Model Evaluation Engineer — Omnichunk",
    logo: omnichunkLogo,
    details: [
      "Part-time",
      "Accelerated model selection decisions by designing an evaluation framework that benchmarked  LLMs across a structured test suite",
      "Reduced manual evaluation time significantly by automating repeatable testing workflows using Python",
      "Enabled data-driven scaling decisions by analysing model outputs and producing structured comparison reports"
    ]
  },
  {
    date: "Jun 2024 - Present",
    title: "Full-Stack Web Developer — MK Web-Solutions",
    logo: mkWebLogo,
    details: [
      "Freelance",
      "Delivered responsive, production-ready web applications for clients by building end-to-end solutions using React, Vite, and Tailwind CSS",
      "Improved application reliability and performance by integrating frontend, backend, and database layers into cohesive full-stack architectures",
      "Increased client satisfaction by translating bespoke requirements into optimised, scalable web products"
    ]
  },
  {
    date: "Aug 2025 - Oct 2025",
    title: "Machine Learning Engineer — Elevvo",
    logo: elevvoLogo,
    details: [
      "Project-Based Internship",
      "Built production-ready ML models across 6 domains — regression, classification, clustering, recommendation, time-series, and audio classification — by completing end-to-end projects from raw data to evaluated output",
      "Improved model accuracy and generalisation by applying feature engineering and systematic hyperparameter tuning across each project",
      "Demonstrated full ML pipeline ownership by independently managing data ingestion, preprocessing, training, and evaluation with no supervision"
    ]
  }
];

const HomePage: React.FC = () => {


  return (
    <PageWrapper>
      <div className="w-full relative">
{/* Hero Section */}
<section className="w-full bg-[#E4E0E0] flex flex-col lg:flex-row items-center justify-center min-h-[80vh] lg:min-h-[90vh] p-6">

  {/* GIF Side */}
  <div className="w-full lg:w-3/5 flex items-center justify-center">
  <br />
<img
  src="/wave.gif"
  alt="Waving animation"
  className="w-[90%] max-w-[800px] h-auto object-contain animate-float mt-[50px]"
/>
  </div>

  {/* Text Side */}
  <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start justify-center mt-6 lg:mt-0">
    <h1
      className="text-white font-extrabold leading-tight text-center lg:text-left mb-6"
      style={{
        fontSize: "clamp(3rem, 8vw, 10rem)"
      }}
    >
      Hi, I am <span className="text-blue-500">Mai</span>!
    </h1>

    {/* Biography */}
    <p className="font-normal text-[28px] md:text-[34px] leading-[140%] text-[#565656] max-w-[650px] text-center lg:text-left">
Computer Science graduate specialising in AI and machine learning. I build end-to-end data projects , from collecting and cleaning real-world data to training models and deploying production-ready applications,
I'm actively looking for roles in machine learning or data science where I can keep building things that matter.    </p>
  </div>
{/* Line Under Hero */}
<div className="w-full flex justify-center mt-6 pb-[20px] pt-[20px]">
  <div className="w-1/2 border-t-2 border-gray-400 "></div>
</div>
</section>



{/* Experience Section */}
<section id="experience" className="w-full py-16 bg-[#E4E0E0] flex flex-col items-center">
  {/* Section Title */}
  <h2 className="text-4xl md:text-5xl font-bold text-[#3C3D37] mb-12"
        style={{
        fontSize: "clamp(3rem, 8vw, 10rem)"
      }}
    >Experience</h2>

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
        <h1 className="text-center font-extrabold text-4xl mb-8"
            style={{
        fontSize: "clamp(3rem, 8vw, 10rem)"
      }}
    >Projects</h1>
    
    
    
</section>


        <SelectedWorks />
      </div>
    </PageWrapper>
  );
};

export default HomePage;