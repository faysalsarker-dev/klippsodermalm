"use client";
import { motion } from "framer-motion";
import Services from "../Home/Services";
import Link from "next/link";
import Image from "next/image";

  const services = [
    {
      name: "Needle Piercing",
      description: "Precise and hygienic needle piercings performed with expert technique for a clean, professional result.",
      icon: "/needls.png",
      path:'/needle-piercing'
    },
    {
      name: "Gun Piercing",
      description: "Quick and stylish piercings using sterilized piercing guns for a safe and trendy experience.",
      icon: "/gun.png",
            path:'/gun-piercing'

    },
    {
      name: "Microneedling",
      description: "Boost skin health and glow with advanced microneedling sessions tailored for rejuvenation.",
      icon: "/microneedls.png",
            path:'/microneedling'
    },
  ];



const ServiceRequiredNotice = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full "
    >
           <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-300 p-4 rounded-lg mb-6">
        <span className="text-yellow-600 text-xl">⚠️</span>
        <div>
          <h2 className="text-yellow-800 text-lg font-semibold mb-1">
            Select a Service to Continue
          </h2>
          <p className="text-yellow-700 text-sm">
            Please select one of the services from the table below to proceed with booking.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1  gap-6">
         {services.map((service, index) => (
      <Link href={service?.path} key={index}>
  <motion.div
    className="bg-background border border-neutral-700 rounded-lg px-5 py-4 shadow-md hover:shadow-lg transition duration-300 hover:border-primary"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.6, ease: "easeInOut" }}
  >
    {/* Image and name in a line */}
    <div className="flex items-center gap-4">
      <Image
        src={service.icon}
        alt={service.name}
        width={40}
        height={40}
        className="object-contain"
      />
      <h3 className="text-lg md:text-xl font-semibold text-white">{service.name}</h3>
    </div>
  </motion.div>
</Link>

          ))}
      </div>
    </motion.div>
  );
};

export default ServiceRequiredNotice;
