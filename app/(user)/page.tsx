import { groq } from "next-sanity";
import {
  About,
  ContactMe,
  Hero,
  Projects,
  Skills,
  PreviewPage,
  PreviewSuspense,
} from "../../components";
import { client } from "../../lib/sanity.client";
import { PageInfo, Project, Social } from "../../typing";
import { previewData } from "next/headers";


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

export const revalidate = 30;

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
              Loading Preview Data
            </p>
          </div>
        }
      >
        <PreviewPage />
      </PreviewSuspense>
    );
  }
  const pageInfo: PageInfo = await client.fetch(pageInfoQuery);
  const socials: Social[] = await client.fetch(socialsQuery);
  const projects: Project[] = await client.fetch(projectQuery);

  return (
    <div className="bg-[rgb(41,41,41)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden gap-y-10">
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
    </div>
  );
}
