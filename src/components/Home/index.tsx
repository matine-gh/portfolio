import { CardList } from "@/components/Common";
import Contact from "@/components/Contact";
import About from "@/components/About/indext";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className={"scroll-smooth"}>
      <CardList />
      <About />
      <Projects />
      <Contact />
      <Skills />
    </main>
  );
}
