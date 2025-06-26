import { useEffect, useState } from "react";
import "./App.css";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import ProcessSection from "./components/ProcessSection";
import ServicesSection from "./components/ServicesSection";
import Testimonials from "./components/Testimonials";
import Loader from "./components/Loader"; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <HeroSection />
          <ServicesSection />
          <ProcessSection />
          <PortfolioSection />
          <Testimonials />
          <ContactUs />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
