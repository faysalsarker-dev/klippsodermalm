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

        <section className="bg-indigo-600 text-white py-10 mt-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold">Visit Our Barber Shop</h2>
            <p className="mt-4 text-lg">Experience the best haircuts, beard trims, and grooming services in town. Book your appointment today!</p>
            <a href="/contact" className="mt-6 inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg text-lg">Book an Appointment</a>
          </div>
        </section>
      </div>
    </>
  );
}
