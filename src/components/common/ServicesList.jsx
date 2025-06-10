"use client";

import axiosInstance from "@/app/lib/axios";
import ServicesCard from "./ServicesCard";
import { useQuery } from "@tanstack/react-query";
import ServicesCardSkeleton from "./ServicesCardSkeleton";

const ServicesList = ({ category }) => {
  const {
    data = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["services", category],
    queryFn: async () => {
      const res = await axiosInstance.get(`/price/klippsodermalm/${category}`);
      return res.data;
    },
  });

  return (
    <div className="space-y-6">
      {/* Loading State */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <ServicesCardSkeleton key={index} />
          ))}
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="text-red-500 text-center">
          Error loading services. Please try again later.
        </div>
      )}




      {/* Loaded State */}
      {!isLoading && !isError && (
        <>
         

{data?.length === 0 ? (
  <p className="text-center text-gray-200 mt-6">
    Inga tjänster tillgängliga just nu. Vänligen återkom senare!
  </p>
) : (
 <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
            {data?.map((service) => (
              <ServicesCard key={service._id} service={service} />
            ))}
          </div>
)}


      
        </>
      )}
    </div>
  );
};

export default ServicesList;
