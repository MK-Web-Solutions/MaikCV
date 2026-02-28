export interface Project {
  id: number;
  title: string;
  type: "AI & ML" | "Data Science" | "Software" | "Embedded Systems";
  subType?: string;
  summary: string;
  details?: string;
  githubLink?: string;
  //images?: { src: string; caption: string }[];
}

export const projectsData: Project[] = [
  // AI & ML
  {
    id: 1,
    type: "AI & ML",
    subType: "Machine Learning & Predictive Modelling",
    title: "Premier League Match Outcome Predictor",
    summary: "Forecasted match outcomes using DNN, SVM, and Random Forest models.",
    githubLink: "https://github.com/maik122/Predicting-Premier-League-Match-Outcomes.git",
    details: "Built and trained DNN, SVM, and Random Forest models with Python, scikit-learn, TensorFlow, and pandas."
  },
  {
    id: 2,
    type: "AI & ML",
    subType: "Machine Learning & Predictive Modelling",
    title: "Engine Anomaly Detection & RUL Prediction",
    summary: "Forecasted engine issues in advance using GRU-based models.",
    githubLink: "https://github.com/maik122/EngineAnomalyDetection",
    details: "GRU neural network on NASA Turbofan Engine Degradation dataset for Remaining Useful Life (RUL) prediction."
  },
  {
    id: 3,
    type: "AI & ML",
    subType: "Computer Vision & Deep Learning",
    title: "Traffic Violation Detection (In Progress)",
    summary: "YOLOv8 model for real-time detection and classification of traffic violations.",
    githubLink: "https://github.com/maik122/Traffic-Violation-Detection.git",
    details: "Developing YOLOv8-based vision model for CCTV-based traffic violation detection."
  },
  {
    id: 4,
    type: "AI & ML",
    subType: "Natural Language Processing & AI Applications",
    title: "Job Keyword Matcher",
    summary: "NLP tool analysing CVs vs job postings to identify skill gaps and rank fit.",
    githubLink: "https://github.com/maik122/Job-Keyword-Matcher.git",
    details: "Streamlit app using spaCy and TF-IDF vectorisation for CV-job description analysis."
  },

  // Data Science
  {
    id: 5,
    type: "Data Science",
    subType: "Data Analysis & Exploratory Projects",
    title: "Netflix Movies & TV Shows EDA",
    summary: "Explored 8,800+ titles to identify trends in genres, ratings, and regions.",
    githubLink: "https://github.com/maik122/Edulumos/tree/main/NetflixEDA",
    details: "Cleaned and analysed dataset; created visualisations for insights."
  },
  {
    id: 6,
    type: "Data Science",
    subType: "Machine Learning & Predictive Modelling",
    title: "Customer Segmentation — Mall Customers",
    summary: "Segmented customers using K-Means and DBSCAN for targeted marketing.",
    githubLink: "https://github.com/maik122/Elevvo/tree/main/CustomerSegmentation",
    details: "Applied clustering and visualised customer segments with matplotlib/seaborn."
  },

  // Software
  {
    id: 15,
    type: "Software",
    subType: "Web Development",
    title: "Football Player Transfer Value Website",
    summary: "Flask + SQLite app with dashboards and charts for player valuation.",
    githubLink: "https://github.com/maik122/football-player-transfer-value",
    details: "User auth, prediction dashboards, admin interface."
  },
  {
    id: 16,
    type: "Software",
    subType: "Software Development",
    title: "UK Railway System",
    summary: "Tkinter-based booking system with user/admin interfaces.",
    githubLink: "https://github.com/maik122/UK-railway-system",
    details: "Streamlined train booking system with schedule management."
  },
  {
    id: 17,
    type: "Software",
    subType: "Web Development",
    title: "Hotel Booking Website",
    summary: "Full-stack web app for reservations, admin management, and CRUD operations.",
    githubLink: "https://github.com/maik122/Hotel-booking-website",
    details: "Flask + SQLAlchemy platform with user auth, booking management, admin dashboards."
  },
  {
    id: 18,
    type: "Software",
    subType: "Web Development",
    title: "Personal Portfolio Website",
    summary: "React-based portfolio showcasing projects, skills, and contact info.",
    githubLink: "https://github.com/maik122/Personal-Portfolio-Website"
  },
  {
    id: 19,
    type: "Software",
    subType: "Web Development",
    title: "Artist Showreel Website",
    summary: "Full-stack React + Node.js site for artist to showcase work and connect with clients."
  },
  {
    id: 20,
    type: "Software",
    subType: "Software Development",
    title: "MIDI Composition Tool",
    summary: "Fast, key-consistent chord generation tool for Logic Pro using Scripter plugin."
  },

  // Embedded Systems
  {
    id: 30,
    type: "Embedded Systems",
    subType: "Music Tech / Hardware",
    title: "Custom MIDI Controller",
    summary: "Designed and built a custom MIDI controller for composition and performance.",
    details: "Standalone hardware with microcontroller and custom inputs for live and studio use."
  }
];