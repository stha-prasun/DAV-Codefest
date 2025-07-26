import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="left-0 w-full">
      <div className="left-0 w-full">
        <footer className="bg-[#080A16] text-white py-4 px-6 flex justify-between items-center text-sm">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={"././src/assets/logo.png"}
                alt="DsaBuddy Logo"
                style={{ width: "32px", height: "32px", objectFit: "contain" }}
              />
              <span className="font-medium">DsaBuddy</span>
            </Link>
          </motion.div>

          <motion.div
            className="text-gray-400 space-x-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span>Copyright © DsaBuddy</span>
            <span className="text-white">|</span>
            <Link to="#" className="hover:underline text-white font-semibold">
              Terms & Conditions
            </Link>
          </motion.div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
