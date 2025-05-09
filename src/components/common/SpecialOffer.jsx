import Image from "next/image";

const SpecialOffer = () => {
    return (
      <section className="relative px-6 my-20 sm:px-10 md:px-16 py-16  text-white text-center">
           <Image
                src='/offer.jpg'
                alt="Hero Background"
                fill
                priority
                className="object-cover z-0"
              />
              <div className="absolute inset-0 hero-overlay  z-10" />
 <div className="relative z-20">
          <h2 className="text-4xl font-bold mb-4">Special Offer!</h2>
          <p className="text-2xl mb-8">Get 20% off on all items! Limited time offer!</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition">
            Shop Now
          </button>
 </div>
      </section>
    );
  };
  
  export default SpecialOffer;
  