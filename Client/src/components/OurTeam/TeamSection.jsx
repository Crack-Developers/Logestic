import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import img1 from "../../assets/lp.jpeg";
import img from "../../assets/m.jpg";
/* Add this to your main CSS file */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  { id: 1, name: "Sam Vinny Fred J", designation: "Founder & CEO", imgSrc: img1 },
  { id: 2, name: "John De Britto L", designation: "Managing Director", imgSrc: img },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

const TeamSection = () => {
  return (
    <section className="bg-white py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Team</h2>
        <div className="hidden md:flex flex-wrap justify-center gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="flex flex-col items-center bg-[#f4f4f4] rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              style={{ width: "200px" }}
            >
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-center">{member.name}</h3>
              <p className="text-sm text-gray-600 text-center">{member.designation}</p>
            </motion.div>
          ))}
        </div>
        <div className="md:hidden">
          <Slider {...settings}>
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="flex flex-col items-center bg-[#f4f4f4] rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold text-center">{member.name}</h3>
                <p className="text-sm text-gray-600 text-center">{member.designation}</p>
              </motion.div>
            ))}
          </Slider>
        </div>
        {/* View More button 
        <div className="text-center mt-10">
          <a
            className="inline-block bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-dark transition duration-300"
            href="/team"
          >
            View More
          </a>
        </div>*/}
      </div>
    </section>
  );
};

export default TeamSection;
