import React from 'react';
import HeaderImage from '../assets/package.jpg'; // Ensure the path is correct for your project structure

const Packeging = () => {
  return (
    <div className="w-full">
      {/* Header Image Section */}
      <div className="relative w-full">
        <img 
          src={HeaderImage} 
          alt="Packages" 
          className="w-screen h-[300px] object-cover" // Full width and cover both sides
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-extrabold bg-black bg-opacity-50">
          Packaging Services
        </h1>
      </div>
      
      {/* Content Section */}
      <div className="p-8 text-center max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-800">
          Tailored Packaging Solutions for Every Need
        </h2>
        
        <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
          At Samport, we prioritize the secure transport of your products. We offer customized packaging solutions to suit diverse needs, ensuring your goods are protected throughout the entire logistics process. Whether it's electronics, machinery, or other items, our solutions are designed with precision and care.
        </p>
        
        <hr className="my-8 border-t border-gray-300 max-w-lg mx-auto" />
        
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 max-w-3xl mx-auto">
            <li className="mb-2">Bespoke Design: We craft packaging tailored to fit your products, ensuring they are protected during transit.</li>
            <li className="mb-2">Quality Materials: Our high-grade materials provide superior protection, from impact-resistant foams to moisture-proof wraps.</li>
            <li className="mb-2">Expert Handling: Our trained professionals manage a wide range of items, including fragile and high-value goods.</li>
            <li className="mb-2">Sustainability: We are committed to using environmentally friendly packaging materials wherever possible.</li>
          </ul>
        </div>
        
        <hr className="my-8 border-t border-gray-300 max-w-lg mx-auto" />
        
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Services Include:</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 max-w-3xl mx-auto">
            <li className="mb-2">Custom Crating and Palletizing: Secure support for larger or heavier items.</li>
            <li className="mb-2">Shrink Wrapping: Protects goods from moisture, dust, and tampering.</li>
            <li className="mb-2">Cushioning: We fill empty spaces with cushioning materials to prevent movement and damage.</li>
            <li className="mb-2">Anti-Static Packaging: Safeguards sensitive electronics from static discharge.</li>
            <li className="mb-2">Temperature-Controlled Packaging: Ideal for perishable goods requiring controlled environments.</li>
          </ul>
        </div>
        
        <hr className="my-8 border-t border-gray-300 max-w-lg mx-auto" />
        
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          We understand that every product has unique packaging needs. Our team works closely with you to design the most suitable solutions, ensuring your items arrive safely at their destination.
        </p>
        
        <hr className="my-8 border-t border-gray-300 max-w-lg mx-auto" />
        
        <div className="bg-blue-50 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Packaging at Your Location
          </h3>
          <p className="text-lg text-gray-700">
            We offer convenient on-site packaging services, providing flexibility for your logistics needs. Wherever you are, we ensure your products are expertly packed and ready for transport.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Packeging;
