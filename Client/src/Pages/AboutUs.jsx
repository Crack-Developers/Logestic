import React from "react";
import bgImage from "../assets/aboutbg.jpg"; // Replace with the path to your background image

const AboutUs = () => {
  return (
    <div className="relative">
      {/* Header Section */}
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-white text-5xl font-bold z-10"><br/>ABOUT US</h1>
      </div>

      <div className="container mx-auto px-6 py-16">
        
        {/* Our History Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Our History</h2>
          <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            In 2024, amidst a year marked by both personal and academic challenges, Sam Vinny Fred J embarked on a journey that would transform his life and the freight forwarding industry. The same year marked the beginning of a new chapter for Sam, who had faced numerous hurdles, including struggles during his college years and moments of doubt. Despite being an average student with a notable academic setback in his final year, Sam's resilience and determination became the driving force behind the inception of this company.
          </p>
          <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed mt-4">
            Unlike many families who might have discouraged unconventional paths, Sam’s family supported his dream of starting a business, providing a foundation of encouragement and belief. Since its inception, Samporto Forwarding has established itself as a committed player in the freight forwarding industry. Our dedication to providing reliable and efficient services has been central to our growth. We have made significant strides, with a clear focus on becoming an influential player in the global freight forwarding landscape.
          </p>
          <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed mt-4">
            While global expansion is a part of our strategy, our primary goal is to establish a significant and impactful presence in the industry. We aim to set new standards through exceptional service and innovative solutions. Our mission is to inspire others by showcasing that skills and perseverance are crucial to achieving success, beyond traditional academic metrics.
          </p>
          <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed mt-4">
            The journey has been marked by overcoming numerous challenges. Each obstacle has been met with strategic solutions and a resilient approach, reinforcing our ability to adapt and excel. Our story demonstrates that determination, supported by a strong network, can transform challenges into opportunities.
          </p>
        </section>

        <hr className="border-t border-gray-300 mx-auto w-2/3" />

        {/* What We Do Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-6">What We Do</h2>
          <ul className="text-gray-700 max-w-4xl mx-auto leading-relaxed list-none text-center">
            <li className="mb-4">Give you the best freight rates in the market.</li>
            <li className="mb-4">Faster Customs Clearance</li>
            <li className="mb-4">Quick Transportation</li>
            <li className="mb-4">Tie up with local Container Freight Stations</li>
          </ul>
        </section>
        <br /><br />

        <hr className="border-t border-gray-300 mx-auto w-2/3" />

        {/* Our Vision & Mission Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-6">Our Vision & Mission</h2>
          <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold">OUR VISION:</span> To become the best Freight Forwarding Company around the globe by satisfying our clients, giving out the best customer experience, and being trustworthy in order to build long-lasting relationships.
          </p>
          <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed mt-4">
            <span className="font-semibold">OUR MISSION:</span> To provide the best customer experience by developing our technology. To be more cost-effective, eco-friendly, and to achieve sustainable growth towards both business and environment.
          </p>
        </section>
        <br /><br />

        <hr className="border-t border-gray-300 mx-auto w-2/3" />

        {/* Our Core Values Section 
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-6">Our Core Values</h2>
          <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            “A man without a smiling face must not open a shop”. For us, customers are the first priority. We at F-Cube will always be friendly, available to our customers 24/7, and always open for your inquiries. F-Cube focuses on core values:
          </p>
          <ul className="text-gray-700 max-w-4xl mx-auto leading-relaxed list-disc list-inside mt-4">
            <li className="mb-4"><span className="font-semibold">F – Fairness:</span> In our work by not leaking out any information.</li>
            <li className="mb-4"><span className="font-semibold">C – Commitment:</span> To the customers by consistently being loyal and considering your feedback.</li>
            <li className="mb-4"><span className="font-semibold">U – Uniqueness:</span> In our work.</li>
            <li className="mb-4"><span className="font-semibold">B – Best trained:</span> And well-experienced team.</li>
            <li className="mb-4"><span className="font-semibold">E – Excellence:</span> In pursuing the highest quality services for our clients.</li>
          </ul>
        </section>*/}
      </div>
    </div>
  );
};

export default AboutUs;
