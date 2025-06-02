import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      name: "Needle Piercing",
      description: "Vi gör piercing med nål för bättre precision och snabbare läkning. Passar för navelpiercing, näspiercing, och öronpiercing i Stockholm.",
      icon: "/needls.png",
      path:'/needle-piercing'
    },
    {
      name: "Gun Piercing",
      description: "Vi erbjuder öronhåltagning i Stockholm med pistol – ett snabbt och enkelt val, särskilt för barn och örsnibbar.",
      icon: "/gun.png",
            path:'/gun-piercing'

    },
    {
      name: "Microneedling",
      description: "Vår microneedling-behandling hjälper huden att se friskare och slätare ut. Bra för dig med ärr, stora porer eller trött hud.",
      icon: "/microneedls.png",
            path:'/microneedling'
    },
  ];

  return (
    <section 
    id="services"
    className="py-16 px-4 bg-background-secondary text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto text-center">
    
     

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
