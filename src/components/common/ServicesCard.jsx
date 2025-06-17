import Image from "next/image";
import Link from "next/link";

const ServicesCard = ({service}) => {
    return (
       <Link
                
                href={`/booking?id=${service?._id}`}
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

 { 
service?.image &&    <div className="relative z-50 w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
            

  <Image
                    src={process.env.NEXT_PUBLIC_IMAGE_URL + service?.image}
                    alt={service?.title}
                    fill
                    className="object-cover"
                  />

                


                </div>

                }

              

                {/* Service Info */}
                <div className="flex-1 z-50">
                  <h2 className="text-lg font-semibold text-primary">
                    {service?.title}
                  </h2>
                  <p className="text-sm ">{service?.description}</p>
                </div>

                {/* Price */}
<div className="flex flex-col items-start text-primary z-50">
{service?.regularPrice &&  <span className="text-sm text-gray-500 line-through">{service?.regularPrice}</span>
}  <span className="text-base font-bold text-primary">{service?.discountedPrice}</span>
</div>

              </Link>
    );
};

export default ServicesCard;