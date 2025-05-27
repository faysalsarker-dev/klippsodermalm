"use client";

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/app/lib/axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SpecialOffer = () => {
  const pathname = usePathname();

  const { data, isLoading, error } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/banners");
      return data;
    },
  });
console.log("SpecialOffer data:", data);
  if (isLoading) return <div>Loading offers...</div>;
  if (error) return <div>Failed to load offers.</div>;

  // Filter active banners *and* those which should be displayed on current path
  const activeBannersToShow = data.filter(
    (banner) =>
      banner.isActive &&
      banner.displayOn &&
      banner.displayOn.includes(pathname)
  );

  if (activeBannersToShow.length === 0)
    return null; // No banner to show on this page

  return (
    <>
      {activeBannersToShow.map((banner) => (
        <section
          key={banner._id}
          className="relative px-6 my-20 sm:px-10 md:px-16 py-16 text-white text-center"
        >
          <Image
            src={banner.imageUrl || "/offer.jpg"}
            alt={banner.title}
            fill
            priority
            className="object-cover z-0"
          />
          <div className="absolute inset-0 hero-overlay z-10 bg-black/60" />
          <div className="relative z-20 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
            <p className="text-2xl mb-8">{banner.content}</p>
            <Link href={banner.redirectUrl || "/"}>
              <a className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition">
                Shop Now
              </a>
            </Link>
          </div>
        </section>
      ))}
    </>
  );
};

export default SpecialOffer;
