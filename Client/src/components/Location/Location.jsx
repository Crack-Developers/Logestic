import React from "react";

const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to visit
          </h1>

          <div className="rounded-xl ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3903.5301489538365!2d79.51709027441262!3d11.937751536701922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNo.%209%2C10%20First%20Floor%2C%20Sri%20Sri%20Sri%20Thirumal%20Complex%2C%20Opp%3A%20TN%20Housing%20Board%2C%20East%20Pondy%20Road%2C%20Maharajapuram%2C%20Villupuram%20605602!5e0!3m2!1sen!2sin!4v1727414229512!5m2!1sen!2sin"
              width="100%"
              height="360"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
