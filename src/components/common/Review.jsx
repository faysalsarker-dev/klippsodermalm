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
        <h2 className="text-4xl font-bold text-center text-white mb-12 uppercase tracking-wide">
          Vad våra kunder säger
        </h2>

        <Swiper
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 1, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 30 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="w-full"
        >
          {testimonials?.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-white shadow-lg mx-3 h-full flex flex-col justify-between transition-all hover:scale-105 duration-300">
                <FaQuoteLeft className="text-3xl text-primary mb-4" />
                <p className="italic mb-6">"{testimonial.review}"</p>
                <div className="mt-auto">
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <div className="mt-1">
               
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
