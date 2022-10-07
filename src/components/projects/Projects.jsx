import React from "react";
import "./projects.scss";

const Projects = () => {

  const data = [
    {
      id: 1,
      name: "Shopping Cart",
      title: "with Google Pay",
      img:
        "https://images.pexels.com/photos/5614119/pexels-photo-5614119.jpeg?cs=srgb&dl=pexels-anna-shvets-5614119.jpg&fm=jpg",
      // icon: 'https://pixabay.com/vectors/icon-round-circular-symbol-web-3154240/',
      desc:
        "Shopping cart App with Context API & Google Pay",
      links:'https://guileless-travesseiro-2abd3c.netlify.app/'
    },
    {
      id: 2,
      name: "Crypto Tracker",
      title: "using Line chart",
      img:
        "https://images.pexels.com/photos/6780789/pexels-photo-6780789.jpeg?cs=srgb&dl=pexels-alesia-kozik-6780789.jpg&fm=jpg",
      // icon: 'https://pixabay.com/vectors/icon-round-circular-symbol-web-3154240/',
      desc:
        "Crypto tracker App using Line chart",
        links:'https://crypto-tracker-using-line-chart.vercel.app/',
        featured: true,
    },
    {
      id: 3,
      name: "Basic React App",
      title: "with Navigation",
      img:
        "https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?cs=srgb&dl=pexels-ketut-subiyanto-4126724.jpg&fm=jpg",
      // icon: 'https://pixabay.com/vectors/icon-round-circular-symbol-web-3154240/',
      desc:
        "Learning basic concepts of react js",
        links:'https://learning-react-js.vercel.app/'
    },
  ]

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="container">
      {data.map((d) => (
        <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
            {/*<img src="assets/arrow-right.png" alt="arrow" className="left" /> */}
            <img
              src={d.img}
              alt=""
              className="user"
            />
            {/*<img src={d.icon} alt="youtube" className="right" /> */}
          </div>
          <div className="center">{d.desc}</div>
          <div className="bottom">
            <h3>{d.name}</h3>
             {/*<h4>{d.title}</h4>*/}
            <a href={d.links} target="_blank" rel="noreferrer">
                <button>Visit Site</button>
              </a>
          </div>
        </div>
  ))}
      </div>
    </div>
  );
};

export default Projects;
