'use client';
import React from "react";
import Masonry from "react-masonry-css";
import Image from "next/image"; 
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/app/lib/axios";


const breakpoints = {
  default: 6,
  1024: 5,
  640: 3,
};

const Gallery = () => {
  const { data :galleryImages=[]} = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `/gallery`
        
      );
      return data;
    },
   
  });

  return (
    <section className="px-6 sm:px-10 md:px-16 py-16 mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Piercing Perfection: Vårt fantastiska galleri</h2>

      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
       

{galleryImages.map((item) => (
  <div
    key={item._id}
    className="overflow-hidden rounded-xl mb-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
  >
    {item.type === "image" ? (
      <Image
        
           src={process.env.NEXT_PUBLIC_IMAGE_URL + item.url}
        alt={`gallery-image-${item._id}`}
        width={500}
        height={500}
        className="w-full object-cover rounded-xl"
        loading="lazy"
      />
    ) : item.type === "video" ? (
      <video
        src={item.url}
        controls
        className="w-full h-auto rounded-xl"
      >
        Your browser does not support the video tag.
      </video>
    ) : item.type === "link" ? (
      <iframe
        src={item.url}
        title={`iframe-${item._id}`}
        className="w-full h-[300px] rounded-xl border"
        allowFullScreen
      ></iframe>
    ) : null}
  </div>
))}

      </Masonry>

      {/* Optional Show More / Show Less Button */}
      {/* <div className="text-center mt-6">
        <button className="text-primary hover:text-primary-dark transition-all duration-300">
          Show More
        </button>
      </div> */}
    </section>
  );
};

export default Gallery;
