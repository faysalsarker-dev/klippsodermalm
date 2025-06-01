import OfferBanners from "@/components/common/OfferBanners";
import ServicesList from "@/components/common/ServicesList";

export const metadata = {
  title: "Microneedling i Stockholm – Hudförbättring på Klipp Södermalm",
  description:
    "Professionell microneedling i Stockholm för friskare hud. Behandling mot ärr, stora porer & fina linjer. Boka din tid på Södermalm idag!",
};

export default function page() {
  return (
    <div className="min-h-screen  text-white bg-background-secondary">
      {/* Hero Section */}
      <div
        className="hero h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/microneediling.png')" }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold drop-shadow mb-3">Microneedling i Stockholm – För Friskare Hud</h1>
            <p className="text-lg">
           Vill du ha jämnare, fräschare och yngre hud? På Klipp Södermalm erbjuder vi professionell microneedling i Stockholm – en beprövad behandling som stärker din hud på naturligt sätt
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
          <h2 className="text-2xl font-semibold mb-6 text-center">Våra Microneedling-tjänster</h2>
          <ServicesList category={`microneedling`} />
        </section>

        {/* Aftercare Tips */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Fördelar med microneedling</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Jämnare hudton och hudstruktur</li>
            <li>Minskar fina linjer och rynkor</li>
            <li>Hjälper mot akneärr och pigmentfläckar</li>
            <li>Ger huden ny lyster och spänst</li>
            <li>Passar alla hudtyper</li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section>
       
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="card bg-background shadow-md p-5">
              <p>Vi jobbar med hög hygienstandard och anpassar varje behandling efter din hudtyp. Behandlingen tar ca 45–60 minuter och vi ger dig tydliga råd för eftervård.</p>
            </div>
         
       
          </div>
        </section>
      </main>
    </div>
  );
}
