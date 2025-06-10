import OfferBanners from "@/components/common/OfferBanners";
import ServicesList from "@/components/common/ServicesList";

export const metadata = {
  title: "Öronhåltagning med Pistol i Stockholm – För Barn & Vuxna",
  description:
    "Snabb och trygg öronhåltagning med pistol i Stockholm. Perfekt för barn och vuxna. Besök Klipp Södermalm – din lokala piercingstudio på Södermalm.",
};

export default function page() {
  return (
    <div className="min-h-screen  text-white bg-background-secondary">
      {/* Hero Section */}
      <div
        className="hero h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/piercingwithgun.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold drop-shadow mb-3 text-primary">Öronhåltagning med Pistol i Stockholm</h1>
            <h2 className="text-3xl font-bold drop-shadow mb-3 text-red-600">Barn & Vuxna</h2>
            <p className="text-lg">
             Vill du göra hål i öronen snabbt och enkelt? Hos Klipp Södermalm erbjuder vi trygg och skonsam öronhåltagning med pistol i Stockholm. Perfekt för både barn och vuxna!

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
          <h2 className="text-2xl font-semibold mb-6 text-center">Våra pistolpiercingstjänster</h2>
          <ServicesList category={`piercing with gun`} />
        </section>

        {/* Aftercare Tips */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">Det här får du hos oss:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Snabb öronhåltagning i Stockholm</li>
            <li>Passar alla åldrar – barn, ungdomar och vuxna</li>
            <li>Steril utrustning och hygien enligt högsta standard</li>
            <li>Trygg miljö och tydliga råd för eftervård</li>
            <li>Välj bland fina örhängen i allergivänliga material</li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="card bg-background shadow-md p-5">
              <p>Vi finns på Södermalm och har hjälpt många nöjda kunder att ta sitt första eller nästa steg med öronpiercing i Stockholm. Hos oss är du i trygga händer!</p>

              <p>
               Boka din tid online idag eller besök oss i salongen.
              </p>
            </div>
           
           
          </div>
        </section>
      </main>
    </div>
  );
}
