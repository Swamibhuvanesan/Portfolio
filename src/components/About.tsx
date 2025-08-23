import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Brain, TrendingUp } from "lucide-react";

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const skills = [
    { name: "Python", level: 90, icon: Code },
    { name: "SQL", level: 85, icon: Database },
    { name: "Data Analysis", level: 88, icon: TrendingUp },
    { name: "Machine Learning", level: 82, icon: Brain },
    { name: "Django", level: 80, icon: Code },
    { name: "MySQL", level: 85, icon: Database },
  ];

  return (
    <section
      id="about"
      className={`py-20 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            About Me
          </h2>
          <p
            className={`text-xl ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            } max-w-3xl mx-auto`}
          >
            A passionate Data Analyst and MCA graduate with expertise in backend
            development, data analysis, and machine learning. I transform
            complex data into actionable insights and build scalable solutions
            that drive business growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3
              className={`text-2xl font-bold mb-6 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              My Journey
            </h3>
            <p
              className={`text-lg mb-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              As a Master of Computer Applications graduate from SRM Institute
              of Science and Technology with an exceptional CGPA of 9.50, I
              specialize in transforming raw data into strategic business
              insights. My academic excellence is complemented by hands-on
              experience in data analytics and business intelligence.
            </p>
            <p
              className={`text-lg mb-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              At D4 Insight, I manage CRM data validation, transformation, and
              reporting processes while building interactive analytics
              dashboards. I leverage Python, SQL, and statistical analysis to
              uncover patterns, predict trends, and provide data-driven
              recommendations that drive business growth and operational
              efficiency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3
              className={`text-2xl font-bold mb-6 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Technical Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <skill.icon
                    className={`w-6 h-6 ${
                      isDarkMode ? "text-purple-400" : "text-purple-600"
                    }`}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span
                        className={`text-sm font-medium ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`w-full bg-gray-200 rounded-full h-2 ${
                        isDarkMode ? "bg-gray-700" : ""
                      }`}
                    >
                      <motion.div
                        className="bg-gradient-to-r from-purple-600 to-cyan-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
