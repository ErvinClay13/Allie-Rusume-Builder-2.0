import React from "react";
import { useNavigate } from "react-router-dom";
import "./SplashScreen.css";
import AllieImg from "../assets/Allie_Hello.png";

const SplashScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="splash-container">
      <img src={AllieImg} alt="" />
      <h1>Welcome to Allie-AI Resume Builder</h1>
      <button onClick={() => navigate("/resume-form")} className="start-button">
        Start Building
      </button>
    </div>
  );
};

export default SplashScreen;
