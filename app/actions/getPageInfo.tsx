import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import { PageInfo } from "../../typing";

const pageInfoQuery = groq`
    *[_type == "pageInfo"][0]
`;

export default async function getPageInfo() {
  const result = await client.fetch(pageInfoQuery);
  const pageInfo: PageInfo = result;
  return pageInfo;
}
