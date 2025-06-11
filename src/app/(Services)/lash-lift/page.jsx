import OfferBanners from "@/components/common/OfferBanners";
import ServicesList from "@/components/common/ServicesList";

export const metadata = {
  title: "Lash Lift & Brow Lift i Stockholm – Naturlig skönhet utan smink",
  description:
    "Få vackert böjda fransar och perfekt formade bryn utan smink. Professionella och skonsamma behandlingar i Stockholm som lyfter fram din naturliga skönhet.",
};

export default function page() {
  return (
    <div className="min-h-screen  text-white bg-background-secondary">
      {/* Hero Section */}
      <div
        className="hero h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/lashift.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold drop-shadow mb-3 text-primary">Lash Lift & Brow Lift – Naturlig skönhet med lyft</h1>
            <p className="text-lg">
              Få vackert böjda fransar och perfekt formade bryn – helt utan smink. Vi lyfter fram din naturliga skönhet med skonsamma och professionella behandlingar
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
          <h2 className="text-2xl font-semibold mb-6 text-center">Lash Lift & Brow Lift</h2>
          <ServicesList category={`lash lift`} />
        </section>

        <section>
  <h2 className="text-2xl font-semibold mb-4 text-primary">Vad vi erbjuder:</h2>
  <ul className="list-disc list-inside space-y-2">
    <li>Näspiercing med nål</li>
    <li>Navelpiercing med nål</li>
    <li>Öronpiercing med nål (helix, tragus, conch m.m.)</li>
    <li>Piercing i Stockholm för både kvinnor och män</li>
    <li>Lash Lift & Brow Lift för naturligt markerade ögon</li>
  </ul>
</section>

{/* Lash Lift & Brow Lift Section */}
<section className="mt-8">
  <h2 className="text-2xl font-semibold mb-4 text-primary">Lash Lift & Brow Lift i Stockholm</h2>
  <p className="mb-4">
    Vill du framhäva dina ögon utan att behöva använda smink varje dag? Våra Lash Lift och Brow Lift behandlingar ger dig ett naturligt lyft och en definierad look som håller i veckor. Perfekt för dig som vill ha ett fräscht utseende varje dag.
  </p>
  <ul className="list-disc list-inside space-y-2">
    <li>Naturlig böjning av dina egna fransar – ingen fransförlängning krävs</li>
    <li>Brow Lift för fylliga och välformade ögonbryn</li>
    <li>Skonsam behandling med långvariga resultat (6–8 veckor)</li>
    <li>Passar både vardag och fest</li>
  </ul>
</section>

{/* Why Choose Us */}
<section className="mt-10">
  <h2 className="text-2xl font-semibold mb-6 text-primary">Varför välja oss?</h2>
  <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
    <ul className="list-disc list-inside space-y-2">
      <li>Vi har lång erfarenhet av nålpiercing</li>
      <li>Allt utförs med sterila verktyg och hög hygien</li>
      <li>Vi använder smycken i hög kvalitet som passar din stil</li>
      <li>Du får tydliga eftervårdsråd efter din piercing</li>
    </ul>

    <div className="card bg-background shadow-md p-5">
      <p>
        Oavsett om det är din första piercing eller om du vill lägga till fler – vi hjälper dig hela vägen.
        Vi är din lokala piercingstudio i Stockholm du kan lita på.
      </p>
    </div>
  </div>
</section>

{/* Optional SEO-enhanced section */}
<section className="mt-10">
  <h2 className="text-2xl font-semibold mb-4">Skönhetsbehandlingar med fokus på kvalitet</h2>
  <p>
    Vi erbjuder professionell Lash Lift & Brow Lift i Stockholm med fokus på kvalitet, säkerhet och hållbara resultat. 
    Våra behandlingar är populära bland både kvinnor och män som vill känna sig fräscha och välvårdade – varje dag utan smink.
  </p>
</section>

     
      </main>
    </div>
  );
}
