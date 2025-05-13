import Image from "next/image";
import Link from "next/link";

const ServicesCard = ({service}) => {
    return (
       <Link
                
                href={`/booking?service=${service?.id}`}
                className=" flex items-center gap-4 p-4 relative rounded-lg shadow hover:shadow-lg transition backdrop-blur-sm"
              >
                    <Image
                        src='/servicesbg.png'
                        alt="Hero Background"
                        fill
                        priority
                        className="object-cover z-0 rounded-lg"
                      />
                        <div className="rounded-lg absolute z-10 inset-0 bg-gradient-to-r  from-[#282828] via-[#28282880] to-transparent " />

                <div className="relative z-50 w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src="/hero.jpg"
                    alt={service?.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Service Info */}
                <div className="flex-1 z-50">
                  <h2 className="text-lg font-semibold text-primary">
                    {service?.name}
                  </h2>
                  <p className="text-sm ">{service?.description}</p>
                </div>

                {/* Price */}
                <div className="text-base font-bold text-primary z-50">
                  ${service?.price}
                </div>
              </Link>
    );
};

export default ServicesCard;