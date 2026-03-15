export type Skill = {
  name: string;
  category: "AI & ML" | "Data Science" | "Software Dev" | "Web Dev" | "Other";
};

export const skillsList: Skill[] = [
  // AI & Machine Learning
  { name: "Python", category: "AI & ML" },
  { name: "Machine Learning", category: "AI & ML" },
  { name: "Random Forest / Ensemble Models", category: "AI & ML" },
  { name: "Feature Engineering", category: "AI & ML" },
  { name: "Model Evaluation & Cross-Validation", category: "AI & ML" },
  { name: "Scikit-learn", category: "AI & ML" },
  { name: "Deep Learning", category: "AI & ML" },
  { name: "Neural Networks", category: "AI & ML" },
  { name: "TensorFlow", category: "AI & ML" },
  { name: "Natural Language Processing", category: "AI & ML" },

  // Data Science
  { name: "Pandas", category: "Data Science" },
  { name: "NumPy", category: "Data Science" },
  { name: "Data Cleaning & Pipelines", category: "Data Science" },
  { name: "REST API Integration", category: "Data Science" },
  { name: "Data Visualisation (Matplotlib / Seaborn)", category: "Data Science" },
  { name: "SQL", category: "Data Science" },
  { name: "Jupyter Notebooks", category: "Data Science" },

  // Software Dev
  { name: "C++", category: "Software Dev" },
  { name: "Flask / FastAPI", category: "Software Dev" },
  //{ name: "SQLAlchemy", category: "Software Dev" },
  { name: "Git & Version Control", category: "Software Dev" },
  { name: "Agile Methodologies", category: "Software Dev" },
  { name: "UML & Software Design", category: "Software Dev" },

// Web Dev
  { name: "Streamlit", category: "Web Dev" },
  { name: "Full-Stack Development", category: "Web Dev" },
  { name: "HTML / CSS / JavaScript", category: "Web Dev" },
  { name: "React", category: "Web Dev" },

  //{ name: "Tailwind CSS", category: "Web Dev" },
];