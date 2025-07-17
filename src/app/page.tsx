import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import CohortHero from "@/components/Hero";
import NotesPage from "@/components/Notes";
import Tutorial from "@/components/Tutorial";
import navbar from "@/components/navbar"; // Make sure Navbar is imported

export default function Home() {
  return (
    <>
      <navbar />

      <div id="home" className="scroll-mt-24">
        <CohortHero />
      </div>

      <div id="courses" className="scroll-mt-24">
        <Courses />
      </div>

      <div id="notes" className="scroll-mt-24">
        <NotesPage />
      </div>

      <div id="about" className="scroll-mt-24">
        <Blog />
      </div>

      <div id="tutorial" className="scroll-mt-24">
        <Tutorial />
      </div>

      <div id="contact" className="scroll-mt-24">
        <Contact />
      </div>
    </>
  );
}

