"use client";

import { groq } from "next-sanity";
import { usePreview } from "../lib/sanity.preview";
import { PageInfo, Project, Social } from "../typing";
import { About, Hero, Projects, ContactMe, Skills } from "../components";

const pageInfoQuery = groq`
    *[_type == "pageInfo"][0]
`;

const socialsQuery = groq`
  *[_type == "social"]
`;

const projectQuery = groq`
  *[_type == "project"]{
      ...,
      technologies[]->
  }
`;

export default function PreviewPage() {
  const pageInfo: PageInfo = usePreview(null, pageInfoQuery);
  const socials: Social[] = usePreview(null, socialsQuery);
  const projects: Project[] = usePreview(null, projectQuery);

  return (
    <div className="bg-[rgb(41,41,41)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
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
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}
