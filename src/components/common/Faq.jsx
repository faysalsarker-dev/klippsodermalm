'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/app/lib/axios';

// const faqData = [
//   {
//     question: 'Gör ni piercing med nål?',
//     answer:
//       'Ja, vi gör all piercing med nål. Det är säkrare och gör mindre skada på huden.',
//   },
//   {
//     question: 'Var kan jag pierca örat i Stockholm?',
//     answer:
//       'Hos oss på Klipp Södermalm kan du pierca örat i Stockholm på ett tryggt och hygieniskt sätt.',
//   },
//   {
//     question: 'Erbjuder ni öronhåltagning för barn?',
//     answer:
//       'Ja! Vi gör öronhåltagning i Stockholm för både barn och vuxna, med lugn och försiktighet.',
//   },
//   {
//     question: 'Vad är lash lift och hur länge håller det?',
//     answer:
//       'Lash lift gör dina egna fransar naturligt böjda och fylliga. Behandlingen håller i ungefär 6 till 8 veckor. Vi erbjuder lash lift i Stockholm med skonsam och trygg metod.',
//   },
//   {
//     question: 'Gör ni navelpiercing?',
//     answer:
//       'Ja, vi erbjuder navelpiercing i Stockholm med steril nål och smycken av hög kvalitet.',
//   },
//   {
//     question: 'Kan jag klippa mig hos er?',
//     answer:
//       'Självklart! Vi gör hårklippning i Stockholm för både damer, herrar och barn.',
//   },
// ];

const Faq = () => {

 const { data:faqData } = useQuery({
    queryKey: ["faqs"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `/faqs`
        
      );
      return data;
    },
   
  });


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
            {faqData?.map((faq, i) => (
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
