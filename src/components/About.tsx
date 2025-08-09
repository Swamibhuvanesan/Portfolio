import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, TrendingUp, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const skills = [
    { name: 'Backend Development', level: 85, icon: Code, color: 'from-purple-500 to-purple-600' },
    { name: 'Data Analysis', level: 78, icon: TrendingUp, color: 'from-cyan-500 to-cyan-600' },
    { name: 'Database Management', level: 82, icon: Database, color: 'from-orange-500 to-orange-600' },
    { name: 'Software Engineering', level: 80, icon: Award, color: 'from-green-500 to-green-600' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 px-6 bg-slate-50">
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
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto mb-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Passionate About Technology
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                As a recent MCA graduate, I bring fresh perspectives and cutting-edge knowledge to the world of technology. 
                My academic journey has equipped me with strong fundamentals in computer applications, while my passion 
                drives me to explore innovative solutions in backend development and data analysis.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm detail-oriented, forward-thinking, and always eager to take on new challenges. My goal is to 
                contribute to meaningful projects that make a difference while continuously learning and growing 
                in the ever-evolving tech landscape.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Education</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
                  <div>
                    <p className="font-semibold text-gray-800">Master of Computer Applications (MCA)</p>
                    <p className="text-gray-600 text-sm">Recently Graduated • 2024</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 mb-8"
            >
              Technical Skills
            </motion.h3>
            
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color}`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">{skill.name}</h4>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;