"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import classNames from "react-day-picker/dist/style.css";
import { useQuery } from "@tanstack/react-query";
import Slots from "@/components/Book/Slots";
import  axiosInstance  from '@/app/lib/axios';






const BookingPage = () => {
  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));
const today = new Date();
  today.setHours(0, 0, 0, 0);
 

  const { data: slotdetails, isLoading, isError, refetch } = useQuery({
    queryKey: ["slotsdetails", date],
    queryFn: async ({ signal }) => {
      const { data } = await axiosInstance.get(
        `/online-booking/check-slots/${date}`,
        { signal }
      );
      return data;
    },
    enabled: !!date,
  });



  const handleDateSelect = (selectedDate) => {
    if (!selectedDate) return;

    const formatted = format(selectedDate, "yyyy-MM-dd");
    if (formatted === date) return;

    setDate(formatted);
    refetch();
  };



  return (
    <div className="min-h-screen py-10 px-4 md:px-10 flex flex-col gap-8 md:flex-row justify-center items-start bg-background-secondary">
      {/* Date Picker */}
      <div className="w-full md:w-1/2 bg-background rounded-2xl shadow-md p-6 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 text-center">Select Booking Date</h2>
        <DayPicker
          mode="single"
          animate={true}
                classNames={{
            ...classNames,
            selected: "bg-primary rounded-lg font-bold text-white",
            today: "text-blue-600 ",

          }}
          className="scale-[1.1]"
          selected={date}
          onSelect={handleDateSelect}
          disabled={(d) => d < today}
        />
      </div>

      {/* Booking Form */}
    
      <Slots date={date} slotdetails={slotdetails} isLoading={isLoading} isError={isError} refetch={refetch} />
    </div>
  );
};

export default BookingPage;
