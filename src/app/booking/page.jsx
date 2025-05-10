// app/booking/page.tsx

"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import classNames from "react-day-picker/dist/style.css";

const mockPrices = [
  {
    category: "Massage",
    items: [
      { name: "Swedish Massage", price: 50 },
      { name: "Deep Tissue", price: 70 },
    ],
  },
  {
    category: "Facial",
    items: [
      { name: "Anti-aging Facial", price: 60 },
      { name: "Acne Treatment", price: 45 },
    ],
  },
];

const generateTimeSlots = (date) => {
  const day = date.getDay();
  if (day === 0) return [];

  const isSaturday = day === 6;
  const start = 10;
  const end = isSaturday ? 15 : 18;

  const slots = [];
  for (let hour = start; hour <= end; hour++) {
    slots.push(`${hour}:00`, `${hour}:30`);
  }
  return slots;
};

const BookingPage = () => {
  const [date, setDate] = useState(new Date());
  const [slot, setSlot] = useState("");
  const [service, setService] = useState("");
  const [price, setPrice] = useState("");
  const { register, handleSubmit, reset } = useForm();

  const bookedSlots = ["10:30", "12:00", "14:00"]; 
  const availableSlots = generateTimeSlots(date);

  const onSubmit = (data) => {
    if (!slot) return alert("Please select a time slot");
    const formatted = format(date, "yyyy-MM-dd");
    console.log({
      ...data,
      bookingDate: formatted,
      slot,
      service,
      price,
    });
    alert("Booking submitted!");
    reset();
    setSlot("");
  };

  const handleServiceChange = (e) => {
    const selected = e.target.value;
    setService(selected);
    const found = mockPrices
      .flatMap((cat) => cat.items)
      .find((i) => i.name === selected);
    setPrice(found?.price?.toString() || "");
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
          onSelect={(d) => d && setDate(d)}
          disabled={(d) => d < new Date() || d.getDay() === 0}
        />
      </div>

      {/* Booking Form */}
      <div className="w-full md:w-1/2 bg-background rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Pick a Slot ({format(date, "PPP")})
        </h2>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {availableSlots.map((time) => {
            const isBooked = bookedSlots.includes(time);
            const isSelected = slot === time;
            return (
              <button
                key={time}
                disabled={isBooked}
                onClick={() => !isBooked && setSlot(time)}
                className={`rounded-lg py-2 px-3 border text-sm transition-all
                  ${isBooked ? "bg-gray-300 cursor-not-allowed" : "hover:bg-primary hover:text-white border-gray-300"}
                  ${isSelected ? "bg-blue-600 text-white" : "bg-white text-black"}`}
              >
                {time}
              </button>
            );
          })}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            {...register("name", { required: true })}
            placeholder="Your Name"
            className="p-3 border rounded-lg focus:ring focus:ring-blue-300"
          />
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            type="email"
            className="p-3 border rounded-lg focus:ring focus:ring-blue-300"
          />
          <input
            {...register("phone", { required: true })}
            placeholder="Phone"
            type="tel"
            className="p-3 border rounded-lg focus:ring focus:ring-blue-300"
          />

          <select
            {...register("service", { required: true })}
            onChange={handleServiceChange}
            className="p-3 border rounded-lg focus:ring focus:ring-blue-300"
          >
            <option value="">Select Service</option>
            {mockPrices.map((cat) => (
              <optgroup key={cat.category} label={cat.category}>
                {cat.items.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>

          {price && (
            <p className="text-md text-blue-600 font-semibold">
              Selected Price: ${price}
            </p>
          )}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
