import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="left-0 w-full">
      <div className=" left-0 w-full">
        <footer className="bg-[#080A16] text-white py-4 px-6 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={"././src/assets/logo.png"} 
                alt="DsaBuddy Logo"
                style={{ width: "32px", height: "32px", objectFit: "contain" }}
              />
              <span className="font-medium">DsaBuddy</span>
            </Link>
          </div>
          <div className="text-gray-400 space-x-2">
            <span>Copyright © DsaBuddy</span>
            <span className="text-white">|</span>
            <Link to="#" className="hover:underline text-white font-semibold">
              Terms & Conditions
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
