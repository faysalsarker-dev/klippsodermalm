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
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
              <motion.h2
               initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
              
              className="text-xl md:text-5xl font-bold leading-tight ">
            Välkommen till
          </motion.h2>
          <motion.h1
          className="mb-1 text-5xl md:text-7xl font-bold  bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent"

            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
       Klipp Södermalm 
         
         


          </motion.h1>
          <motion.h2
            className="mb-2 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
  
         
          Din skönhetssalong i hjärtat av Södermalm


          </motion.h2>
          
       

          <motion.p
            className="mb-8 text-xl sm:text-2xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
   Professionell piercing, öronhåltagning, microneedling, lash lift & hår - proffsigt och tryggt i en modern och välkomnande miljö
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
           <Link href="/booking">
              <button className="btn btn-primary w-full px-8 py-3 text-lg font-semibold rounded-full">
                Boka Tid
              </button>
           </Link >
            <ScrollLink
              to="services"
        smooth={true}
        duration={800}
        
            
            className="btn btn-outline text-white border-white hover:bg-white hover:text-black px-8 py-3 text-lg font-semibold rounded-full">
              Se Behandlingar
            </ScrollLink>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
