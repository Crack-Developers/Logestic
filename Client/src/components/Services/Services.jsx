import React from "react";
import { IoCube, IoAirplane, IoBusiness, IoCartOutline, IoSpeedometer, IoPeople } from "react-icons/io5"; // Updated icons for logistics
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: "Freight Forwarding",
    link: "#",
    icon: <IoAirplane />,
    delay: 0.2,
  },
  {
    id: 3,
    title: "Warehousing & Distribution",
    link: "#",
    icon: <IoCube />,
    delay: 0.4,
  },
  {
    id: 6,
    title: "Customer Support & Experience",
    link: "#",
    icon: <IoPeople />,
    delay: 0.7,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">
          About Us
        </h1>
        <div className="text-left pb-10">
          <p className="mb-4">
          Welcome to Samporto Freight Forwarding!
          </p>
          <p className="mb-4">
            Since our inception, we’ve been dedicated to providing top-notch logistics solutions. Our commitment to excellence and innovation drives us to offer a comprehensive range of services that ensure efficient and reliable supply chain management. Whether it’s freight forwarding, warehousing, or e-commerce fulfillment, we are here to handle all your logistics needs with precision and care.
          </p>
          <p>
            Partner with us to streamline your logistics and grow your business!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4"> {service.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
