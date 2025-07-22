import { client } from "@/sanity/client";
import { PortableText, SanityDocument } from "next-sanity";
import Image from "next/image";

const query = `*[_type == 'blog' && slug.current == $slug] {
                    _id,
                    title,
                    "slug": slug.current,
                    smallDescription,
                    publishedAt,
                    "titleImage": titleImage.asset->url,
                    content
                  }[0]`;

const options = { next: { revalidate: 30 } };

export default async function BlogArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await fetch("https://morning-blog.sanity.studio/", {
    next: { revalidate: 30 },
  });

  const data = await client.fetch<SanityDocument>(query, await params, options);

  return (
    <div className="my-8">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Abu Bakr - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={data.titleImage}
        alt={data.title}
        width={800}
        height={800}
        priority
        className="rounded-lg mt-8 border"
      />

      <div className="mt-16 prose prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
