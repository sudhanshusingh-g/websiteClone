
import './App.css';
import CitiesSection from './components/CitiesSection/CitiesSection';
import { Navbar } from './components/Navbar/Navbar';
import ParentBanner from './components/ParentBanner/ParentBanner';
import ResultSection from './components/ResultSection/ResultSection';
import SatBanner from './components/SatBanner/SatBanner';
import ServicesSection from './components/ServicesSection/ServicesSection';
import TopBanner from './components/TopBanner/TopBanner';
import VisitSection from './components/VisitSection/VisitSection';

function App() {
  return (
    <div>
      <Navbar/>
      <TopBanner/>
      <CitiesSection/>
      <ServicesSection/>
      <SatBanner/>
      <ParentBanner/>
      <ResultSection/>
      <VisitSection/>
    </div>
  );
}

export default App;
