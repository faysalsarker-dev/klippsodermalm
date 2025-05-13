import BlogCard from "./BlogCard";

const AllBlogs = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1,2,3].map((blog, index) => (
                       <BlogCard className={'bg-background'}/>
                        ))}
                      </div>
                    
   <div className="flex justify-center mt-6">
                <div className="join">
                  <button className="join-item btn">1</button>
                  <button className="join-item btn btn-active">2</button>
                  <button className="join-item btn">3</button>
                  <button className="join-item btn">4</button>
                </div>
   </div>
     </div>
    );
};

export default AllBlogs;