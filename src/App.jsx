import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import QueueCharts from "./components/QueueCharts";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <QueueCharts />
      <FeaturesSection />
      <Footer />
    </>
  );
}

export default App;