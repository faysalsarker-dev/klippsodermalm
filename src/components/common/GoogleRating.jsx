"use client";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaGoogle,FaStar } from "react-icons/fa";

export default function GoogleRating() {
  return (
    <section className="bg-neutral-500 dark:bg-gray-900 py-12 px-4 sm:px-8 mb-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-white mb-4">
          Våra recensioner
        </h2>
        <p className="text-lg text-white mb-6">
          Våra kunder har gett oss <span className="font-semibold text-black dark:text-white">4.8 av 5</span> i betyg på Google för våra tjänster.
        </p>

        <div className="flex items-center justify-center gap-1 text-yellow-400 mb-4">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaRegStarHalfStroke  className="text-yellow-400" />
          
        </div>

        <p className="text-sm text-gray-200 dark:text-gray-400 mb-4">
          Baserat på riktiga Google-recensioner
        </p>

        <a
          href="https://www.google.com/maps/place/Piercing+S%C3%B6dermalm/@59.313286,18.077588,16z/data=!4m6!3m5!1s0x465f77fcd11d453d:0xeabf111cb28a4da0!8m2!3d59.3132858!4d18.0775879!16s%2Fg%2F11lf0t638p?hl=sv&entry=ttu&g_ep=EgoyMDI1MDUxMi4wIKXMDSoASAFQAw%3D%3D" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#D6A354] hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition font-medium"
        >
          <FaGoogle size={18} />
          Se våra recensioner på Google
        </a>
      </div>
    </section>
  );
}
