import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";

interface HeroProps {
  isDarkMode: boolean;
}

const Hero = ({ isDarkMode }: HeroProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const particles = Array.from({ length: 50 }, (_, i) => i);

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
          : "bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50"
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle}
            className={`absolute w-1 h-1 rounded-full ${
              isDarkMode
                ? "bg-gradient-to-r from-purple-400 to-cyan-400"
                : "bg-gradient-to-r from-purple-600 to-cyan-600"
            }`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random(),
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Mouse follower effect */}
      <motion.div
        className="fixed w-96 h-96 pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      >
        <div
          className={`w-full h-full rounded-full blur-xl ${
            isDarkMode
              ? "bg-gradient-radial from-purple-500/20 via-cyan-500/10 to-transparent"
              : "bg-gradient-radial from-purple-300/30 via-cyan-300/20 to-transparent"
          }`}
        />
      </motion.div>

      <motion.div className="relative z-10 text-center px-6" style={{ y }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <motion.h1
            className={`text-6xl md:text-8xl font-bold text-transparent bg-clip-text mb-4 ${
              isDarkMode
                ? "bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400"
                : "bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600"
            }`}
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            B N Swaminathan
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.8 }}
            className={`h-1 mx-auto max-w-md ${
              isDarkMode
                ? "bg-gradient-to-r from-purple-500 to-cyan-500"
                : "bg-gradient-to-r from-purple-600 to-cyan-600"
            }`}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Data Analyst • MCA Graduate • Business Intelligence Specialist
          <br />
          <span className={isDarkMode ? "text-purple-400" : "text-purple-600"}>
            Transforming complex data into strategic business insights
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-6 mb-12"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/Swamibhuvanesan",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/in/swami--nathan",
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:swamibhuvanesan@gmail.com",
              label: "Email",
            },
            { icon: Phone, href: "tel:+918825803793", label: "Phone" },
            { icon: MapPin, href: "#", label: "Chennai, India" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 backdrop-blur-sm rounded-full border transition-colors ${
                isDarkMode
                  ? "bg-white/10 border-white/20 hover:bg-white/20"
                  : "bg-black/10 border-black/20 hover:bg-black/20"
              }`}
            >
              <Icon
                className={`w-6 h-6 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col items-center"
        >
          <span
            className={`mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown
              className={`w-6 h-6 ${
                isDarkMode ? "text-purple-400" : "text-purple-600"
              }`}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
