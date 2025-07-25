import React from "react";
import Navbar  from "./shared/Navbar";
const HomePage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('././src/assets/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
    </div>
  );
};

export default HomePage;
