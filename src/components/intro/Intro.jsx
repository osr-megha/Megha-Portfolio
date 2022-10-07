import React from "react";
import "./intro.scss";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Intro = () => {
  
  return (
    <div className="intro" id="intro">
      <div className="mask">
        <img src='https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg?cs=srgb&dl=pexels-pixabay-289586.jpg&fm=jpg' alt="introImg" className="introImg" />
      </div>

      <div className="content">
      <h2>Welcome</h2>
        <p>I am a Freelance</p>   
        <h1>  JavaScript Developer</h1>   
      </div>
      <a href="#portfolio">
          <ArrowDownwardIcon  className="arrowIcon"/>
        </a>
    </div>
  );
};

export default Intro;
