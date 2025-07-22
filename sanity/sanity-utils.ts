import { SanityDocument } from "next-sanity";
import { client } from "./client";

export async function getBlogs(): Promise<SanityDocument[]> {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
                    _id,
                    title,
                    "slug": slug.current,
                    smallDescription,
                    "titleImage": titleImage.asset->url,
                  }`;

  const options = { next: { revalidate: 30 } };

  return client.fetch<SanityDocument[]>(query, {}, options);
}
