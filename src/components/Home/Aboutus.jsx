'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <section className="py-16 bg-background-primary min-h-screen flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold text-primary mb-6">
            Klipp Södermalm 
          </h2>

          <p className="text-lg text-muted mb-4">
            Välkommen till <strong className="text-primary">Klipp Södermalm</strong> – din professionella och prisvärda salong mitt i hjärtat av Södermalm. 
            Vi har över 25 års erfarenhet och erbjuder behandlingar som <strong>piercing</strong>, <strong>öronhåltagning</strong> och <strong>microneedling</strong>.
          </p>

          <p className="text-lg text-muted mb-6">
            Boka enkelt online eller kom på <strong>drop-in</strong> – vi ser fram emot att ta hand om dig med noggrant utförda behandlingar.
          </p>

          {/* "Read More" Button */}
          <Link href="/about" className="btn btn-primary">
            Läs Mer
          </Link>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2 relative"
        >
<div className="relative w-full max-w-5xl h-[400px] md:h-[500px] mx-auto rounded-xl overflow-hidden shadow-lg group">
  {/* Background Image */}
  <Image
    width={600}
    height={500}
    src="/about.jpg"
    alt="Salong på Södermalm"
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />

  {/* Overlay */}
</div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
