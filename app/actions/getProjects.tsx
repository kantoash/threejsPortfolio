import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import { Project } from "../../typing";

const projectQuery = groq`
  *[_type == "project"]{
      ...,
      technologies[]->
  }
`;

export default async function getProjects() {
    const result = await client.fetch(projectQuery);
    const projects: Project[] = result;
    return projects;
}  