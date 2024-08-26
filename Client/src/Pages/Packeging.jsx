import React from 'react';
import HeaderImage from '../assets/package.jpg'; // Ensure the path is correct for your project structure

const Packeging = () => {
  return (
    <div className="w-full">
      {/* Quote Section */}
      <div className="bg-blue-600 text-white text-center py-4 px-6 shadow-lg">
        <h1 className="text-3xl font-extrabold">
          <br /><br />
          FCube - Packing so good you’ll want to unpack just to see what we did
        </h1>
      </div>

      {/* Header Image Section */}
      <div className="relative w-full">
        <img 
          src={HeaderImage} 
          alt="Packages" 
          className="w-screen h-[300px] object-cover" // Full width and cover both sides
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-extrabold bg-black bg-opacity-50">
          Packages
        </h1>
      </div>
      
      {/* Content Section */}
      <div className="p-8 text-center max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-800">
          Premium Packaging Solutions for Your Logistics Needs
        </h2>
        
        <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
          At [Your Company Name], we understand that the safety and security of your goods are paramount. That’s why we offer tailored packaging solutions that are as diverse as your shipping needs. Whether you’re transporting delicate electronics, heavy machinery, or anything in between, our state-of-the-art packaging services are designed to protect your products every step of the way.
        </p>
        
        <hr className="my-8 border-t border-gray-300 max-w-lg mx-auto" />
        
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Why Choose Our Packaging Services?</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 max-w-3xl mx-auto">
            <li className="mb-2">Custom Packaging Design: We create bespoke packaging solutions that fit your products perfectly, ensuring maximum protection during transit.</li>
            <li className="mb-2">High-Quality Materials: We use only the best materials, from impact-resistant foam to weatherproof wraps, to safeguard your goods against any eventuality.</li>
            <li className="mb-2">Expert Handling: Our team of packaging specialists is trained to handle a wide variety of items, including fragile, high-value, and oversized goods.</li>
            <li className="mb-2">Sustainability Focus: We are committed to using eco-friendly materials whenever possible, helping to reduce our environmental footprint while maintaining top-notch protection.</li>
          </ul>
        </div>
        
        <hr className="my-8 border-t border-gray-300 max-w-lg mx-auto" />
        
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Comprehensive Packaging Services Include:</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 max-w-3xl mx-auto">
            <li className="mb-2">Custom Crating and Palletizing: For large or heavy items, our custom crates and pallets provide secure support and protection.</li>
            <li className="mb-2">Shrink Wrapping: Ideal for protecting your goods from moisture, dust, and tampering.</li>
            <li className="mb-2">Void Fill and Cushioning: We use high-quality materials to fill any empty spaces and provide cushioning to prevent movement and damage.</li>
            <li className="mb-2">Anti-Static Packaging: For electronic goods, we offer anti-static packaging to protect sensitive components from electrostatic discharge.</li>
            <li className="mb-2">Temperature-Controlled Packaging: For perishable goods, our temperature-controlled packaging solutions ensure your products stay fresh and intact during transit.</li>
          </ul>
        </div>
        
        <hr className="my-8 border-t border-gray-300 max-w-lg mx-auto" />
        
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Every product is different, and so are its packaging needs. That's why we work closely with you to develop packaging strategies that align with the specific requirements of your goods, ensuring they arrive at their destination in the same condition they left.
        </p>
        
        <hr className="my-8 border-t border-gray-300 max-w-lg mx-auto" />
        
        <div className="bg-blue-50 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Location, Your Packaging
          </h3>
          <p className="text-lg text-gray-700">
            We bring our top-notch packaging services to your preferred location, ensuring convenience and flexibility. Wherever you need us, we’ll be there to pack and protect your valuable goods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Packeging;
