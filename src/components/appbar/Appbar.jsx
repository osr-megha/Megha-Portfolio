import React from "react";
import "./appbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";

const Appbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <React.Fragment>
      <div className={"appbar " + (menuOpen && "active")} id="appbar">
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">
              <ArrowBackIosIcon className="personName" />
              <span className="personName"> Megha /</span>
              <ArrowForwardIosIcon className="personName" />
            </a>
            <div className="itemContainer ">
              <a href="dummy">
                <PersonIcon className="icon" />
                <span>My Resume</span>
              </a>
              {/*<span>+91 9953610367</span>*/}
            </div>
            <div className="itemContainer">
              {/*<span> megha-sharma@live.com</span>*/}
              <a
                href="mailto:megha-sharma@live.com"
                target="blank"
              >
                <EmailIcon className="icon" />
                <span>Email Me</span>
              </a>
            </div>
            <div className="itemContainer">
              <a
                href="https://www.linkedin.com/in/megha-sharma-a975354b/"
                target="blank"
              >
                <LinkedInIcon className="icon" />
                <span>LinkedIn</span>
              </a>
            </div>
            <div className="itemContainer">
              <a
                href="https://github.com/osr-megha"
                target="blank"
                
              >
                <GitHubIcon className="icon"/>
                <span>Github</span>
              </a>
            </div>
            <div className="itemContainer">
              <a
                href="https://www.facebook.com/profile.php?id=100001900459463"
                target="blank"
                
              >
                <FacebookIcon className="icon"/>
                <span>Facebook</span>
              </a>
            </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Appbar;
