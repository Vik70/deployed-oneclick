"use client";
import Head from "next/head";

import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import { HeaderFour } from "~/components/Section/Common/Header";

import About from "~/components/Section/Home-1/About";

import ChooseUs from "~/components/Section/Home-1/ChooseUs/ChooseUs";
import Cta from "~/components/Section/Home-1/Cta/Cta";

import Hero from "~/components/Section/Home-1/Hero";

import Service from "~/components/Section/Home-1/Service";
import Testimonial from "~/components/Section/Home-1/Testimonial";


export default function Home() {
  return (
    <div className="body-dark-bg">
      <Head>
        <title>One Click Handling | Courier, Warehousing & Transport Experts</title>
        <meta
          name="description"
          content="One Click Handling provides reliable courier, warehousing, and customs services in the UK. Based near Heathrow, trusted by businesses nationwide."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="One Click Handling | Courier & Warehousing UK" />
        <meta
          property="og:description"
          content="Same-day delivery, secure warehousing, customs clearance, and more. Trusted logistics partner near Heathrow."
        />
        <meta property="og:image" content="/img/logo.png" />
        <meta property="og:url" content="https://www.oneclickhandling.co.uk" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="keywords"
          content="One Click Handling, UK logistics, warehousing, express courier, ETSF, Heathrow transport, ADR shipping, customs brokerage"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "One Click Handling",
              url: "https://www.oneclickhandling.co.uk",
              logo: "https://www.oneclickhandling.co.uk/img/logo/ochmainlogo1.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+44-333-404-0298",
                contactType: "Customer Service",
              },
              sameAs: [
                "https://www.instagram.com/oneclickhandling",
                "https://www.linkedin.com/company/oneclickhandling",
              ],
            }),
          }}
        />
      </Head>

      <div className="fix">
        <HeaderFour />

        {/* H1 tag helps search engine identify page topic */}
        <h1 className="visually-hidden">One Click Handling – Trusted Transport & Warehousing Partner in the UK</h1>

        <Hero />
        <About />
        <Service />
        <Cta />
        <ChooseUs />
        <Testimonial />
        <FooterThree />
      </div>
    </div>
  );
}
