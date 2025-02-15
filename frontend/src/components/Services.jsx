// src/components/Services.js
const Services = () => {
    return (
      <div className="bg-gray-900 text-white py-16">
        <h2 className="text-4xl text-center font-bold mb-8">Our Core Services</h2>
        <div className="flex justify-center space-x-6">
          <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold">Custom LED Solutions</h3>
            <p className="text-gray-400">Innovative designs tailored for your needs.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold">Project Consultation</h3>
            <p className="text-gray-400">Expert advice on lighting and design solutions.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold">Sustainable Lighting</h3>
            <p className="text-gray-400">Eco-friendly and energy-efficient solutions.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;
  