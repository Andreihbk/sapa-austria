import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";

import Services from "../../components/Services"; 
import Projects from "../../components/Projects"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Services />
      <Projects /> {/* <--- Plasare nouă */}
      
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-500 italic">
          ... Urmează Contact și Footer ...
        </p>
      </div>
    </main>
  );
}