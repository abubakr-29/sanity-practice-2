import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getBlogs } from "@/sanity/sanity-utils";

export default async function Home() {
  const data = await getBlogs();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {data.map((blog) => (
        <Card key={blog._id} className="p-0">
          <Image
            src={blog.titleImage}
            alt={blog.title}
            width={500}
            height={500}
            className="rounded-t-lg h-[200px] object-cover"
          />

          <CardContent className="mt-5">
            <h3 className="text-lg line-clamp-2 font-bold">{blog.title}</h3>
            <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
              {blog.smallDescription}
            </p>
            <Button asChild className="w-full my-7">
              <Link href={`/blog/${blog.slug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
