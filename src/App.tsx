import './App.css'
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import PortfolioSection from './components/PortfolioSection';
import ProcessSection from './components/ProcessSection';
import ServicesSection from './components/ServicesSection';
function App() {
 

  return (
    <div className="App">
    <Header />
    <HeroSection />
    <ServicesSection/>
    <ProcessSection/>
    <PortfolioSection/>
    <ContactUs/>
    <Footer/>
  </div>
);
};


export default App
