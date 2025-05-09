'use client';
import Head from "next/head";
import dynamic from "next/dynamic";

// Lazy load non-critical components
const Gallery = dynamic(() => import("@/components/Home/Gallery"), { ssr: false });
const BlogList = dynamic(() => import("@/components/Home/BlogList"), { ssr: false });
const Review = dynamic(() => import("@/components/common/Review"), { ssr: false });

import Hero from "@/components/Home/Hero";
import AboutUs from "@/components/Home/Aboutus";
import Services from "@/components/Home/Services";
import Cta from "@/components/Home/Cta";
import ContactLocation from "@/components/common/ContactLocation";
import SpecialOffer from "@/components/common/SpecialOffer";
import Faq from "@/components/common/Faq";

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Website Name | Home</title>
        <meta
          name="description"
          content="Your go-to service for [your niche/industry]. Discover our offerings, testimonials, and latest blogs!"
        />
        <meta
          name="keywords"
          content="your brand, services, blog, contact, gallery, testimonials"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Your Website Name | Home" />
        <meta
          property="og:description"
          content="Explore our professional services, client testimonials, blog posts, and more!"
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <link rel="canonical" href="https://yourwebsite.com/" />
      </Head>

      <main>
        <section>
          <Hero />
        </section>

        <section>
          <AboutUs />
        </section>

        <section>
          <Services />
        </section>

        <section>
          <Gallery />
        </section>

<section><SpecialOffer /></section>

        <section>
          <Review />
        </section>

        <section>
          <Cta />
        </section>

        <section>
          <BlogList />
        </section>
<section>
  <Faq/>
</section>
        <section>
          <ContactLocation />
        </section>
      </main>
    </>
  );
}
