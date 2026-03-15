export interface Project {
  id: number;
  title: string;
  type: "AI & ML" | "Data Analysis" | "Software" | "Embedded Systems";
  subType?: string;

  problem: string;
  solution: string;
  stack: string[];
  imgSrc?: string;

  githubLink?: string;
  link?: string;
}
export const projectsData: Project[] = [

  // ================= AI & ML =================

  {
    id: 1,
    type: "AI & ML",
    subType: "Machine Learning & Predictive Modelling",
    title: "Premier League Match Outcome Predictor",
    imgSrc: "/projects/premier-league.png",

    problem:
      "Football match outcomes are shaped by a complex interplay of team form, momentum, opponent strength, and market expectations — all of which shift week to week, making reliable prediction inherently difficult.",

    solution:
      "Built an end-to-end prediction pipeline trained on four seasons of Premier League data (1,520 matches). Engineered features including rolling form averages, win/loss streaks, and bookmaker-implied probabilities. Trained and optimised a Random Forest classifier achieving 66% accuracy, then deployed it as an interactive Streamlit web app where users can select any fixture and receive a prediction with plain-English reasoning explaining the key contributing factors.",

    stack: ["Python,", "Pandas,", "Scikit-learn,", "TensorFlow,", "Matplotlib,", "Streamlit,","Rest API"],

    githubLink:
      "https://predicting-premier-league-match-outcomes.streamlit.app",
  },

  {
    id: 2,
    type: "AI & ML",
    subType: "Machine Learning & Predictive Modelling",
    title: "Engine Anomaly Detection & RUL Prediction",

    problem:
      "In industrial systems, degradation often goes undetected until a critical threshold is reached — making reactive maintenance strategies costly and operationally risky.",

    solution:
      "Designed a GRU-based recurrent neural network to model temporal degradation patterns in engine sensor time-series data. Implemented sequence modelling and early anomaly detection to estimate remaining useful life prior to failure thresholds, enabling proactive maintenance scheduling.",

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
      "Manual CCTV monitoring is inconsistent, labour-intensive, and fails to scale effectively for real-time enforcement across large traffic networks.",

    solution:
      "Building a real-time object detection pipeline using YOLOv8 and OpenCV to identify vehicles and traffic rule violations directly from live video streams, optimised for inference speed and detection accuracy under varying environmental conditions.",

    stack: ["Python,", "YOLOv8,", "OpenCV,", "PyTorch,"],

    githubLink:
      "https://github.com/maik122/"
  },

  {
    id: 4,
    type: "AI & ML",
    subType: "Natural Language Processing & AI Applications",
    title: "Job Keyword Matcher",
    imgSrc: "/projects/CVMatcher.png",

    problem:
      "Applicants often struggle to objectively assess how well their CV aligns with a job specification, leading to unfocused applications and missed opportunities.",

    solution:
      "Developed an NLP pipeline using TF-IDF vectorisation and semantic similarity scoring to rank CV-to-job-description relevance. Deployed as an interactive Streamlit web app with automated skill-gap highlighting to provide actionable feedback.",

    stack: ["Python,", "spaCy,", "Scikit-learn,", "TF-IDF,", "Streamlit"],

    githubLink:
      "https://jobkeywordchecker.streamlit.app/",
    
  },
  {
  id: 34,
  type: "AI & ML",
  subType: "Recommendation Systems",
  title: "Movie Recommendation System",
  imgSrc: "/projects/MovieRecommendation.png",

  problem:
    "Users face content overload on streaming platforms, where the absence of meaningful personalisation makes discovering relevant titles time-consuming and frustrating.",

  solution:
    "Implemented a collaborative filtering system using matrix factorisation and cosine similarity scoring over user-item interaction matrices. Generated ranked, personalised recommendations that improve in relevance as interaction history grows.",

  stack: ["Python,", "Pandas,", "NumPy,", "Scikit-learn,", "Matplotlib"],
  githubLink:
    "https://recommendamovie.streamlit.app/"
},
{
  id: 35,
  type: "AI & ML",
  subType: "Computer Vision & Deep Learning",
  title: "Music Genre Classification",
  imgSrc: "/projects/genre-ai.png",

  problem:
    "Audio signals contain rich, complex frequency patterns that raw metadata alone cannot capture, making automated genre classification a non-trivial deep learning challenge.",

  solution:
    "Extracted MFCC features and spectrogram representations from audio samples. Developed CNN-based classifiers and applied transfer learning techniques to improve multi-class genre prediction performance across diverse audio inputs.",

  stack: ["Python,", "TensorFlow,", "Keras,", "Librosa,", "OpenCV"],
  githubLink:
    "https://github.com/maik122/MusicGenreClassifier.git",
},
{
  id: 37,
  type: "AI & ML",
  subType: "Computer Vision & Deep Learning",
  title: "Traffic Sign Recognition",

  problem:
    "Autonomous driving systems require robust, reliable visual classification of traffic signs under varying lighting, occlusion, and real-world environmental conditions.",

  solution:
    "Trained convolutional neural networks on augmented traffic sign datasets, benchmarking custom CNN architectures against MobileNet-based transfer learning to evaluate generalisation accuracy and inference performance.",

  stack: ["Python,", "TensorFlow,", "Keras,", "OpenCV"],   
  githubLink:
    "https://github.com/maik122/Elevvo.git"
  
},
{
  id: 33,
  type: "AI & ML",
  subType: "Machine Learning & Predictive Modelling",
  title: "Loan Approval Prediction",
  imgSrc: "/projects/LoanIQ.png",

  problem:
    "Financial institutions need accurate, interpretable models to assess loan approval outcomes consistently while managing default risk across diverse applicant profiles.",

  solution:
    "Preprocessed applicant data by handling missing values, encoding categorical features, and addressing class imbalance. Trained and evaluated classification models using precision, recall, and F1-score to ensure reliable, balanced performance across approval outcomes.",

  stack: ["Python,", "Pandas,", "Scikit-learn,", "Matplotlib"],
  githubLink:
    "https://loanintelligence.streamlit.app" 
},
  // ================= Data Analysis =================

  {
    id: 5,
    type: "Data Analysis",
    subType: "Exploratory Data Analysis",
    title: "Netflix Movies & TV Shows ",
    imgSrc: "/projects/NetflixEDA.png",

    problem:
      "Large content libraries obscure underlying trends in production strategy, genre investment, and regional distribution — making data-driven insights difficult to surface without structured analysis.",

    solution:
      "Performed structured exploratory data analysis on 8,800+ titles. Cleaned and transformed raw catalogue data, identified genre distribution patterns, and visualised regional and temporal production trends to extract actionable strategic insights.",

    stack: ["Python,", "Pandas,", "Matplotlib,", "Seaborn,"],

    githubLink:
      "https://netlixeda.streamlit.app"
  },

  {
    id: 6,
    type: "Data Analysis",
    subType: "Classification & Clustering",
    title: "Customer Segmentation — Mall Customers",
    imgSrc: "/projects/CustomerSegmentation.png",

    problem:
      "Generic, untargeted marketing campaigns reduce conversion efficiency by failing to account for the distinct spending behaviours and needs of different customer groups.",

    solution:
      "Applied K-Means and DBSCAN clustering algorithms after feature scaling to segment customers by income and spending behaviour. Analysed cluster profiles to generate targeted campaign recommendations tailored to each distinct customer segment.",

    stack: ["Python,", "Scikit-learn,", "Pandas,", "Matplotlib,", "Seaborn,"],

    githubLink:
      "https://customersanalysis.streamlit.app"
  },
{
  id: 31,
  type: "Data Analysis",
  subType: "Prediction & Forecasting",
  title: "Student Score Prediction",

  problem:
    "Academic performance is influenced by a range of behavioural and demographic variables, making it difficult to identify at-risk students without a structured predictive framework.",

  solution:
    "Performed data cleaning and exploratory analysis before implementing linear and polynomial regression models to predict exam scores. Evaluated model accuracy and visualised prediction trends to surface key behavioural drivers of student performance.",

  stack: ["Python,", "Pandas,", "Scikit-learn,", "Matplotlib"],
  githubLink:
    "https://github.com/maik122/Elevvo.git"
},
{
  id: 32,
  type: "Data Analysis",
  subType: "Classification & Clustering",
  title: "Forest Cover Type Classification",
  imgSrc: "/projects/ForestCoverType.png",

  problem:
    "Accurately classifying forest cover types from environmental and cartographic features is essential for ecological resource management and land-use planning.",

  solution:
    "Trained and compared Random Forest and XGBoost models for multi-class forest cover classification. Evaluated performance using comprehensive classification metrics and visualised feature importance to interpret model behaviour.",

  stack: ["Python,", "Scikit-learn,", "XGBoost,", "Pandas,", "Matplotlib"],

  githubLink:
    "https://github.com/maik122/ForestCoverType.git"
},

{
  id: 36,
  type: "Data Analysis",
  subType: "Prediction & Forecasting",
  title: "Sales Forecasting",

  problem:
    "Without accurate sales forecasts, businesses struggle to optimise inventory, allocate resources effectively, and make informed strategic planning decisions.",

  solution:
    "Engineered time-based features and applied regression models to forecast future sales volumes. Explored rolling average smoothing and XGBoost-based approaches to improve time-aware prediction accuracy.",

  stack: ["Python,", "Pandas,", "XGBoost,", "Matplotlib,", "Seaborn"],
  githubLink:
    "https://github.com/maik122/Elevvo.git"
},

  // ================= Software =================



  {
    id: 17,
    type: "Software",
    subType: "Web Development",
    title: "Hotel Booking Website",
    imgSrc: "/projects/HotelHomepage.png",

    problem:
      "Hotels require a reliable system to manage room availability, guest bookings, and administrative operations through a unified and intuitive platform.",

    solution:
      "Developed a full-stack Flask application with SQLAlchemy ORM for database management, supporting user authentication, booking workflows, and a comprehensive admin dashboard for operational oversight.",

    stack: ["Python,", "Flask,", "SQLAlchemy,", "HTML,", "CSS"],

    githubLink:
      "https://github.com/maik122/Hotel-booking-website"
  },

  {
    id: 18,
    type: "Software",
    subType: "Web Development",
    title: "Developer Portfolio Website",
    imgSrc: "/projects/DeveloperWebsite.png",

    problem:
      "Developers need a polished, structured platform to present their projects, technical skills, and experience professionally to potential employers and collaborators.",

    solution:
      "Designed and built a fully responsive React portfolio website showcasing projects, work experience, and technical skills with a modern, performance-optimised UI.",

    stack: ["React,", "TypeScript,", "Tailwind CSS,", "Vite"],

    githubLink:
      "https://maikassem.vercel.app"
  },

  {
    id: 19,
    type: "Software",
    subType: "Web Development",
    title: "Artist Showreel Website",
    imgSrc: "/projects/ArtistWebsite.png",

    problem:
      "Artists require a professional digital platform to showcase their creative work and facilitate direct communication with potential clients and collaborators.",

    solution:
      "Developed a full-stack React and Node.js web application featuring dynamic portfolio display, content management capabilities, and integrated client communication tools.",

    stack: ["React,", "TypeScript,", "Tailwind CSS,", "Vite"],
    githubLink:
      "https://reole.vercel.app"
  },  

  {
    id: 20,
    type: "Software",
    subType: "Software Development",
    title: "MIDI Composition Tool",
    imgSrc: "/projects/MIDICompositionTool.png",

    problem:
      "Composers working within DAW environments often lack efficient tools for generating harmonically consistent chord progressions on demand, disrupting creative flow.",

    solution:
      "Created a MIDI chord-generation tool for Logic Pro using the Scripter plugin framework, enabling rapid, key-consistent chord creation directly within the DAW and eliminating the need to context-switch during composition.",

    stack: ["JavaScript,", "Logic Pro Scripter,", "MIDI,"]
  },
  {
    id: 15,
    type: "Software",
    subType: "Web Development",
    title: "Football Player Transfer Value Website",
    imgSrc: "/projects/TransferValueComparison.png",

    problem:
      "Estimating a football player's market value requires combining statistical performance data with an accessible interface — a balance rarely achieved in publicly available tools.",

    solution:
      "Developed a Flask-based web application with SQLite database integration, user authentication, performance dashboards, and a predictive valuation feature for estimating player transfer market value.",

    stack: ["Python,", "Flask,", "SQLite,", "HTML,", "CSS,"],

    githubLink:
      "https://github.com/maik122/football-player-transfer-value",
  },

  {
    id: 16,
    type: "Software",
    subType: "Software Development",
    title: "UK Railway ticketing System",
    imgSrc: "/projects/systemHomePage.png",

    problem:
      "Railway booking systems must handle complex scheduling logic, seat availability management, and distinct user and administrator workflows within a single, cohesive application.",

    solution:
      "Built a desktop-based railway booking system using Tkinter, featuring end-user ticket booking, live schedule management, and a dedicated administrative control panel for staff operations.",

    stack: ["Python,", "Tkinter"],

    githubLink:
      "https://github.com/maik122/UK-railway-system",
  },
  // ================= Embedded Systems =================

  {
    id: 30,
    type: "Embedded Systems",
    subType: "Music Tech / Hardware",
    title: "Custom MIDI Controller",
    imgSrc: "/projects/MIDIController.png",

    problem:
      "Off-the-shelf MIDI controllers rarely accommodate the bespoke workflow requirements of specific composition and live performance setups, limiting creative flexibility.",

    solution:
      "Designed and built a standalone custom MIDI controller from the ground up using a microcontroller and purpose-built hardware inputs, fully integrated for both studio recording and live performance environments.",

    stack: ["Microcontroller,", "C ++,", "MIDI Protocol,", "Hardware Prototyping,"],
    githubLink:
      "https://gitlab.uwe.ac.uk/m2-kassem/dissertation.git"
  }
];