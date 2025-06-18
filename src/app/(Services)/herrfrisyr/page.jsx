import OfferBanners from "@/components/common/OfferBanners";
import ServicesList from "@/components/common/ServicesList";

export const metadata = {
  title: "Klassisk Maskinklippt Herrfrisyr – Ren & Tidlös Stil",
  description:
    "Vi erbjuder standardfrisyrer med maskin: korta sidor, snygg nacke och längre upptill för en ren och tidlös look. Perfekt för en välvårdad herrstil.",
};

export default function page() {
  return (
    <div className="min-h-screen  text-white bg-background-secondary">
      {/* Hero Section */}
      <div
        className="hero h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/haircut.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold drop-shadow mb-3 text-primary">Klassisk Maskinklippt Herrfrisyr</h1>
           
            <p className="text-lg">
          Vi erbjuder enbart standardfrisyrer med maskin – korta sidor, snygg nacke och längre upptill för en ren och tidlös look

            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {/* Google Rating */}
        <section className="text-center">
          <p className="text-lg font-medium">
            ⭐ <span className="text-primary font-bold">4.8/5</span> Google Rating — Baserat på riktiga kundrecensioner
          </p>
        </section>

<section><OfferBanners /></section>


        {/* Services List */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-center">Vår herrfrisyr</h2>
          <ServicesList category={`herrfrisyr`} />
        </section>

       <section>
  <h2 className="text-2xl font-semibold mb-4 text-primary">Det här ingår i din klippning:</h2>
  <ul className="list-disc list-inside space-y-2">
    <li>Maskinklippta sidor och nacke för en skarp och ren look</li>
    <li>Längre upptill för en klassisk och tidlös stil</li>
    <li>Anpassad efter ditt huvudform och hårtyp</li>
    <li>Professionell rådgivning om stil och skötsel</li>
    <li>Snabb och effektiv klippning – perfekt för dig med fullspäckat schema</li>
  </ul>
</section>

{/* Why Choose Us */}
<section>
  <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
    <div className="card bg-background shadow-md p-5">
    
      <p className="mt-3">
        Besök vår salong på Södermalm eller boka din tid online – vi ser fram emot att ge dig en frisyr som passar just dig.
      </p>
    </div>
  </div>
</section>

     
      </main>
    </div>
  );
}
