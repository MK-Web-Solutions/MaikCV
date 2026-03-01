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
      "Predicting match outcomes requires modelling complex, interacting performance variables across teams and seasons.",

    solution:
      "Developed and benchmarked multiple classification models including SVM, Random Forest, and deep neural networks. Engineered performance features from historical data and evaluated models using precision, recall, and cross-validation to identify the most robust predictive approach.",

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
      "Reactive maintenance increases operational cost and failure risk in industrial systems.",

    solution:
      "Designed a GRU-based recurrent neural network to model degradation patterns in  engine time-series data. Implemented sequence modelling and early anomaly detection to estimate remaining useful life prior to failure thresholds.",

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
      "Manual CCTV monitoring is inconsistent and does not scale.",

    solution:
      "Building a real-time object detection pipeline using YOLOv8 and OpenCV. The system identifies vehicles and rule violations directly from video streams, optimised for inference speed and detection accuracy.",

    stack: ["Python,", "YOLOv8,", "OpenCV,", "PyTorch,"],

    githubLink:
      "https://github.com/maik122/"
  },

  {
    id: 4,
    type: "AI & ML",
    subType: "Natural Language Processing & AI Applications",
    title: "Job Keyword Matcher",

    problem:
      "Applicants struggle to quantify CV alignment with job specifications.",

    solution:
      "Developed an NLP pipeline using TF-IDF and semantic similarity scoring to rank CV-job relevance. Deployed via Streamlit for interactive comparison and automated skill-gap highlighting.",

    stack: ["Python,", "spaCy,", "Scikit-learn,", "TF-IDF,", "Streamlit"],

    githubLink:
      "https://github.com/maik122/"
  },
  {
  id: 34,
  type: "AI & ML",
  subType: "Recommendation Systems",
  title: "Movie Recommendation System",

  problem:
    "Users face content overload without personalised filtering.",

  solution:
    "Implemented collaborative filtering with similarity scoring and matrix factorisation. Generated ranked recommendations using user-item interaction matrices and cosine similarity optimisation.",

  stack: ["Python,", "Pandas,", "NumPy,", "Scikit-learn,", "Matplotlib"],
  githubLink:
    "https://github.com/maik122/Elevvo.git"
},
{
  id: 35,
  type: "AI & ML",
  subType: "Computer Vision & Deep Learning",
  title: "Music Genre Classification",

  problem:
    "Audio signals contain complex frequency patterns not captured by raw metadata.",

  solution:
    "Extracted MFCC features and spectrogram representations. Built CNN-based classifiers and experimented with transfer learning to improve multi-class genre prediction performance..",

  stack: ["Python,", "TensorFlow,", "Keras,", "Librosa,", "OpenCV"],
  githubLink:
    "https://github.com/maik122/Elevvo.git"
},
{
  id: 37,
  type: "AI & ML",
  subType: "Computer Vision & Deep Learning",
  title: "Traffic Sign Recognition",

  problem:
    "Autonomous systems require reliable visual classification under varying environmental conditions.",

  solution:
    "Trained convolutional neural networks on augmented traffic sign datasets. Compared custom architectures with MobileNet-based transfer learning to improve generalisation accuracy.",

  stack: ["Python,", "TensorFlow,", "Keras,", "OpenCV"],   
  githubLink:
    "https://github.com/maik122/Elevvo.git"
},
  // ================= Data Science =================

  {
    id: 5,
    type: "Data Science",
    subType: "Data Analysis & Exploratory Projects",
    title: "Netflix Movies & TV Shows EDA",

    problem:
      "Large content libraries obscure strategic production and distribution trends.",

    solution:
      "Performed structured exploratory analysis on 8,800+ titles. Cleaned and transformed data, identified genre distribution patterns, and visualised regional and temporal production trends to extract actionable insights.",

    stack: ["Python,", "Pandas,", "Matplotlib,", "Seaborn,"],

    githubLink:
      "https://github.com/maik122/EDULUMOS-INTERSHIP-TASKS.git"
  },

  {
    id: 6,
    type: "Data Science",
    subType: "Machine Learning & Predictive Modelling",
    title: "Customer Segmentation — Mall Customers",

    problem:
      "Generic marketing reduces targeting efficiency.",

    solution:
      "Applied K-Means and DBSCAN clustering after feature scaling to segment customers by income and spending behaviour. Analysed cluster profiles to support targeted campaign strategies.",

    stack: ["Python,", "Scikit-learn,", "Pandas,", "Matplotlib,", "Seaborn,"],

    githubLink:
      "https://github.com/maik122/Elevvo.git"
  },
{
  id: 31,
  type: "Data Science",
  subType: "Machine Learning & Predictive Modelling",
  title: "Student Score Prediction",

  problem:
    "Educational outcomes are influenced by multiple behavioural variables.",

  solution:
    "Performed data cleaning and exploratory analysis, then implemented linear and polynomial regression models to predict exam scores. Evaluated model accuracy and visualised predictions to understand performance patterns.",

  stack: ["Python,", "Pandas,", "Scikit-learn,", "Matplotlib"],
  githubLink:
    "https://github.com/maik122/Elevvo.git"
},
{
  id: 32,
  type: "Data Science",
  subType: "Machine Learning & Predictive Modelling",
  title: "Forest Cover Type Classification",

  problem:
    "Accurately classifying forest cover types using environmental and cartographic features is essential for ecological management.",

  solution:
    "Trained and compared Random Forest and XGBoost models for multi-class classification. Evaluated performance using classification metrics and visualised feature importance.",

  stack: ["Python,", "Scikit-learn,", "XGBoost,", "Pandas,", "Matplotlib"],

  githubLink:
    "https://github.com/maik122/Elevvo.git"
},
{
  id: 33,
  type: "Data Science",
  subType: "Machine Learning & Predictive Modelling",
  title: "Loan Approval Prediction",

  problem:
    "Financial institutions need reliable models to predict loan approval outcomes while managing risk.",

  solution:
    "Handled missing values, encoded categorical features, and addressed class imbalance. Evaluated models using precision, recall, and F1-score to ensure reliability.",

  stack: ["Python,", "Pandas,", "Scikit-learn,", "Matplotlib"],
  githubLink:
    "https://github.com/maik122/Elevvo.git" 
},

{
  id: 36,
  type: "Data Science",
  subType: "Time Series Forecasting",
  title: "Sales Forecasting",

  problem:
    "Businesses require accurate sales forecasts to optimise inventory and strategic planning.",

  solution:
    "Created time-based features and applied regression models to predict future sales. Explored rolling averages and XGBoost for improved time-aware forecasting.",

  stack: ["Python,", "Pandas,", "XGBoost,", "Matplotlib,", "Seaborn"],
  githubLink:
    "https://github.com/maik122/Elevvo.git"
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
    title: "UK Railway ticketing System",

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
    title: "Developer Portfolio Website",

    problem:
      "Developers need a structured platform to present projects, skills, and contact information professionally.",

    solution:
      "Built a responsive React-based portfolio website showcasing projects, experience, and technical skills with modern UI design.",

    stack: ["React,", "TypeScript,", "Tailwind CSS,", "Vite"],

    githubLink:
      "https://github.com/MK-Web-Solutions/MaikCV.git"
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
    githubLink:
      "https://github.com/MK-Web-Solutions/Reole.git"
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

    stack: ["Microcontroller,", "C ++,", "MIDI Protocol,", "Hardware Prototyping,"],
    githubLink:
      "https://gitlab.uwe.ac.uk/m2-kassem/dissertation.git"
  }
];