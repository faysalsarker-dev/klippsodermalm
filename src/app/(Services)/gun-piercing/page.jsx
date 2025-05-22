import ServicesList from "@/components/common/ServicesList";

export const metadata = {
  title: "Needle Piercing Services | Safe, Professional & Stylish",
  description:
    "Explore premium needle piercing services including ear, nose, and belly piercings by certified professionals. 100% hygienic & 4.8★ rated on Google.",
};

export default function page() {
  return (
    <div className="min-h-screen  text-white bg-background-secondary">
      {/* Hero Section */}
      <div
        className="hero h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/needlepiercing.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold drop-shadow mb-3">Gun Piercing Services</h1>
            <p className="text-lg">
              Safe, hygienic, and stylish needle piercings by certified professionals. Trusted by hundreds with a 4.8★ rating on Google.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {/* Google Rating */}
        <section className="text-center">
          <p className="text-lg font-medium">
            ⭐ <span className="text-primary font-bold">4.8/5</span> Google Rating — Based on real customer reviews
          </p>
        </section>

        {/* Services List */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Needle Piercing Services</h2>
          <ServicesList category={`piercing with gun`} />
        </section>

        {/* Aftercare Tips */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Piercing Aftercare Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Clean the area twice daily using a saline solution.</li>
            <li>Avoid touching or rotating the jewelry without washing hands.</li>
            <li>Keep the area dry and avoid swimming for at least 7 days.</li>
            <li>Avoid makeup, creams, or perfumes near the piercing site.</li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-background shadow-md p-5">
              <h3 className="font-bold text-lg mb-2">Certified Professionals</h3>
              <p>All our piercers are certified, trained, and experienced in needle techniques.</p>
            </div>
            <div className="card bg-background shadow-md p-5">
              <h3 className="font-bold text-lg mb-2">Sterile & Safe</h3>
              <p>We use only sterilized tools and single-use needles for complete hygiene.</p>
            </div>
            <div className="card bg-background shadow-md p-5">
              <h3 className="font-bold text-lg mb-2">Style Options</h3>
              <p>Choose from a range of jewelry and piercing placements to match your style.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
