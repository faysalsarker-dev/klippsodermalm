
"use client";

import axiosInstance from "@/app/lib/axios";
import ServicesCard from "./ServicesCard";
import { useQuery } from "@tanstack/react-query";

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


const ServicesList = ({category}) => {

  const { data=[], isLoading, refetch } = useQuery({
    queryKey: ["services",category],
    queryFn: async () => {
      const res = await axiosInstance.get(`/price/klippsodermalm/${category}`);
      return res.data;
    },
  });
    

console.log(data,category,'dataa');


    return (
        <div>
                  <div className="space-y-6">
            {data.map((service) => (
            <ServicesCard key={service._id} service={service}/>
            ))}
          </div>
        </div>
    );
};

export default ServicesList;