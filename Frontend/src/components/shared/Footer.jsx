import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#080A16] text-white py-4 px-6 w-full">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm space-y-4 sm:space-y-0">
        {/* Logo Section with Scale + Fade Animation */}
        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="././src/assets/logo.png"
              alt="DsaBuddy Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="font-medium text-white">DsaBuddy</span>
          </Link>
        </motion.div>

        {/* Right Side with Slide Up Animation */}
        <motion.div
          className="text-gray-400 flex items-center space-x-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span>© {new Date().getFullYear()} DsaBuddy</span>
          <span className="text-white">|</span>
          <Link to="#" className="hover:underline text-white font-semibold">
            Terms & Conditions
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
