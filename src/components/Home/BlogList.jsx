import BlogCard from "../common/BlogCard";

const BlogList = () => {
    return (
        <div>
            <div className="grid grid-cols-1  md:grid-cols-3 gap-4 max-w-6xl mx-auto">
  {[1,2,3].map(blog => (
    <BlogCard key={blog.id} blog={blog} />
  ))}
</div>

        </div>
    );
};

export default BlogList;