import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import Hero from "../components/sections/Hero.jsx";
import TrustBar from "../components/sections/TrustBar.jsx";
import Capabilities from "../components/sections/Capabilities.jsx";
import MarketPulse from "../components/sections/MarketPulse.jsx";
import SolutionsBento from "../components/sections/SolutionsBento.jsx";
import Quality from "../components/sections/Quality.jsx";
import GlobalReach from "../components/sections/GlobalReach.jsx";
import FAQ from "../components/sections/FAQ.jsx";
import Contact from "../components/sections/Contact.jsx";

export default function Home() {
  return (
    <div>
      <a className="skipLink" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustBar />
        <Capabilities />
        <MarketPulse />
        <SolutionsBento />
        <Quality />
        <GlobalReach />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

