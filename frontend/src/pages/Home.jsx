// src/pages/Home.js
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Services from "../components/Services";
import NewsletterModal from "../components/NewsletterModal";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Services />
      <NewsletterModal />
    </div>
  );
};

export default Home;
