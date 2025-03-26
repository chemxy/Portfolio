import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Portfolio from '@/components/sections/Portfolio';
import Contact from '@/components/sections/Contact';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}
