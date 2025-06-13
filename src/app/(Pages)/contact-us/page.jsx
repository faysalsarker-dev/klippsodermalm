'use client';
import Image from 'next/image';
import axiosInstance from '@/app/lib/axios';
import { useMutation } from '@tanstack/react-query';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
export default function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();



 const { mutateAsync, isPending } = useMutation({
    mutationFn: async (info) => {
      const { data } = await axiosInstance.post(`/send-email`, info);
      
      return data; 
    },
    onSuccess: () => {





      toast.success("Massage send successfully.",{
            style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
      });
      reset();
      refetch(); 
    },
    onError: () => {
      toast.error("An error occurred while submitting your request.",{
            style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
      });
    },
  });


  const onSubmit = (data) => {
    console.log(data);
    mutateAsync(true);
    reset();
  };

  return (
    <div className="bg-background-secondary min-h-screen ">
      {/* Header Image */}
      <div className="relative w-full h-80">
        <Image
          src="/storepic.jpg"
          alt="Contact Banner"
            fill
        priority
          className="object-cover w-full h-full shadow-md"
        />


      <div className="absolute inset-0 hero-overlay  z-10" />


        <div className="relative z-20 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold tracking-wide">Kontakta oss</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-10 flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
   <div className="w-full md:w-2/3 bg-background md:p-10 p-6 rounded-2xl shadow-2xl">
  <h2 className="text-3xl font-semibold text-primary mb-8 ">Skicka ett meddelande</h2>

  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
    
    {/* Name */}
<div className="form-control">
  <label className="block mb-2 text-sm font-semibold text-white">Namn</label>
  <input
    type="text"
    {...register('name', { required: 'Namn är obligatoriskt' })}
    className="input h-12 input-bordered bg-background-secondary text-white w-full placeholder-white focus:outline-none focus:ring-2 focus:ring-primary"
    placeholder="Skriv ditt namn"
  />
  {errors.name && <p className="text-error text-sm mt-1">{errors.name.message}</p>}
</div>

    {/* Email */}
    <div className="form-control">
      <label className="block mb-2 text-sm font-semibold text-white">E-post</label>
      <input
        type="email"
        {...register('email', {
          required: 'E-post är obligatoriskt',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Ogiltig e-postadress',
          },
        })}
            className="input h-12 input-bordered bg-background-secondary text-white w-full placeholder-white focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder="namn@exempel.se"
      />
      {errors.email && <p className="text-error text-sm mt-1">{errors.email.message}</p>}
    </div>

    {/* Message */}
    <div className="form-control">
      <label className="block mb-2 text-sm font-semibold text-white">Meddelande</label>
      <textarea
        rows={5}
        {...register('message', { required: 'Meddelande är obligatoriskt' })}
        className="textarea textarea-bordered bg-background-secondary text-white w-full placeholder-white focus:ring-2 focus:ring-primary"
        
        placeholder="Skriv ditt meddelande här..."
      />
      {errors.message && <p className="text-error text-sm mt-1">{errors.message.message}</p>}
    </div>

 <button
  type="submit"
  disabled={isPending}
  className="btn btn-primary w-full text-base rounded-lg hover:bg-primary-dark hover:shadow-lg transition duration-300"
>
  Skicka meddelande
</button>


  </form>
</div>



        {/* Contact Info */}
      <div className="w-full md:w-1/3 card bg-background text-white p-6 shadow-lg rounded-xl">
  <h2 className="text-xl font-semibold text-primary mb-4">Kontakta oss</h2>
  <div className="space-y-3">
    <p> <strong>E-post:</strong> <a href="mailto:klippsodermalm1@gmail.com" className="link link-primary">klippsodermalm1@gmail.com</a></p>
    <p>📞 <strong> Telefon:</strong>   <span>
                 <a href="tel:086415057" className=" hover:underline">
                    <span className="font-medium"></span> 08-6415057 </a>
                  eller
                 <a href="tel:0739842237" className=" hover:underline">
                    <span className="font-medium"></span> 0739-842237 </a>
                  </span></p>
    <p>📍 <strong> Adress:</strong><br />Klipp Södermalm 
Åsögatan 128 
  <br />Åsögatan 128<br />11624 Stockholm, Sweden</p>
    <p> <strong>Öppettider:</strong><br />Mån–Fre: 10:00–18:00<br />Lördag: 10:00–15:00<br />Söndag: Stängt</p>
  </div>
</div>

      </div>
<div className="w-full h-80 overflow-hidden  mt-20">
  <iframe
    className="w-full h-full"
 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2036.1779290477377!2d18.0775879!3d59.3132858!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77fcd11d453d%3A0xeabf111cb28a4da0!2sPiercing%20S%C3%B6dermalm!5e0!3m2!1ssv!2sbd!4v1744034781667!5m2!1ssv!2sbd"
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>
    </div>
  );
}
