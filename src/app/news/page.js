"use client";
import Head from "next/head";
import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import PageHeader from "~/components/Section/Common/PageHeader";
import { HeaderFour } from "~/components/Section/Common/Header";

export default function NewsPage() {
  return (
    <div className="body-dark-bg">
      <Head>
        <title>News | One Click Handling</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://oneclickhandling.co.uk/news" />
      </Head>
      <HeaderFour />
      <PageHeader title="News" />
      <section style={{ padding: "80px 20px" }}>
        <div className="container" style={{ maxWidth: 900, margin: "0 auto" }}>
          <p>Updates and announcements will appear here.</p>
        </div>
      </section>
      <FooterThree />
    </div>
  );
}


