import { useState } from "react";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import StatCard from "./components/StatCard";
import Features from "./components/Features";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";

function App() {
  const [stars, setStars] = useState(0);
  const [downloads, setDownloads] = useState(0);
  const [issues, setIssues] = useState(5);

  function handleStar() {
    setStars(stars + 1);
  }

  function handleDownload() {
    setDownloads(downloads + 1);
  }

  function handleReport() {
    setIssues(issues + 1);
  }

  function handleReset() {
    setStars(0);
    setDownloads(0);
    setIssues(5);
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FFF9F2] text-[#800020]">
      <Navbar />
      <Hero />
      <Intro />
      <Stats 
        stars={stars}
        downloads={downloads}
        issues={issues}
        onStar={handleStar}
        onDownload={handleDownload}
        onReport={handleReport}
        onReset={handleReset}
      />
      <StatCard
        stars={stars}
        downloads={downloads}
        issues={issues}
      />
      <Features />
      <FeatureCard
        tag="Free"
        title="Open source"
        description="Read the code and use it in any project."
      />
      <FeatureCard
        tag="Small"
        title="Lightweight"
        description="Import only the components the page uses."
      />  
    <FeatureCard
        tag="Simple"
        title="Easy to learn"
        description="Every component takes a few plain props."
      />
      <Footer />
    </div>
  );
}

export default App;