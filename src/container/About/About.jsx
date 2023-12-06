import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { useMediaQuery } from 'react-responsive'

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    const query = `*[_type == "abouts"]`;

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <React.Fragment>
      <h2 className="head-text" style={{ marginTop: "50px" }}>
        I Know That <span>Good Development</span>
        <br /> means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            data-tooltip-id={about.title}
            key={about.title}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: "20px", textAlign: 'center', width: '100%' }}>
              {about.title}
            </h2>
            <ReactTooltip
              id={about.title}
              effect="solid"
              arrowColor="#fff"
              className="about-tooltip"
              place={isMobile || isTablet ? 'top': 'right'}
            >
              {about.description}
            </ReactTooltip>
          </motion.div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
