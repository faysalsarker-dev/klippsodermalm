
"use client";
import AllBlogs from '@/components/common/AllBlogs';


export default function page() {
  return (
    <>


      <div className="min-h-screen bg-background-secondary py-10">
        <section className="max-w-6xl mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold ">Our Latest Blogs</h1>
            <p className="mt-2 text-lg ">Tips, Trends, and Stories from Your Favorite Barber Shop</p>
          </header>

      <AllBlogs/>
        </section>

   
      </div>
    </>
  );
}
