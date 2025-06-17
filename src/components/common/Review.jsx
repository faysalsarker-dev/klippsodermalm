'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import axiosInstance from "@/app/lib/axios";
import { useQuery } from "@tanstack/react-query";



const Review = () => {


  const { data:testimonials } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `/review`
        
      );
      return data;
    },
   
  });


  return (
      



      <div className="max-w-6xl mx-auto my-20">


<h2 className="text-3xl font-bold text-center text-primary  mb-8">
     Recensioner från våra kunder
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 20 }, // Show 2 reviews on medium screens
          1024: { slidesPerView: 3, spaceBetween: 30 }, // Show 3 reviews on large screens
        }}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="w-full"
      >
        {testimonials?.map((testimonial) => (
          <SwiperSlide key={testimonial._id}>
            <div className="card bg-background-secondary   backdrop-blur-xl border border-white/20 rounded-xl p-6 text-white shadow-lg  transition-all hover:scale-105 duration-300">
              <div className="flex flex-col items-center">
                <FaQuoteLeft className="text-yellow-400 text-4xl mb-3" />
                <p className="text-gray-300 text-lg italic text-center">
                  "{testimonial?.review}"
                </p>
              </div>

              <div className="flex flex-col items-center mt-6">
                <img
                  src={testimonial?.image}
                  alt={testimonial?.name}
                  loading="lazy"
                  className="w-16 h-16 rounded-full border-2 border-primary"
                />
                <h3 className="font-semibold text-lg mt-2">{testimonial?.name}</h3>
                <div className=" text-yellow-400">
                <Rating
        initialRating={testimonial?.rating} // Initial rating  
        emptySymbol={<FaRegStar className="text-yellow-400" />} // Empty star
        fullSymbol={<FaStar className="text-yellow-400" />} // Full star
        fractions={2} 
        readonly={true} 
      />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      </div>
     
     
  );
};

export default Review;
