"use client";
import Head from "next/head";
import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import PageHeader from "~/components/Section/Common/PageHeader";
import { HeaderFour } from "~/components/Section/Common/Header";

export default function RateCardPage() {
  return (
    <div className="body-dark-bg">
      <Head>
        <title>Rate Card | One Click Handling</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://oneclickhandling.co.uk/rate-card" />
      </Head>
      <HeaderFour />
      <PageHeader title="Rate Card" />
      <section style={{ padding: "80px 20px" }}>
        <div className="container" style={{ maxWidth: 900, margin: "0 auto" }}>
          <p>Please contact <a href="mailto:info@oneclickhandling.co.uk">info@oneclickhandling.co.uk</a> for our latest rate card.</p>
        </div>
      </section>
      <FooterThree />
    </div>
  );
}


