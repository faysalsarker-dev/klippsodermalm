"use client";

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/app/lib/axios";
import OfferCard from "./OfferCard";


const SpecialOffer = () => {

  const { data, isLoading, error } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/banners");
      return data;
    },
  });
  if (isLoading) return <div>Loading offers...</div>;
  if (error) return <div>Failed to load offers.</div>;

  return (
    <>
      {data?.length > 0 && data?.map((offer) => (
  <OfferCard key={offer._id} offerData={offer}/>
      ))}
    
    </>
  );
};

export default SpecialOffer;
