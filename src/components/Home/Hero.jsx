import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background image */}
      <Image
        src='/hero.jpg'
        alt="Hero Background"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay  z-10" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Reveal Your Radiant Skin Naturally
          </motion.h1>

          <motion.p
            className="mb-8 text-lg sm:text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Premium microneedling, PRP, and aesthetic skincare services —
            professionally tailored for natural beauty. Proudly serving clients
            across Sweden.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
           <Link href="/booking">
              <button className="btn btn-primary px-8 py-3 text-lg font-semibold rounded-full">
                Book Now
              </button>
           </Link >
            <ScrollLink
              to="services"
        smooth={true}
        duration={800}
        
            
            className="btn btn-outline text-white border-white hover:bg-white hover:text-black px-8 py-3 text-lg font-semibold rounded-full">
              Explore Treatments
            </ScrollLink>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
