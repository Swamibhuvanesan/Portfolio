import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
} from "lucide-react";

interface ContactProps {
  isDarkMode: boolean;
}

const Contact = ({ isDarkMode }: ContactProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "swamibhuvanesan@gmail.com",
      href: "mailto:swamibhuvanesan@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8825803793",
      href: "tel:+918825803793",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Chennai, India",
      href: "#",
    },
  ];

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
  ];

  return (
    <section
      id="contact"
      className={`py-20 px-6 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-slate-50"
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
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Connect
            </span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Ready to collaborate on data-driven projects? Let's discuss how we
            can work together to unlock insights from your data.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3
                className={`text-3xl font-bold mb-8 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Get in Touch
              </h3>
              <p
                className={`text-lg leading-relaxed mb-8 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I'm always open to discussing new opportunities in data
                analysis, collaborations, or just having a conversation about
                data science and analytics. Feel free to reach out!
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`flex items-center gap-4 p-4 backdrop-blur-sm rounded-xl border transition-colors group ${
                    isDarkMode
                      ? "bg-white/5 border-white/10 hover:bg-white/10"
                      : "bg-gray-100 border-gray-200 hover:bg-gray-200"
                  }`}
                >
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4
                      className={`font-semibold transition-colors ${
                        isDarkMode
                          ? "text-white group-hover:text-purple-400"
                          : "text-gray-900 group-hover:text-purple-600"
                      }`}
                    >
                      {info.title}
                    </h4>
                    <p
                      className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                    >
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4
                className={`text-xl font-semibold mb-6 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 backdrop-blur-sm rounded-xl border transition-colors ${
                      isDarkMode
                        ? "bg-white/10 border-white/20 hover:bg-white/20"
                        : "bg-gray-100 border-gray-200 hover:bg-gray-200"
                    }`}
                  >
                    <social.icon
                      className={`w-6 h-6 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className={`backdrop-blur-sm rounded-2xl p-8 border ${
                isDarkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-white border-gray-200"
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Send Message
              </h3>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className={`block font-medium mb-2 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:border-purple-400 focus:outline-none transition-colors ${
                        isDarkMode
                          ? `bg-white/10 ${
                              errors.name ? "border-red-400" : "border-white/20"
                            } text-white placeholder-gray-400`
                          : `bg-gray-50 ${
                              errors.name ? "border-red-400" : "border-gray-300"
                            } text-gray-900 placeholder-gray-500`
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      className={`block font-medium mb-2 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Email
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:border-purple-400 focus:outline-none transition-colors ${
                        isDarkMode
                          ? `bg-white/10 ${
                              errors.email
                                ? "border-red-400"
                                : "border-white/20"
                            } text-white placeholder-gray-400`
                          : `bg-gray-50 ${
                              errors.email
                                ? "border-red-400"
                                : "border-gray-300"
                            } text-gray-900 placeholder-gray-500`
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    className={`block font-medium mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Subject
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:border-purple-400 focus:outline-none transition-colors ${
                      isDarkMode
                        ? `bg-white/10 ${
                            errors.subject
                              ? "border-red-400"
                              : "border-white/20"
                          } text-white placeholder-gray-400`
                        : `bg-gray-50 ${
                            errors.subject
                              ? "border-red-400"
                              : "border-gray-300"
                          } text-gray-900 placeholder-gray-500`
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className={`block font-medium mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-xl focus:border-purple-400 focus:outline-none transition-colors resize-none ${
                      isDarkMode
                        ? `bg-white/10 ${
                            errors.message
                              ? "border-red-400"
                              : "border-white/20"
                          } text-white placeholder-gray-400`
                        : `bg-gray-50 ${
                            errors.message
                              ? "border-red-400"
                              : "border-gray-300"
                          } text-gray-900 placeholder-gray-500`
                    }`}
                    placeholder="Tell me about your data project or just say hello!"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-semibold transition-all ${
                    isSubmitted
                      ? "bg-green-600 text-white"
                      : "bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700"
                  } disabled:opacity-50`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
