import Navbar from '@/components/Navbar';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default async function Home() {
    return (
        <>
            <Navbar/>
            <main className="w-full">
                <Hero/>
                <About/>
                <Education/>
                <Skills/>
                <Experience/>
                <Portfolio/>
                <Contact/>
            </main>
        </>
    );
}
