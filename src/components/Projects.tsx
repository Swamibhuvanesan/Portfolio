import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category: string;
}

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects = ({ isDarkMode }: ProjectsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Sales Dashboard with Predictive Insights",
      description:
        "Interactive analytics dashboard with machine learning-powered sales forecasting and trend analysis",
      fullDescription:
        "A comprehensive sales analytics dashboard that combines historical data analysis with predictive modeling. Features real-time sales tracking, customer segmentation, revenue forecasting using time series analysis, and interactive visualizations. Includes statistical analysis of sales patterns, seasonal trend identification, and automated reporting for business stakeholders.",
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Matplotlib",
        "SQL",
        "Statistical Analysis",
      ],
      image:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
      demoUrl: "#",
      githubUrl: "#",
      category: "Predictive Analytics",
    },
    {
      id: 2,
      title: "Customer Churn Analysis for Subscription Service",
      description:
        "Statistical modeling and machine learning analysis to predict customer churn patterns",
      fullDescription:
        "Advanced analytics solution that identifies customers at risk of churning using statistical analysis and machine learning algorithms. Includes exploratory data analysis, feature engineering, cohort analysis, survival analysis, and predictive modeling. Provides actionable insights for customer retention strategies with 85% prediction accuracy.",
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Statistical Analysis",
        "Matplotlib",
        "Seaborn",
      ],
      image:
        "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600",
      demoUrl: "#",
      githubUrl: "#",
      category: "Customer Analytics",
    },
    {
      id: 3,
      title: "Social Media Sentiment Tracker",
      description:
        "Text analytics and sentiment analysis of social media data with trend identification",
      fullDescription:
        "A comprehensive sentiment analysis platform that processes social media data to analyze public sentiment and brand perception. Features include text preprocessing, sentiment scoring using NLP techniques, trend analysis, statistical significance testing, and automated reporting dashboards with actionable insights for marketing teams.",
      technologies: [
        "Python",
        "NLTK",
        "TextBlob",
        "Pandas",
        "Statistical Analysis",
        "Data Visualization",
      ],
      image:
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600",
      demoUrl: "#",
      githubUrl: "#",
      category: "Text Analytics",
    },
    {
      id: 4,
      title: "Supply Chain Optimization Simulator",
      description:
        "Statistical analysis and optimization modeling for supply chain efficiency improvement",
      fullDescription:
        "Advanced analytics platform that analyzes supply chain operations using statistical modeling and optimization techniques. Includes demand forecasting using time series analysis, inventory optimization, cost analysis, and performance metrics tracking. Provides data-driven recommendations for improving operational efficiency and reducing costs.",
      technologies: [
        "Python",
        "NumPy",
        "SciPy",
        "Statistical Modeling",
        "Time Series Analysis",
        "Optimization",
      ],
      image:
        "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
      demoUrl: "#",
      githubUrl: "#",
      category: "Operations Analytics",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      className={`py-20 px-6 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={cardVariants}
            className={`text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Data Science{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">
              Projects
            </span>
          </motion.h2>
          <motion.div
            variants={cardVariants}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"
          />
          <motion.p
            variants={cardVariants}
            className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Explore my data science and analytics projects showcasing expertise
            in machine learning, predictive modeling, and business intelligence
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`group relative backdrop-blur-sm rounded-2xl overflow-hidden border cursor-pointer transition-colors duration-300 ${
                isDarkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-gray-50 border-gray-200"
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      isDarkMode
                        ? "text-purple-400 bg-purple-400/10"
                        : "text-purple-600 bg-purple-100"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>

                <h3
                  className={`text-xl font-bold mb-3 transition-colors ${
                    isDarkMode
                      ? "text-white group-hover:text-purple-400"
                      : "text-gray-900 group-hover:text-purple-600"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`mb-4 line-clamp-2 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-2 py-1 rounded ${
                        isDarkMode
                          ? "text-cyan-400 bg-cyan-400/10"
                          : "text-cyan-600 bg-cyan-100"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span
                      className={`text-xs ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                      isDarkMode
                        ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800"
                        : "bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800"
                    }`}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className={`rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto ${
              isDarkMode ? "bg-gray-900" : "bg-white"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3
                    className={`text-3xl font-bold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {selectedProject.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      isDarkMode
                        ? "text-purple-400 bg-purple-400/10"
                        : "text-purple-600 bg-purple-100"
                    }`}
                  >
                    {selectedProject.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`p-2 transition-colors ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p
                className={`text-lg leading-relaxed mb-6 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {selectedProject.fullDescription}
              </p>

              <div className="mb-6">
                <h4
                  className={`text-xl font-semibold mb-3 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-2 rounded-lg border ${
                        isDarkMode
                          ? "text-cyan-400 bg-cyan-400/10 border-cyan-400/20"
                          : "text-cyan-600 bg-cyan-50 border-cyan-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {selectedProject.demoUrl && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.demoUrl}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                      isDarkMode
                        ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800"
                        : "bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800"
                    }`}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                )}
                {selectedProject.githubUrl && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.githubUrl}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors border ${
                      isDarkMode
                        ? "bg-white/10 text-white hover:bg-white/20 border-white/20"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200 border-gray-300"
                    }`}
                  >
                    <Github className="w-5 h-5" />
                    Source Code
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
