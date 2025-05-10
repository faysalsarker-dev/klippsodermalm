import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
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
            path:'/needle-piercing'

    },
    {
      name: "Microneedling",
      description: "Boost skin health and glow with advanced microneedling sessions tailored for rejuvenation.",
      icon: "/microneedls.png",
            path:'/needle-piercing'

    },
  ];

  return (
    <section className="py-16 px-4 bg-background-secondary text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Specialized Piercing & Skin Care
        </motion.h2>
        <motion.p
          className="text-lg mb-12 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Discover expert services designed for precision, safety, and personal expression.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
        <Link href={service?.path} key={index}>
              <motion.div
                className="bg-background border border-neutral-700 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: "easeInOut" }}
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={service.icon}
                    alt={service.name}
                    width={64}
                    height={64}
                    className="object-contain "
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
        </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
