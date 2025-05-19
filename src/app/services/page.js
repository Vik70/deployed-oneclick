"use client";
import Head from "next/head";

import PageHeader from "~/components/Section/Common/PageHeader";
import ChooseUs from "~/components/Section/Services/ChooseUs";
import Pricing from "~/components/Section/Services/Pricing";
import Services from "~/components/Section/Services/Services";
import WorkProcess from "~/components/Section/Services/WorkProcess";
import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import { HeaderFour } from "~/components/Section/Common/Header";
import CtaThree from "~/components/Section/Common/Cta/CtaThree";

export default function BlogDetailsPage() {
  return (
    <>
      <Head>
        <title>Our Services | One Click Handling</title>
        <meta
          name="description"
          content="Explore our full range of handling solutions including warehousing, customs clearance, same-day transport, and European freight handling."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Our Services | One Click Handling" />
        <meta
          property="og:description"
          content="Comprehensive transport and handling services tailored to your needs. Fast, secure, and reliable delivery across the UK and Europe."
        />
        <meta property="og:image" content="/img/logo.png" />
        <meta
          name="keywords"
          content="transport and handling services, customs brokerage, same-day delivery, warehousing UK, Heathrow freight, European transport"
        />
      </Head>

      <div className="body-dark-bg">
        <div className="fix">
          <HeaderFour />
          <PageHeader title="Our Services" />
          <Services />
          {/* <WorkProcess /> */}
          {/* <ChooseUs /> */}
          {/* <Pricing /> */}
          <CtaThree />
          <FooterThree />
        </div>
      </div>
    </>
  );
}
