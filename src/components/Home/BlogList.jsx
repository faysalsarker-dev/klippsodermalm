
"use client";
import Link from "next/link";
import BlogCard from "../common/BlogCard";
import axiosInstance from "@/app/lib/axios";
import { useQuery } from "@tanstack/react-query";

const BlogList = () => {


  const { data } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `/blogs?limit=3&page=1&web=klippsodermalm`
        
      );
      return data;
    },
   
  });



    return (
        <div className="my-12  max-w-6xl mx-auto  flex-col gap-4">
          <h2 className="text-primary text-center font-bold text-5xl my-4">Our blogs</h2>
            <div className="grid grid-cols-1  md:grid-cols-3 gap-4 ">
  {data?.blogs?.map(blog => (
    <BlogCard key={blog._id} blog={blog} className={'bg-background-secondary'} />
  ))}
</div>

<div className="flex justify-center mt-6">
  <Link href="/blog">
    <button className="w-full rounded-full  bg-primary px-4 py-3">View All</button>
    
  </Link>
</div>        </div>
    );
};

export default BlogList;