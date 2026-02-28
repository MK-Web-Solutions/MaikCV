export interface Project {
  id: number;
  title: string;
  type: "AI & ML" | "Data Science" | "Web Dev";
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
    //images: [
    //  { src: "/images/ModelsComparison.png", caption: "Comparison of model performance metrics" },
    //  { src: "/images/SvmPolynmialKernelVisualisation.png", caption: "Visualising SVM Polynomial Kernel predictions" },
    //  { src: "/images/premierleagueprediction.png", caption: "Premier League prediction result example" }
    //],
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
    //images: [
    //  { src: "/images/CVMatcher.png", caption: "AI-powered CV keyword analysis" },
    //  { src: "/images/CVMetrics.png", caption: "Result comparison for CV matching" }
    //],
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
  // … repeat same for all other projects …

  // Web Dev
  {
    id: 15,
    type: "Web Dev",
    subType: "Software & Web Development",
    title: "Football Player Transfer Value Website",
    summary: "Flask + SQLite app with dashboards and charts for player valuation.",
    githubLink: "https://github.com/maik122/football-player-transfer-value",
    //images: [
    //  { src: "/images/TransferValueComparison.png", caption: "Player value comparison page" },
    //  { src: "/images/TransferValueAdmin.png", caption: "Admin management interface" }
    //],
    details: "User auth, prediction dashboards, admin interface."
  },
  {
    id: 16,
    type: "Web Dev",
    subType: "Software & Web Development",
    title: "UK Railway System",
    summary: "Tkinter-based booking system with user/admin interfaces.",
    githubLink: "https://github.com/maik122/UK-railway-system",
    //images: [
    //  { src: "/images/systemHomePage.png", caption: "System homepage" },
    //  { src: "/images/systemAdminInterface.png", caption: "Admin interface" },
    //  { src: "/images/systemConfirmation.png", caption: "Booking confirmation view" }
    //],
    details: "Streamlined train booking system with schedule management."
  },
  {
    id: 17,
    type: "Web Dev",
    subType: "Software & Web Development",
    title: "Hotel Booking Platform",
    summary: "Full-stack web app for reservations, admin management, and CRUD operations.",
    githubLink: "https://github.com/maik122/Hotel-booking-website",
    //images: [
    //  { src: "/images/HotelHomepage.png", caption: "Hotel homepage" },
    //  { src: "/images/HotelBooking.png", caption: "Booking interface" },
    //  { src: "/images/HotelAdminInterface.png", caption: "Admin management page" }
    //],
    details: "Flask + SQLAlchemy platform with user auth, booking management, admin dashboards."
  }
];