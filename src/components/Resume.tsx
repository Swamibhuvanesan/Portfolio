import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Calendar, GraduationCap, Award } from "lucide-react";

interface ResumeProps {
  isDarkMode: boolean;
}

const Resume = ({ isDarkMode }: ResumeProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const timelineItems = [
    {
      year: "2025",
      title: "Data Analyst Trainee",
      subtitle: "D4 Insight, Chennai, India",
      description:
        "Managing CRM data validation, transformation, and reporting processes. Applying Python, SQL, and statistical analysis to clean datasets, build predictive models, and create analytics dashboards that provide actionable business insights.",
      icon: Award,
      color: "from-green-500 to-green-600",
    },
    {
      year: "2025",
      title: "Data Analytics Intern",
      subtitle: "D4 Insight, Chennai, India",
      description:
        "Designed and implemented data models in MySQL for analytics. Developed data processing pipelines in Python and created interactive visualizations and KPI dashboards. Collaborated with stakeholders to translate business requirements into analytical solutions.",
      icon: Award,
      color: "from-blue-500 to-blue-600",
    },
    {
      year: "2023-2025",
      title: "Master of Computer Applications",
      subtitle: "SRM Institute of Science and Technology, Chennai",
      description:
        "Specialized in data analytics, statistical modeling, database management, and business intelligence. Coursework included advanced statistics, data mining, machine learning, and business analytics. CGPA: 9.50",
      icon: GraduationCap,
      color: "from-purple-500 to-purple-600",
    },
    {
      year: "2019-2022",
      title: "Bachelor of Computer Applications",
      subtitle: "SRM Institute of Science and Technology, Chennai",
      description:
        "Strong foundation in programming, database management, and quantitative analysis. Developed expertise in statistical computing, data structures, and analytical problem-solving. CGPA: 9.03",
      icon: GraduationCap,
      color: "from-cyan-500 to-cyan-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="resume"
      className={`py-20 px-6 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800" : "bg-slate-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className={`text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Experience &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">
              Education
            </span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className={`text-lg max-w-2xl mx-auto mb-8 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            From academic excellence to professional experience - here's my
            journey in data analysis and technology
          </motion.p>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.button>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className={`absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 ${
              isDarkMode
                ? "bg-gradient-to-b from-purple-500 to-cyan-500"
                : "bg-gradient-to-b from-purple-600 to-cyan-600"
            }`}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.year}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-16`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-purple-500 z-10 ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  }`}
                />

                {/* Content card */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"
                  } pl-20 md:pl-0`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-shadow ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-white border-gray-100"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-4 mb-4 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${item.color}`}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div
                        className={`flex items-center gap-2 text-sm font-medium text-purple-600 ${
                          index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <Calendar className="w-4 h-4" />
                        {item.year}
                      </div>
                    </div>

                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <h4
                      className={`text-lg font-semibold mb-3 ${
                        isDarkMode ? "text-purple-400" : "text-purple-600"
                      }`}
                    >
                      {item.subtitle}
                    </h4>
                    <p
                      className={`leading-relaxed ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Summary */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-3xl font-bold mb-6 text-center">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Data Analysis & Statistics",
                  skills: [
                    "Python (Pandas, NumPy)",
                    "Statistical Analysis",
                    "Hypothesis Testing",
                    "A/B Testing",
                  ],
                },
                {
                  title: "Data Visualization & BI",
                  skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn"],
                },
                {
                  title: "Database & Tools",
                  skills: ["SQL", "MySQL", "Excel", "Data Modeling"],
                },
              ].map((category) => (
                <div key={category.title} className="text-center">
                  <h4 className="text-xl font-semibold mb-4">
                    {category.title}
                  </h4>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="bg-white/20 rounded-lg py-2 px-4 text-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
