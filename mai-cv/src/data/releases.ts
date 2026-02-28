export type Skill = {
  name: string;
  category: "AI & ML" | "Data Science" | "Software Dev" | "Web Dev" | "Other";
};

export const skillsList: Skill[] = [
  // AI, Machine Learning & Data Science
  { name: "Python", category: "AI & ML" },
  { name: "Machine Learning", category: "AI & ML" },
  { name: "Deep Learning", category: "AI & ML" },
  { name: "Artificial Intelligence", category: "AI & ML" },
  { name: "Neural Networks", category: "AI & ML" },
  { name: "Natural Language Processing", category: "AI & ML" },
  { name: "Data Visualization", category: "AI & ML" },
  { name: "SQL", category: "AI & ML" },
  { name: "Data Manipulation (Pandas)", category: "AI & ML" },
  { name: "NumPy", category: "AI & ML" },
  { name: "Scikit-learn", category: "AI & ML" },
  { name: "TensorFlow", category: "AI & ML" },
  { name: "Jupyter Notebooks", category: "AI & ML" },
  { name: "Matplotlib / Seaborn", category: "AI & ML" },

  // Software Development & Tools
  { name: "C++", category: "Software Dev" },
  { name: "Version Control (Git)", category: "Software Dev" },
  { name: "Flask / FastAPI", category: "Software Dev" },
  { name: "SQLAlchemy", category: "Software Dev" },
  { name: "Tkinter", category: "Software Dev" },
  { name: "HTML / CSS / JavaScript", category: "Software Dev" },
  { name: "Full-Stack Development", category: "Software Dev" },
  { name: "UML & Software Design", category: "Software Dev" },
  { name: "Agile Methodologies", category: "Software Dev" },
  { name: "Time Management", category: "Software Dev" },
  { name: "Problem Solving", category: "Software Dev" },
];