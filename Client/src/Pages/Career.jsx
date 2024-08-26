import React from 'react';
import img1 from "../assets/warehouse.jpg"
import img2 from "../assets/logistics_coordinator.jpg"
import img3 from "../assets/drive.jpg"
import img4 from "../assets/logesticbg.jpg"

const Career = () => {
  return (
    <div className="career-page p-8">
      <header className="career-header text-center mb-10">
        <br /><br /><br /><br />
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg text-gray-600">
          At our logistics company, we believe in innovation, collaboration, and commitment to excellence. We are looking for talented individuals who share our passion for transforming the logistics industry.
        </p>
      </header>

      <section className="career-opportunities mb-10">
        <h2 className="text-3xl font-semibold mb-6 text-center">Current Job Openings</h2>
        <div className="job-listing flex flex-wrap justify-center gap-8">
          <div className="job-card bg-gray-100 p-6 rounded-lg text-center w-72">
            <img className="w-full h-40 object-cover rounded-md mb-4" src= {img1} alt="Warehouse Manager" />
            <h3 className="text-2xl font-semibold mb-2">Warehouse Manager</h3>
            <p className="text-gray-600 mb-4">Manage daily operations of our warehouse, ensuring smooth inbound and outbound shipments.</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">Learn More</button>
          </div>
          <div className="job-card bg-gray-100 p-6 rounded-lg text-center w-72">
            <img className="w-full h-40 object-cover rounded-md mb-4" src={img2} alt="Logistics Coordinator" />
            <h3 className="text-2xl font-semibold mb-2">Logistics Coordinator</h3>
            <p className="text-gray-600 mb-4">Coordinate and optimize logistics processes, ensuring timely delivery and efficient transportation routes.</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">Learn More</button>
          </div>
          <div className="job-card bg-gray-100 p-6 rounded-lg text-center w-72">
            <img className="w-full h-40 object-cover rounded-md mb-4" src={img3} alt="Driver" />
            <h3 className="text-2xl font-semibold mb-2">Driver</h3>
            <p className="text-gray-600 mb-4">Ensure safe and timely delivery of goods to our clients, adhering to all safety regulations.</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">Learn More</button>
          </div>
        </div>
      </section>

      <section className="career-benefits mb-10 text-center">
        <h2 className="text-3xl font-semibold mb-6">Why Work With Us?</h2>
        <ul className="list-none">
          <li className="mb-2 text-lg text-gray-600">Competitive Salary and Benefits</li>
          <li className="mb-2 text-lg text-gray-600">Opportunities for Career Growth</li>
          <li className="mb-2 text-lg text-gray-600">Collaborative and Supportive Work Environment</li>
          <li className="mb-2 text-lg text-gray-600">Comprehensive Training Programs</li>
        </ul>
        <img className="w-full h-64 object-cover rounded-md mt-6" src={img4} alt="Team Collaboration" />
      </section>

      <section className="career-contact text-center">
        <h2 className="text-3xl font-semibold mb-6">How to Apply?</h2>
        <p className="text-lg text-gray-600">
          Interested candidates can send their resumes to <a className="text-blue-600 underline" href="mailto:careers@logisticscompany.com">careers@logisticscompany.com</a> or apply directly through our website.
        </p>
      </section>
    </div>
  );
};

export default Career;
