'use client';
import React from "react";
import Masonry from "react-masonry-css";
import Image from "next/image"; 

const galleryImages = [
  { id: 1, url: "https://img.freepik.com/free-photo/charming-lady-has-nice-hairdo_8353-7608.jpg?t=st=1746079802~exp=1746083402~hmac=9cb8d5214a4f5ea7f2c6120a65cd315770180cc76f88b133dfa7518eb0702c89&w=740" },
  { id: 2, url: "https://impro.usercontent.one/appid/oneComWsb/domain/klippsodermalm.com/media/klippsodermalm.com/onewebmedia/nedladdning.jpeg?etag=%221cbd-668ed85b%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=224,225&extract=0,0,224,224" },
  { id: 3, url: "https://impro.usercontent.one/appid/oneComWsb/domain/klippsodermalm.com/media/klippsodermalm.com/onewebmedia/OIP.jpeg?etag=%224cc0-668ed866%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=320,320" },
  { id: 4, url: "https://img.freepik.com/free-photo/hair-style-street-fashion-beautiful-girl_1139-844.jpg?t=st=1746079845~exp=1746083445~hmac=16c3d7b22a75ec06f7f3bbc200e1962b8e0d55af44bec872aff323a5fb7a7f12&w=1380" },
  { id: 5, url: "https://impro.usercontent.one/appid/oneComWsb/domain/klippsodermalm.com/media/klippsodermalm.com/onewebmedia/cutom-piercing-flat-mike-hurt-industries.jpg?etag=%227c45d-668ed843%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=320,427&extract=0,53,320,320" },
  { id: 6, url: "https://impro.usercontent.one/appid/oneComWsb/domain/klippsodermalm.com/media/klippsodermalm.com/onewebmedia/images%20(5).jpeg?etag=%222b64-669008c0%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=201,251&extract=0,25,200,201" },
  { id: 7, url: "https://impro.usercontent.one/appid/oneComWsb/domain/klippsodermalm.com/media/klippsodermalm.com/onewebmedia/20240524_113633.jpg?etag=%22ebe5f-669008cf%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=320,569&extract=0,124,320,320" },
  { id: 8, url: "https://impro.usercontent.one/appid/oneComWsb/domain/klippsodermalm.com/media/klippsodermalm.com/onewebmedia/nedladdning.jpeg?etag=%221cbd-668ed85b%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=224,225&extract=0,0,224,224" },
  { id: 9, url: "https://impro.usercontent.one/appid/oneComWsb/domain/klippsodermalm.com/media/klippsodermalm.com/onewebmedia/OIP.jpeg?etag=%224cc0-668ed866%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=320,320" },
  { id: 10, url: "https://impro.usercontent.one/appid/oneComWsb/domain/klippsodermalm.com/media/klippsodermalm.com/onewebmedia/A-woman-undergoing-a-double-nose-piercing-procedure.jpg.webp?etag=%222f16-668ed79e%22&sourceContentType=image%2Fwebp&ignoreAspectRatio&resize=498,320&extract=88,0,320,320" },
  { id: 11, url: "https://impro.usercontent.one/appid/oneComWsb/domain/klippsodermalm.com/media/klippsodermalm.com/onewebmedia/cutom-piercing-flat-mike-hurt-industries.jpg?etag=%227c45d-668ed843%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=320,427&extract=0,53,320,320" },
  { id: 12, url: "https://impro.usercontent.one/appid/oneComWsb/domain/klippsodermalm.com/media/klippsodermalm.com/onewebmedia/images%20(5).jpeg?etag=%222b64-669008c0%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=201,251&extract=0,25,200,201" },
];

const breakpoints = {
  default: 6,
  1024: 5,
  640: 3,
};

const Gallery = () => {
  return (
    <section className="px-6 sm:px-10 md:px-16 py-16 mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>

      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="overflow-hidden rounded-xl mb-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={image.url}
              alt={`gallery-image-${image.id}`}
              width={500} 
              height={500} 
              className="w-full object-cover rounded-xl"
              loading="lazy"
            />
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
