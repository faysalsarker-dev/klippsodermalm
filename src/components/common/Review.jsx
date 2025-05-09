'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
const testimonials = [
  {
    id: 1,
    name: "Liam Andersson",
    review: "Absolutely loved the piercing experience! Super clean and professional. Will definitely come back!",
    rating: 5,
  },
  {
    id: 2,
    name: "Nora Lund",
    review: "The barber gave me the freshest fade ever. The vibe, the music, the whole place is 🔥",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Elias Berg",
    review: "Great customer service, top-notch hygiene, and the staff are super chill. 10/10 recommend.",
    rating: 4,
  },
  {
    id: 4,
    name: "Saga Blom",
    review: "Got my nose pierced here — painless and perfect placement. Love the result!",
    rating: 5,
  },
];


const Review = () => {
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
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
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
