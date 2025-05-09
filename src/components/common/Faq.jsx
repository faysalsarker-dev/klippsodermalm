'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: 'Gör det ont att ta hål i öronen eller göra en piercing?',
    answer:
      'Ett skala (1–10 så är det ca.2) med nål är smärtan ännu mindre, men den varierar beroende på område och individ, men vi använder skonsamma metoder för att minimera obehag.',
  },
  {
    question: 'Hur lång tid tar det för en piercing att läka?',
    answer:
      'Läkningstiden beror på placeringen. Öronhål tar vanligtvis 4–6 veckor medan broskpiercingar kan ta flera månader.',
  },
  {
    question: 'Vilken typ av smycken används vid första piercingen?',
    answer:
      'Vi använder endast sterila och allergivänliga smycken i titan och silver och guldpläterade pluppar för öronhåltagning.',
  },
  {
    question: 'Hur sköter jag min nya piercing?',
    answer:
      'Vi ger dig detaljerade eftervårdsinstruktioner och rekommenderar att du rengör piercingen med en mild saltlösning dagligen.',
  },
];

const Faq = () => {
  return (
    <motion.section
      className="py-16 min-h-screen bg-background-secondary"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Vanliga frågor om piercing och öronhåltagning
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/faq.png"
              alt="FAQ"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Accordion */}
          <div className="w-full md:w-1/2 space-y-4">
            {faqData.map((faq, i) => (
              <div key={i} className="collapse collapse-arrow bg-background rounded-xl">
                <input type="checkbox"
                
                
                defaultChecked={i === 0} 
                className="peer" />

                <div className="collapse-title text-lg font-semibold text-primary">
                  {faq.question}
                </div>
                <div className="collapse-content text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Faq;
