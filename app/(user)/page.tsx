
import ClientOnly from "../ClientOnly";
import getPageInfo from "../actions/getPageInfo";
import getProjects from "../actions/getProjects";
import getSocials from "../actions/getSocials";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export const revalidate = 30;

export default async function HomePage() {
  const pageInfo = await getPageInfo();
  const projects = await getProjects();
  const socials = await getSocials();
  // "react-vertical-timeline-component": "^3.6.0",

  return (
    <ClientOnly>
      <main className="bg-[rgb(41,41,41)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden gap-y-10">
      <section
        id="hero"
        className="snap-start bg-hero-pattern bg-cover bg-no-repeat bg-center"
      >
        <Hero pageInfo={pageInfo} socials={socials} />
      </section>
      <section id="About" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
   <section id="contact" className="snap-start ">
        <ContactMe />
      </section>
    </main>
    </ClientOnly>
  );
}
