// app/blog/[slug]/page.jsx or .tsx
import { notFound } from "next/navigation";
import { getBlogDetails } from "@/utility/getBlogDetails";
import axiosInstance from "@/app/lib/axios";
import Image from "next/image";



import "@/app/globals.css"; 

export async function generateStaticParams() {
  try {
    const res = await axiosInstance.get("/blogs");
    return res.data.map((blog) => ({ slug: blog.slug }));
  } catch (error) {
    return [];
  }
}

export async function generateMetadata({ params }) {
  try {
    const res = await axiosInstance.get(`/blogs/${params.slug}`);
    const blog = res.data;

    return {
      title: blog.seo?.title || blog.title,
      description: blog.seo?.description || "",
      keywords: Array.isArray(blog.seo?.keywords)
        ? blog.seo.keywords.flatMap((kw) => JSON.parse(kw))
        : [],
      openGraph: {
        type: blog.seo?.ogType || "article",
      },
      robots: blog.seo?.robots || "index, follow",
    };
  } catch (error) {
    return { title: "Blog Not Found" };
  }
}

export default async function BlogPage({ params }) {
  const post = await getBlogDetails(params.slug);

  if (!post) return notFound();

const formattedDate = new Date(post?.createdAt).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric"
});


  return (
  <div className="bg-background-secondary">
        <section className="max-w-4xl mx-auto px-4 py-10  text-white">
          {/* Blog Header */}
           <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold  mb-6">{post?.title}</h1>

      {post?.image && (
        <Image
          src={process.env.NEXT_PUBLIC_IMAGE_URL + post?.image}
     
          alt={post?.title}
          width={800}
          height={450}
          className="w-full h-auto rounded-xl shadow-md mb-10"
        />
      )}

      <article
        className="prose prose-lg prose-gray max-w-none blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
    
        
        </section>
  </div>
  );
}
