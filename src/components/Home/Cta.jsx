'use client';
import Image from 'next/image';
import Link from 'next/link';
const Cta = () => {
  return (
    <section className="relative py-20 px-6 lg:px-16 overflow-hidden  my-6">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Image
          src='/ctaa.jpg'
          alt="CTA background graphic"
          layout="fill"
          objectFit="cover"
          
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center ">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Ready for a New Look?</h2>
        <p className="text-lg sm:text-xl mb-8">
          Discover professional piercing and microneedling services that bring out your best self. Book an appointment today and experience the transformation.
        </p>
        <Link href="/booking">
      <button className="btn btn-primary">
             
                Book Now
           
      </button >
        </Link>
      </div>
    </section>
  );
};

export default Cta;
