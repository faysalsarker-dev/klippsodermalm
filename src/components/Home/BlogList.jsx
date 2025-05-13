import Link from "next/link";
import BlogCard from "../common/BlogCard";

const BlogList = () => {
    return (
        <div className="my-12  max-w-6xl mx-auto  flex-col gap-4">
          <h2 className="text-primary text-center font-bold text-5xl my-4">Our blogs</h2>
            <div className="grid grid-cols-1  md:grid-cols-3 gap-4 ">
  {[1,2,3].map(blog => (
    <BlogCard key={blog.id} blog={blog} className={'bg-background-secondary'} />
  ))}
</div>

<div className="flex justify-center mt-6">
  <Link href="/blogs">
    <button className="btn btn-primary">View All</button>
    
  </Link>
</div>        </div>
    );
};

export default BlogList;