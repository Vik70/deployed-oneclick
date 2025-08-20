"use client";
import Head from "next/head";
import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import PageHeader from "~/components/Section/Common/PageHeader";
import { HeaderFour } from "~/components/Section/Common/Header";
import CtaThree from "~/components/Section/Common/Cta/CtaThree";

const TermsAndConditions = () => {
  return (
    <div className="body-dark-bg">
      <Head>
        <link rel="canonical" href="https://oneclickhandling.co.uk/terms-and-conditions" />
      </Head>
      <HeaderFour />
      <PageHeader title="Terms & Conditions" />

      <section className="legal-content-section" style={{ padding: "80px 20px" }}>
        <div className="container" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px" }}>BIFA 2021 Standard Trading Conditions</h2>
          <p>
            Our services are supplied under the British International Freight Association (BIFA) Standard Trading Conditions (2021).
          </p>
          <p>
            Read the full terms here: <a href="/documents/BIFA-STC-2021-England-Edition.pdf" target="_blank" rel="noopener noreferrer">BIFA STC 2021 (PDF)</a>.
          </p>
        </div>
      </section>

      {/* <CtaThree /> */}
      <FooterThree />
    </div>
  );
};

export default TermsAndConditions;
