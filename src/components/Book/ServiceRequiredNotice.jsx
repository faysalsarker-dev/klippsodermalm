"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

    const services = [
    {
      name: "Nålpiercing",
      icon: "/needlepiercing.jpg",
      path:'/needle-piercing'
    },
    {
      name: "Piercing med pistol",
      icon: "/piercingwithgun.jpg",
            path:'/gun-piercing'

    },
    {
      name: "Mikronålning",
      icon: "/microneediling.png",
            path:'/microneedling'
    },
    {
      name: "Lash Lift & Brow Lift – Naturlig skönhet med lyft",
      icon: "/lashift.jpg",
            path:'/lash-lift'
    },
    {
      name: "Klassisk Maskinklippt Herrfrisyr",
      description: "Vi erbjuder enbart standardfrisyrer med maskin – korta sidor, snygg nacke och längre upptill för en ren och tidlös look",
      icon: "/haircut.jpg",
            path:'/herrfrisyr'
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
        width={80}
        height={50}
        className="object-contain rounded-lg"
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
