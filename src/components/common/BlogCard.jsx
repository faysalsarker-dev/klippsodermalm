import Image from "next/image";
import Link from "next/link";



export default function BlogCard() {
    const blog ={
        title: "Sample Blog Title",
        date: "January 1, 2023",
        summary: "This is a sample summary of the blog post.",
        image: "/hero.jpg",
        slug: "sample-blog-title",
    }
    
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
      <figure className="relative w-full h-48">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover rounded-t-xl"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{blog.title}</h2>
        <p className="text-sm text-gray-500">{blog.date}</p>
        <p className="line-clamp-3">{blog.summary}</p>
        <div className="card-actions justify-end">
          <Link href={`/blog/${blog.slug}`} className="btn btn-sm btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
