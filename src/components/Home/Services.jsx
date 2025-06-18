import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      name: "Piercing med nål",
      description: "Vi utför piercing med nål för maximal precision, skonsammare håltagning och snabbare läkning. Perfekt för navelpiercing, näspiercing och öronpiercing",
      icon: "/needlepiercing.jpg",
      path:'/needle-piercing'
    },
    {
      name: "Öronhåltagning för vuxna & barn i alla åldrar ",
      description: "Snabb, trygg och skonsam håltagning med pistol. Vi är erfarna på håltagning för barn i alla åldrar.",
      icon: "/s2.jpeg",
            path:'/gun-piercing'

    },
    {
      name: "Micro Needling",
      description: "Vår microneedling-behandling hjälper huden att se friskare och slätare ut. Bra för dig med ärr, stora porer eller trött hud.",
      icon: "/microneediling.png",
            path:'/microneedling'
    },
    {
      name: "Lash Lift & Brow Lift – Naturlig skönhet med lyft",
      description: "Få vackert böjda fransar och perfekt formade bryn – helt utan smink. Vi lyfter fram din naturliga skönhet med skonsamma och professionella behandlingar",
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

  return (
    <section 
    id="services"
    className="py-16 px-4 bg-background-secondary text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto text-center">
    
     

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {services.map((service, index) => (
    <Link href={service?.path} key={index}>
      <div className="block">
        <motion.div
          className="bg-background border border-neutral-700 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 h-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex justify-center items-center mb-4 h-48 md:h-48">
            <Image
              src={service.icon}
              alt={service.name}
              width={400}
              height={300}
              className="object-cover rounded-lg max-h-full"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-primary text-center">
            {service.name}
          </h3>
          <p className="text-sm text-muted-foreground text-center">
            {service.description}
          </p>
        </motion.div>
      </div>
    </Link>
  ))}
</div>



      </div>
    </section>
  );
}



