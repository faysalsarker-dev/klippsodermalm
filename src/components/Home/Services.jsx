

export default function Services() {


const services = [
    {
      name: "Haircuts",
      description: "Sharp fades, modern styles, and classic cuts by skilled barbers.",
      icon: "💈",
    },
    {
      name: "Piercing",
      description: "Safe, stylish piercings with sterile techniques and bold precision.",
      icon: "🧿",
    },
    {
      name: "Microneedling",
      description: "Revitalize your skin with professional-grade microneedling treatments.",
      icon: "🧴",
    },
  ];


  return (
    <section className="py-16 px-4 background-secondary " >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 tracking-wide">Our Services</h2>
        <p className="text-lg mb-10 ">Precision. Style. Professional Care.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Haircut Service */}




          {
            services.map((service, index) => (
              <div key={index} className="background shadow-lg border border-neutral-700 hover:shadow-xl transition">
                <div className="card-body items-center text-center">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="card-title text-xl font-semibold">{service.name}</h3>
                  <p className="text-sm ">{service.description}</p>
                </div>
              </div>
            ))
          }
      

      
        
        </div>
      </div>
    </section>
  );
}
