import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonial.scss";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const testimonialsQuery = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(testimonialsQuery).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      console.log(data);
      setBrands(data);
    });
  }, []);

  const currentTestimonial = testimonials[currentIndex]

  
  return (
    <React.Fragment>
      {testimonials.length && (
        <React.Fragment>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(currentTestimonial.imageurl)} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{currentTestimonial.feedback}</p>
              <div>
                <h4 className="bold-text">{currentTestimonial.name}</h4>
                <h5 className="p-text">{currentTestimonial.company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length-1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>
            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </React.Fragment>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1]}}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonials",
  "app__primarybg"
);
