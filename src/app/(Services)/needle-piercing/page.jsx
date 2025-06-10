import OfferBanners from "@/components/common/OfferBanners";
import ServicesList from "@/components/common/ServicesList";

export const metadata = {
  title: "Piercing med Nål i Stockholm – Trygg & Professionell | Klipp Södermalm",
  description:
    "Säker och hygienisk piercing med nål i Stockholm. Vi erbjuder näspiercing, navelpiercing & öronpiercing med nål på Södermalm. Boka tid enkelt online!",
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
            <h1 className="text-4xl font-bold drop-shadow mb-3 text-primary">Piercing med Nål i Stockholm</h1>
            <p className="text-lg">
              Letar du efter säker och professionell piercing med nål i Stockholm? Hos Klipp Södermalm får du en trygg behandling av erfarna piercare – mitt på Södermalm.
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
          <h2 className="text-2xl font-semibold mb-6 text-center">Piercing med Nål</h2>
          <ServicesList category={`needles piercing`} />
        </section>

        {/* Aftercare Tips */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Vad vi erbjuder:
Näspiercing med nål</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Näspiercing med nål</li>
            <li>Navelpiercing med nål</li>
            <li>Öronpiercing med nål (helix, tragus, conch m.m.)</li>
            <li>Piercing i Stockholm för både kvinnor och män</li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Varför välja oss?</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
      
          
      <ul className="list-disc list-inside space-y-2">
            <li>Vi har lång erfarenhet av nålpiercing</li>
            <li>Allt utförs med sterila verktyg och hög hygien</li>
            <li>Vi använder smycken i hög kvalitet som passar din stil</li>
            <li>Du får tydliga eftervårdsråd efter din piercing</li>
          </ul>

      <div className="card bg-background shadow-md p-5">
              <p>Oavsett om det är din första piercing eller om du vill lägga till fler – vi hjälper dig hela vägen. Vi är din lokala piercingstudio i Stockholm du kan lita på.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
