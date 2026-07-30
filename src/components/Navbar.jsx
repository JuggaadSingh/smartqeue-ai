import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import StatsSection from "./components/StatsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;