import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import CohortHero from "@/components/Hero";
import NotesPage from "@/components/Notes";
import Tutorial from "@/components/Tutorial";

export default function Home() {
  return (
   <>
   <CohortHero />
   <Courses />
<NotesPage />
<Blog />
   <Tutorial  />
   <Contact />

   </>
  );
}
