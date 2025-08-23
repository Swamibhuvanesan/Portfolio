import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

interface FooterProps {
  isDarkMode: boolean;
}

const Footer = ({ isDarkMode }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
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
    { icon: Mail, href: "mailto:swamibhuvanesan@gmail.com", label: "Email" },
  ];

  return (
    <footer
      className={`py-12 px-6 transition-colors duration-300 ${
        isDarkMode ? "bg-black" : "bg-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2"
            >
              B N Swaminathan
            </motion.h3>
            <p className="text-gray-400 text-sm max-w-md">
              Data Analyst and MCA Graduate specializing in statistical
              analysis, predictive modeling, and business intelligence.
              Transforming complex data into strategic business insights.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors group"
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-purple-500/50 to-cyan-500/50 my-8 origin-left"
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} B N Swaminathan. All rights reserved.</p>
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1"
          >
            Built with <Heart className="w-4 h-4 text-red-500 fill-current" />{" "}
            using React & Tailwind CSS
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
