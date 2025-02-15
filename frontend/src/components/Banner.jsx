// src/components/Banner.js
const backgroundImage = "../assets/ledflexgroup_cover.jpg";
const Banner = () => {
    return (
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
          <p className="text-lg">OSLO, NORWAY</p>
          <h1 className="text-6xl font-bold">DELTA</h1>
          <button className="mt-4 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
            View Project
          </button>
          <p className="absolute bottom-10">Scroll Down</p>
        </div>
      </div>
    );
  };
  
  export default Banner;
  