import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import { Social } from "../../typing";


const socialsQuery = groq`
  *[_type == "social"]
`;

export default async function getSocials() {
    const result = await client.fetch(socialsQuery);
    const socials: Social[] = result;
    return socials;
}  