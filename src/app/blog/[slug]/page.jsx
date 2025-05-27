// app/blog/[slug]/page.jsx or .tsx
import { notFound } from "next/navigation";
import { getBlogDetails } from "@/utility/getBlogDetails";
import axiosInstance from "@/app/lib/axios";
import Image from "next/image";

import "@/app/globals.css"; // Ensure Tailwind CSS is applied

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

  return (
  <div className="bg-background-secondary">
        <section className="max-w-4xl mx-auto px-4 py-10  text-white">
          {/* Blog Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold  mb-2">{post.title}</h1>
            <p className=" text-sm">{new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
    
          {/* Blog Image */}
          {post.image && (
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-6">
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_UR}${post.image}`} 
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
    
       <article
      className="prose prose-lg max-w-none text-white blog-content"
      dangerouslySetInnerHTML={{ __html: post.content }}
    />
    
    
        
        </section>
  </div>
  );
}
