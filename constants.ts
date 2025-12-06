import { Project, Experience, Education, Certification, SkillCategory } from './types';
import { 
  Code, Database, Brain, Monitor, BarChart, Users, 
  Terminal, Layers, Cpu, Globe 
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Vidhyabathi K",
  title: "Data Scientist | Data Analyst | AI & Computer Vision Enthusiast",
  tagline: "Transforming raw data into intelligent, real-world solutions.",
  phone: "+91-6374475804",
  email: "kk3777096@gmail.com",
  linkedin: "https://linkedin.com/in/vidhyabathi-k",
  location: "Kancheepuram, India",
  profileImage: "/PIC.jpg" 
};

export const ABOUT_TEXT = "I'm Vidhyabathi K, a Data Analyst & Aspiring Data Scientist skilled in Python, SQL, Machine Learning, and Data Visualization. I enjoy transforming raw data into clear insights, predictive models, and actionable business solutions.\n\nWith hands-on experience from internships and academic projects, I've built ML models, optimized data workflows, created dashboards, and solved real-world problems using data-driven approaches. I'm passionate about analytical thinking, experimentation, and turning complex datasets into meaningful decisions.\n\nI aim to contribute to impactful projects where I can grow as a full-stack data professional and deliver measurable value through data, automation, and intelligent systems.";

export const PROJECTS: Project[] = [
  {
    title: "SmartFace-Attendance (FRAS)",
    tech: ["OpenCV", "Python", "Machine Learning"],
    github: "https://github.com/vidhyabathi-002/SmartFace-Attendance",
    description: "Automated attendance system using facial recognition.",
    points: [
      "Developed a menu-driven face recognition attendance automation system.",
      "Captured student images and stored them as a labeled dataset.",
      "Trained a facial recognition model using OpenCV-based algorithms.",
      "Recognized faces in real-time using a webcam and recorded attendance to CSV.",
    ]
  },
  {
    title: "Product Demand Prediction",
    tech: ["Python", "ML", "Data Analytics"],
    github: "https://github.com/vidhyabathi-002/product-demand-prdiction-predic-to",
    description: "ML Web Application for forecasting sales.",
    points: [
      "Built ML models to forecast product demand using historical sales data.",
      "Applied data preprocessing, feature engineering, and hyperparameter tuning.",
      "Integrated trained models into a web application for live predictions."
    ]
  },
  {
    title: "Object Detection System",
    tech: ["OpenCV", "TensorFlow", "PyTorch"],
    github: "https://github.com/vidhyabathi-002/object-detection-using-open-cv",
    description: "Real-time computer vision system.",
    points: [
      "Developed a real-time object detection system using deep learning.",
      "Performed data preprocessing, annotation, model training, and real-time inference.",
      "Achieved efficient frame-by-frame detection with optimized pipelines."
    ]
  },
  {
    title: "Student Management System",
    tech: ["SQL", "Web Dev", "Data Viz"],
    github: "https://github.com/vidhyabathi-002/STUDENT-MANAGEMENT-SYSTEM",
    description: "Full-stack system for academic management.",
    points: [
      "Created a full-stack system for managing student records.",
      "Automated report generation and analytics dashboard for performance tracking.",
    ]
  },
  {
    title: "VR Gaming Environment",
    tech: ["Unity", "AR/VR", "3D Dev"],
    github: "#", // No link provided in prompt, kept generic
    description: "Immersive virtual reality experience.",
    points: [
      "Built an immersive virtual reality environment with realistic 3D assets.",
      "Implemented complex user interactions within the VR space."
    ]
  },
  {
    title: "IPL Bowler Analysis",
    tech: ["Python", "Power BI", "EDA"],
    github: "https://github.com/vidhyabathi-002/ipl-bowler-analysis-EDA--power-BI.git",
    description: "Data analysis and visualization of cricket statistics.",
    points: [
      "Conducted EDA on IPL bowler performance using Python libraries.",
      "Engineered features and built interactive Power BI dashboards.",
      "Delivered insights on economy rates, strike rates, and strategies."
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Data Analyst Intern",
    company: "OneYes Infotech Solutions, Chennai",
    period: "Jul 2025 – Dec 2025",
    description: [
      "Performed data cleaning, preprocessing, and exploratory data analysis using Python and SQL.",
      "Built insightful dashboards and visual reports using Power BI to highlight trends and KPIs.",
      "Assisted in creating and evaluating machine learning models for internal projects.",
      "Translated complex datasets into clear, actionable insights for decision-making.",
      "Collaborated with senior data scientists to implement real-world analytics workflows.",
      "Documented findings, prepared summaries, and maintained accurate analytical reports."
    ]
  },
  {
    role: "Data Science Intern",
    company: "Luminant Works, Chennai",
    period: "Jul 2025 – Aug 2025",
    description: [
      "Developed machine learning models in Python to meet business requirements.",
      "Built SQL-based data workflows including cleaning and pipeline optimization.",
      "Completed certifications in Informatica Fundamentals and Reltio Fundamentals.",
      "Improved data processing speeds by optimizing database queries."
    ]
  },
  {
    role: "Digital Marketing Intern",
    company: "On Client Demand, Chennai",
    period: "2024",
    description: [
      "Analyzed campaign data to derive actionable insights for user engagement.",
      "Identified market patterns and behavior trends to support decision-making.",
      "Enhanced brand visibility using analytical evaluation of performance."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech – Artificial Intelligence and Data Science",
    school: "Prathyusha Engineering College, Thiruvallur",
    year: "2022 – 2026",
    score: "CGPA: 8.15/10"
  },
  {
    degree: "Senior Secondary (XII)",
    school: "Sannathi School, Vandhavasi",
    year: "2022",
    score: "79%"
  },
  
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Oracle Cloud Infrastructure Certified AI Foundations Associate", issuer: "Oracle", year: "2025" },
  { name: "Intelligent Data Management Cloud (IDMC) Foundation", issuer: "Informatica", year: "2025" },
  { name: "Cloud Data Governance & Catalog (CDGC) Foundation", issuer: "Informatica", year: "2025" },
  { name: "SQL Analytics on Databricks", issuer: "Databricks", year: "2025" },
  { name: "Security and Identity", issuer: "Google Cloud Skills Boost", year: "2024" },
  { name: "Introduction to Generative AI", issuer: "Google Cloud Skills Boost", year: "2024" },
  { name: "Data Analytics & Visualization Job Simulation", issuer: "Accenture", year: "2024" },
  { name: "Introduction to Data Analysis Using Excel", issuer: "Coursera", year: "2024" },
  { name: "SQL & Relational Databases 101", issuer: "Cognitive Class", year: "2024" },
  { name: "Cloud Computing Fundamentals", issuer: "Infosys", year: "2024" },
  { name: "MongoDB", issuer: "Infosys Springboard", year: "2024" },
  { name: "Python 101 for Data Science", issuer: "Cognitive Class", year: "2024" }
];

export const SKILLS: SkillCategory[] = [
  { category: "Programming", items: ["HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "React", "Python", "SQL", "MySQL"] },
  { category: "Data Science", items: ["Machine Learning", "Data Analysis", "Statistical Modeling", "Feature Engineering", "Exploratory Data Analysis (EDA)", "Data pipelines (ETL basics)"] },
  { category: "Computer Vision", items: ["OpenCV", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"] },
  { category: "Tools & Platforms", items: ["Informatica", "Databricks", "Git & GitHub", "Power BI", "Excel", "GCP", "MongoDB"] },
  { category: "Visualization", items: ["Python dashboards (Plotly, Streamlit)", "Tableau", "Matplotlib", "Power BI", "Canva", "Blender"] },
  { category: "Soft Skills", items: ["Problem Solving", "Analytical Thinking", "Team Collaboration"] }
];

export const LEADERSHIP = [
  "Led technical events including Privriti and Dr. APJ Abdul Kalam’s Presence Day workshops.",
  "Conducted AR/VR training sessions and delivered seminars on immersive technologies.",
  "Participated in Codeathon 3.0 (2024) and AR/VR Hackathon Horizon 8 with Siemens & TANSAM."
];

export const ICONS_MAP = {
  Programming: Terminal,
  "Data Science": Brain,
  "Computer Vision": Monitor,
  "Tools & Platforms": Layers,
  Visualization: BarChart,
  "Soft Skills": Users,
  Globe: Globe,
  Cpu: Cpu,
  Database: Database,
  Code: Code
};