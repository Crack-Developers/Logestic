import React, { useState } from 'react';
import img1 from "../assets/beautiful girl sitting.jpg"
import img2 from "../assets/female-marketing-manager-leading-strategy-meeting-704x421.webp"
import img3 from "../assets/drive.jpg"
import img4 from "../assets/sales.avif"

// Modal Component
const JobModal = ({ job, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg overflow-y-auto max-h-[80vh]">
        {/* Close Button */}
        <button
          className="absolute top-2 right-4 text-gray-600 hover:text-gray-800 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        {/* Job Content */}
        <h2 className="text-2xl font-bold mb-4">{job.title}</h2>
        <p className="text-sm mb-4"><strong>Experience:</strong> {job.experience}</p>
        <p className="text-sm mb-4"><strong>Location:</strong> {job.location}</p>
        <p className="text-sm mb-4"><strong>Note:</strong> {job.note}</p>
        <h3 className="text-xl font-semibold mb-2">Role Overview:</h3>
        <p className="text-gray-700 mb-4">{job.roleOverview}</p>
        <h3 className="text-xl font-semibold mb-2">Key Responsibilities:</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          {job.responsibilities?.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mb-2">Qualifications:</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          {job.qualifications?.map((qualification, index) => (
            <li key={index}>{qualification}</li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mb-2">What We Offer:</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          {job.offerings?.map((offer, index) => (
            <li key={index}>{offer}</li>
          ))}
        </ul>
        <p className="text-sm mb-4"><strong>How to Apply:</strong> {job.apply}</p>
      </div>
    </div>
  );
};

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobDetails = {
    salesExecutive: {
      title: "Sales Executive",
      experience: "Freshers",
      location: "Villupuram",
      note: "Candidates will not be provided with any accommodation.",
      roleOverview: "As a Sales Executive, you will be responsible for generating new business opportunities, developing relationships with potential clients, and driving sales growth.",
      responsibilities: [
        "Identify and prospect new business opportunities through various channels.",
        "Build and maintain strong relationships with potential and existing clients.",
        "Conduct sales presentations and product demonstrations to prospective clients.",
        "Develop and execute sales strategies to achieve monthly and quarterly targets.",
        "Collaborate with the marketing team to create and implement promotional campaigns.",
        "Negotiate contracts and close sales to meet or exceed sales goals.",
        "Provide exceptional customer service and support throughout the sales process.",
        "Track and report on sales activities and performance metrics."
      ],
      qualifications: [
        "Excellent communication and interpersonal skills.",
        "Strong negotiation and closing abilities.",
        "Ability to work independently and as part of a team.",
        "Any Degree in Business, Marketing, or a related field is preferred."
      ],
      offers: [
        "Opportunities for career growth and development.",
        "A collaborative and innovative work environment."
      ],
      howToApply: "Send your resume to hr@fcube.com"
    },
    marketingExecutive: {
      title: "Marketing Executive",
      experience: "Freshers",
      location: "Villupuram",
      note: "Candidates will not be provided with any accommodation.",
      roleOverview: "As a Marketing Executive, you have to develop and implement marketing strategies to promote company’s services.",
      responsibilities: [
        "Conduct market research to identify trends, customer needs, and competitive landscape.",
        "Plan and execute marketing campaigns across various channels (digital, social media, etc.).",
        "Develop engaging content for websites, social media, email marketing, and other platforms.",
        "Assist in managing the company’s online presence and reputation.",
        "Develop strategies to engage with current and potential customers."
      ],
      qualifications: [
        "Bachelor’s degree in Marketing, Business, or a related field.",
        "Strong understanding of marketing principles and techniques.",
        "Proficiency in digital marketing tools and platforms.",
        "Excellent written and verbal communication skills.",
        "Creative thinking and problem-solving abilities.",
        "Ability to work collaboratively in a team environment.",
        "Organizational and project management skills."
      ],
      offers: [
        "Opportunities for career growth and development.",
        "A collaborative and innovative work environment."
      ],
      howToApply: "Send your resume to hr@fcube.com"
    },
    customsDocumentationExecutive: {
      title: "Customs Documentation Executive",
      experience: "Freshers",
      location: "Villupuram",
      note: "Candidates will not be provided with any accommodation.",
      roleOverview: "As a Customs Documentation Executive, you’re responsible for managing and ensuring the accuracy of all customs-related documentation for international shipments. This role involves preparing and processing documents required for import and export compliance, coordinating with customs authorities, and facilitating smooth customs clearance.",
      responsibilities: [
        "Generate and review necessary customs documentation, including invoices, packing lists, certificates of origin, and import/export declarations.",
        "Ensure all documentation complies with relevant regulations and international trade laws to prevent delays and penalties.",
        "Keep accurate and organized records of all customs-related documents and correspondence for auditing and compliance purposes.",
        "Stay updated on changes in customs regulations and trade policies to ensure ongoing compliance.",
        "Assist in managing logistics processes, including tracking shipments and addressing any customs-related challenges."
      ],
      qualifications: [
        "Typically, a degree in logistics, international business, or a related field.",
        "In-depth knowledge of international trade laws, customs regulations, and import/export procedures.",
        "Strong verbal and written communication skills for liaising with customs authorities, stakeholders, and other departments.",
        "Capability to address and resolve issues related to customs documentation and shipment delays.",
        "Proficiency in using Microsoft Office Suite (especially Excel) and familiarity with customs and logistics software."
      ],
      offers: [
        "Opportunities for career growth and development.",
        "A collaborative and innovative work environment."
      ],
      howToApply: "Send your resume to hr@fcube.com"
    }
  };

  return (
    <div className="career-page p-8">
      <header className="career-header text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg text-gray-600">
          At our logistics company, we believe in innovation, collaboration, and commitment to excellence. We are looking for talented individuals who share our passion for transforming the logistics industry.
        </p>
      </header>

      <section className="career-opportunities mb-10">
        <h2 className="text-3xl font-semibold mb-6 text-center">Current Job Openings</h2>
        <div className="job-listing flex flex-wrap justify-center gap-8">
          <div className="job-card bg-gray-100 p-6 rounded-lg text-center w-72 flex flex-col justify-between">
            <div><img className="w-full h-40 object-cover rounded-md mb-4" src={img1} alt="Sales Executive" />
            <h3 className="text-2xl font-semibold mb-2">Sales Executive</h3>
            <p className="text-gray-600 mb-4">Manage daily operations of our warehouse, ensuring smooth inbound and outbound shipments.</p></div>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
              onClick={() => setSelectedJob(jobDetails.salesExecutive)}
            >
              Learn More
            </button>
          </div>

          <div className="job-card bg-gray-100 p-6 rounded-lg text-center w-72 flex flex-col justify-between">
            <div><img className="w-full h-40 object-cover rounded-md mb-4" src={img2} alt="Marketing Executive" />
            <h3 className="text-2xl font-semibold mb-2">Marketing Executive</h3>
            <p className="text-gray-600 mb-4">Coordinate and optimize logistics processes, ensuring timely delivery and efficient transportation routes.</p></div>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
              onClick={() => setSelectedJob(jobDetails.marketingExecutive)}
            >
              Learn More
            </button>
          </div>

          <div className="job-card bg-gray-100 p-6 rounded-lg text-center w-72 flex flex-col justify-between">
            <div><img className="w-full h-40 object-cover rounded-md mb-4" src={img3} alt="Customs Documentation Executive" />
            <h3 className="text-2xl font-semibold mb-2">Customs Documentation Executive</h3>
            <p className="text-gray-600 mb-4">Ensure safe and timely delivery of goods to our clients, adhering to all safety regulations.</p></div>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
              onClick={() => setSelectedJob(jobDetails.customsDocumentationExecutive)}
            >
              Learn More
            </button>
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
          Interested candidates can send their resumes to <a className="text-blue-600 underline" href="mailto:samvinnyfred@samportofreightforwarding.com">samvinnyfred@samportofreightforwarding.com</a>
        </p>
      </section>

      {/* Modal for Job Details */}
      {selectedJob && <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
    </div>
  );
};

export default Career;
