import React from "react";
import useTheme from "../hooks/useTheme";
import Navbar from "../containers/Navbar";

function Home() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={` h-screen  `}>
      <Navbar />
    </div>
  );
}

export default Home;
