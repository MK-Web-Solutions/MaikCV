export interface Project {
  id: number;
  title: string;
  type: "AI & ML" | "Data Science" | "Software" | "Embedded Systems";
  subType?: string;

  problem: string;
  solution: string;
  stack: string[];

  githubLink?: string;
}
export const projectsData: Project[] = [

  // ================= AI & ML =================

  {
    id: 1,
    type: "AI & ML",
    subType: "Machine Learning & Predictive Modelling",
    title: "Premier League Match Outcome Predictor",

    problem:
      "Football match outcomes are difficult to predict due to many interacting variables such as team form, historical performance, and match statistics.",

    solution:
      "Designed and evaluated multiple machine learning models (DNN, SVM, Random Forest) to predict match outcomes using historical Premier League data. Compared model performance using classification metrics to determine the most accurate approach.",

    stack: ["Python,", "Pandas,", "Scikit-learn,", "TensorFlow,", "Matplotlib"],

    githubLink:
      "https://github.com/maik122/Predicting-Premier-League-Match-Outcomes.git"
  },

  {
    id: 2,
    type: "AI & ML",
    subType: "Machine Learning & Predictive Modelling",
    title: "Engine Anomaly Detection & RUL Prediction",

    problem:
      "Unexpected aircraft engine failures are costly and dangerous. Predicting Remaining Useful Life (RUL) enables preventative maintenance.",

    solution:
      "Built a GRU-based recurrent neural network using the NASA turbofan dataset to model time-series degradation patterns. Predicted RUL and identified early-stage anomalies before failure thresholds.",

    stack: ["Python,", "TensorFlow,", "GRU,", "Pandas,", "NumPy"],

    githubLink:
      "https://github.com/maik122/EngineAnomalyDetection"
  },

  {
    id: 3,
    type: "AI & ML",
    subType: "Computer Vision & Deep Learning",
    title: "Traffic Violation Detection (In Progress)",

    problem:
      "Manual monitoring of traffic violations through CCTV footage is inefficient and prone to human error.",

    solution:
      "Developing a YOLOv8-based computer vision system capable of real-time object detection and classification to identify traffic violations from CCTV streams.",

    stack: ["Python,", "YOLOv8,", "OpenCV,", "PyTorch,"],

    githubLink:
      "https://github.com/maik122/Traffic-Violation-Detection.git"
  },

  {
    id: 4,
    type: "AI & ML",
    subType: "Natural Language Processing & AI Applications",
    title: "Job Keyword Matcher",

    problem:
      "Job applicants often struggle to identify missing skills or alignment gaps between their CV and job descriptions.",

    solution:
      "Built an NLP-based Streamlit application that compares CVs against job postings using TF-IDF vectorisation and semantic analysis to rank relevance and highlight skill gaps.",

    stack: ["Python,", "spaCy,", "Scikit-learn,", "TF-IDF,", "Streamlit"],

    githubLink:
      "https://github.com/maik122/Job-Keyword-Matcher.git"
  },

  // ================= Data Science =================

  {
    id: 5,
    type: "Data Science",
    subType: "Data Analysis & Exploratory Projects",
    title: "Netflix Movies & TV Shows EDA",

    problem:
      "Large streaming datasets contain hidden trends in content production, ratings, and regional distribution that are difficult to interpret without structured analysis.",

    solution:
      "Performed exploratory data analysis on 8,800+ Netflix titles. Cleaned the dataset, analysed genre and regional patterns, and created visualisations to uncover trends in content strategy.",

    stack: ["Python,", "Pandas,", "Matplotlib,", "Seaborn,"],

    githubLink:
      "https://github.com/maik122/Edulumos/tree/main/NetflixEDA"
  },

  {
    id: 6,
    type: "Data Science",
    subType: "Machine Learning & Predictive Modelling",
    title: "Customer Segmentation — Mall Customers",

    problem:
      "Retail businesses struggle to personalise marketing strategies without clear customer segmentation.",

    solution:
      "Applied K-Means and DBSCAN clustering algorithms to segment mall customers based on purchasing behaviour. Visualised clusters to support targeted marketing strategies.",

    stack: ["Python,", "Scikit-learn,", "Pandas,", "Matplotlib,", "Seaborn,"],

    githubLink:
      "https://github.com/maik122/Elevvo/tree/main/CustomerSegmentation"
  },

  // ================= Software =================

  {
    id: 15,
    type: "Software",
    subType: "Web Development",
    title: "Football Player Transfer Value Website",

    problem:
      "Estimating football player market value requires combining statistical analysis with an accessible interface for users.",

    solution:
      "Developed a Flask-based web application with SQLite database integration, user authentication, dashboards, and predictive valuation features.",

    stack: ["Python,", "Flask,", "SQLite,", "HTML,", "CSS,"],

    githubLink:
      "https://github.com/maik122/football-player-transfer-value"
  },

  {
    id: 16,
    type: "Software",
    subType: "Software Development",
    title: "UK Railway System",

    problem:
      "Train booking systems require structured scheduling, seat management, and user/admin interfaces for efficient operation.",

    solution:
      "Built a desktop-based railway booking system using Tkinter, featuring user ticket booking, schedule management, and administrative controls.",

    stack: ["Python,", "Tkinter"],

    githubLink:
      "https://github.com/maik122/UK-railway-system"
  },

  {
    id: 17,
    type: "Software",
    subType: "Web Development",
    title: "Hotel Booking Website",

    problem:
      "Hotels require a streamlined system to manage bookings, users, and administrative operations.",

    solution:
      "Developed a full-stack Flask application with SQLAlchemy for database management, enabling user authentication, booking management, and admin dashboards.",

    stack: ["Python,", "Flask,", "SQLAlchemy,", "HTML,", "CSS,"],

    githubLink:
      "https://github.com/maik122/Hotel-booking-website"
  },

  {
    id: 18,
    type: "Software",
    subType: "Web Development",
    title: "Personal Portfolio Website",

    problem:
      "Developers need a structured platform to present projects, skills, and contact information professionally.",

    solution:
      "Built a responsive React-based portfolio website showcasing projects, experience, and technical skills with modern UI design.",

    stack: ["React,", "TypeScript,", "Tailwind CSS,", "Vite"],

    githubLink:
      "https://github.com/maik122/Personal-Portfolio-Website"
  },

  {
    id: 19,
    type: "Software",
    subType: "Web Development",
    title: "Artist Showreel Website",

    problem:
      "Artists require a digital platform to showcase their work and connect with potential clients.",

    solution:
      "Developed a full-stack React and Node.js application allowing content management, portfolio display, and client communication features.",

    stack: ["React,", "TypeScript,", "Tailwind CSS,", "Vite"],
  },

  {
    id: 20,
    type: "Software",
    subType: "Software Development",
    title: "MIDI Composition Tool",

    problem:
      "Composers often struggle with generating harmonically consistent chord progressions quickly within DAWs.",

    solution:
      "Created a MIDI chord-generation tool for Logic Pro using the Scripter plugin, enabling fast, key-consistent chord creation directly inside the DAW workflow.",

    stack: ["JavaScript,", "Logic Pro Scripter,", "MIDI,"]
  },

  // ================= Embedded Systems =================

  {
    id: 30,
    type: "Embedded Systems",
    subType: "Music Tech / Hardware",
    title: "Custom MIDI Controller",

    problem:
      "Off-the-shelf MIDI controllers often lack custom workflow features required for specific composition and performance needs.",

    solution:
      "Designed and built a standalone custom MIDI controller using a microcontroller and custom hardware inputs for studio and live performance integration.",

    stack: ["Microcontroller,", "C ++,", "MIDI Protocol,", "Hardware Prototyping,"]
  }
];