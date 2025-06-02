// app/about/page.tsx

import Image from "next/image";

export const metadata = {
  title: "Om Oss | Klipp Södermalm",
  description:
    "Piercing, öronhåltagning & microneedling på Södermalm. Professionell salong i över 25 år med omtanke, noggrannhet och trygg service.",
  keywords: [
    "piercing",
    "öronhåltagning",
    "microneedling",
    "Södermalm",
    "salong",
    "Klipp Södermalm",
  ],
  openGraph: {
    title: "Klipp Södermalm",
    description:
      "Professionell piercing, öronhåltagning och microneedling i hjärtat av Södermalm.",
    url: "https://yourdomain.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-white px-4 py-10 md:px-16">
      <section className="max-w-5xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Klipp Södermalm
          </h1>
          <p className="text-lg md:text-xl">
            Piercing, Öronhåltagning & Microneedling på Södermalm
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <Image
              src="/about.jpg" 
              alt="Klipp Södermalm"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2 space-y-4 text-base leading-relaxed">
            <p>
              Välkommen till <span className="font-semibold text-primary">Klipp Södermalm</span> – din professionella och prisvärda salong med
              fokus på piercing, öronhåltagning och microneedling i hjärtat av
              Södermalm.
            </p>
            <p>
              Vi har varit en trygg och etablerad salong i över 25 år, och är
              kända för vår snabba service, noggrannhet och omtanke om varje
              kund. Hos oss är alla välkomna – oavsett ålder eller tidigare
              erfarenhet.
            </p>
          </div>
        </div>

        <div className="bg-background-secondary rounded-xl p-6 md:p-10 space-y-6 shadow-md">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">
            Våra behandlingar
          </h2>
          <div className=" space-y-3 text-white">
            <div>
              <strong className="text-primary">Piercing med nål</strong>  – vi utför säkra och stilrena piercingar, till exempel i navel, näsa och öra.
            </div>
            <div>
              <strong className="text-primary">Öronhåltagning med pistol</strong> – skonsam och steril håltagning för både vuxna & barn oavsett ålder.
            </div>
            <div>
              <strong className="text-primary">Microneedling</strong> – en effektiv hudbehandling som stimulerar kollagen, förbättrar hudens struktur, minskar porer och fina linjer, jämnar ut hudtonen och ger en fastare, fräschare och mer ungdomlig hud.
            </div>
            <div>
              <strong className="text-primary">Eyelash Lift</strong> – en skonsam behandling som lyfter och böjer dina naturliga fransar, ofta i kombination med färgning och keratinbehandling för starkare och glansigare fransar. Ger ett mascara-liknande resultat som håller i flera veckor – ett perfekt alternativ till fransförlängning.
            </div>
          </div>
        </div>

        <div className="text-center space-y-3">
          <p className="text-lg">
            Boka smidigt online, via telefon – eller kom förbi spontant på
            drop-in!
          </p>
          <p className="font-medium text-primary text-xl">
            Vi ser fram emot att ta hand om dig!
          </p>
        </div>
      </section>
    </main>
  );
}
