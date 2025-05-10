// app/services/page.tsx
import Link from "next/link";
import  Image  from 'next/image';
// app/data/services.ts
export const services = [
  {
    id: "classic-haircut",
    name: "Classic Haircut",
    description: "Scissor and clipper cut with styling",
    price: 25,
  },
  {
    id: "beard-trim",
    name: "Beard Trim",
    description: "Shaping and detailing with razor finish",
    price: 15,
  },
  {
    id: "hair-wash",
    name: "Hair Wash",
    description: "Refreshing wash with scalp massage",
    price: 10,
  },
  {
    id: "kids-cut",
    name: "Kids Haircut",
    description: "Fun and friendly trim for kids",
    price: 20,
  },
  {
    id: "full-package",
    name: "Gentlemen’s Full Package",
    description: "Haircut + Beard + Wash Combo",
    price: 60,
  },
];

export default function page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid gap-6">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/booking?service=${service.id}`}
            className="card  shadow-md hover:shadow-xl transition cursor-pointer"
          >
            <div className="card-body p-0 flex flex-row justify-between items-center bg-background-secondary rounded-lg">
              <div className="flex items-center gap-4">
                        <div className="w-24 h-24 rounded-md  overflow-hidden relative p-0">
                <Image
                  src='/hero.jpg'
                  alt={service.name}
                  fill
                  className="object-contain "
                />
              </div>


          <div>
                  <h2 className="card-title text-xl text-primary">
                    {service.name}
                  </h2>
                  <p className="text-sm text-gray-500">{service.description}</p>
          </div>
              </div>






              <div className="text-lg font-semibold text-accent">
                ${service.price}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
