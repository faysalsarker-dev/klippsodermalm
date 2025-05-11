import Link from "next/link";
import Image from "next/image";



export const metadata = {
  title: "Needle Piercing Services | Safe & Stylish",
  description: "Explore safe and stylish needle piercing services: ear, nose, eyebrow, and belly piercings from professionals.",
};



const services = [
  {
    id: "ear-piercing",
    name: "Ear Piercing",
    description: "Precision ear lobe and cartilage piercing",
    price: 30,
  },
  {
    id: "nose-piercing",
    name: "Nose Piercing",
    description: "Safe and sterile nostril piercing",
    price: 25,
  },
  {
    id: "belly-piercing",
    name: "Belly Button Piercing",
    description: "Trendy navel piercing with aftercare",
    price: 40,
  },
  {
    id: "eyebrow-piercing",
    name: "Eyebrow Piercing",
    description: "Stylish brow piercing with precision",
    price: 35,
  },
];

export default function ServicesPage() {
  return (
    <>
    

     
      <div className=" min-h-screen w-full bg-background-secondary">
   

        <main className="max-w-2xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center text-white mb-10 drop-shadow-lg">
            Gun Piercing Services
          </h1>

          <div className="space-y-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/booking?service=${service.id}`}
                className=" flex items-center gap-4 p-4 relative rounded-lg shadow hover:shadow-lg transition backdrop-blur-sm"
              >
                    <Image
                        src='/servicesbg.png'
                        alt="Hero Background"
                        fill
                        priority={true}
                        className="object-cover z-0 rounded-lg"
                      />
                        <div className="rounded-lg absolute z-10 inset-0 bg-gradient-to-r  from-[#282828] via-[#28282880] to-transparent " />

                <div className="relative z-50 w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src="/hero.jpg"
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Service Info */}
                <div className="flex-1 z-50">
                  <h2 className="text-lg font-semibold text-primary">
                    {service.name}
                  </h2>
                  <p className="text-sm ">{service.description}</p>
                </div>

                {/* Price */}
                <div className="text-base font-bold text-primary z-50">
                  ${service.price}
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
