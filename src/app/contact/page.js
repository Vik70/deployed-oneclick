"use client";
import Head from "next/head";

import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import PageHeader from "~/components/Section/Common/PageHeader";
import ContactUsSection from "~/components/Section/Contact/ContactUsSection";
import MapSection from "~/components/Section/Contact/MapSection";
import { HeaderFour } from "~/components/Section/Common/Header";
import CtaThree from "~/components/Section/Common/Cta/CtaThree";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | One Click Handling</title>
        <meta
          name="description"
          content="Get in touch with One Click Handling for expert handling, warehousing, and customs solutions. Call, email, or use our enquiry form — we respond within 1 business day."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Us | One Click Handling" />
        <meta
          property="og:description"
          content="Reach out to One Click Handling for rapid handling support and transport solutions across the UK and EU."
        />
        <meta property="og:image" content="/img/logo.png" />
        <meta
          name="keywords"
          content="contact transport and handling, warehousing contact, transport enquiries, Heathrow logistics, One Click Handling contact"
        />
      </Head>

      <HeaderFour />
      <PageHeader title="Contact Us" />
      <ContactUsSection />
      <MapSection />
      <CtaThree />
      <FooterThree />
    </>
  );
};

export default ContactPage;
