"use client";
import Head from "next/head";

import BlogSection from "~/components/Section/About/BlogSection";
import BrandSection from "~/components/Section/About/BrandSection";
import FactSection from "~/components/Section/About/FactSection";
import ProjectSection from "~/components/Section/About/ProjectSection";
import ServiceSection from "~/components/Section/About/ServiceSection";
import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import PageHeader from "~/components/Section/Common/PageHeader";
import AboutSection from "~/components/Section/About/AboutSection";
import { HeaderFour } from "~/components/Section/Common/Header";
import Team from "~/components/Section/Common/Team";
import CtaThree from "~/components/Section/Common/Cta/CtaThree";

const AboutPage = () => {
  return (
    <div className="body-dark-bg">
      <Head>
        <title>About Us | One Click Handling</title>
        <meta
          name="description"
          content="Discover One Click Handling's mission, values, and industry expertise. Learn how we provide seamless transport and handling, warehousing, and customs services tailored for businesses across the UK."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us | One Click Handling" />
        <meta
          property="og:description"
          content="Trusted handling and warehousing experts. Learn more about our team, capabilities, and commitment to client success."
        />
        <meta property="og:image" content="/img/logo.png" />
        <meta
          name="keywords"
          content="about transport and handling company, warehousing, customs, transport solutions, One Click Handling"
        />
      </Head>

      <div className="fix">
        <HeaderFour />
        <PageHeader title="About Us" />
        <AboutSection />
        {/* <FactSection /> */}
        <ServiceSection />
        {/* <ProjectSection /> */}
        {/* <Team /> */}
        {/* <BlogSection /> */}
        {/* <BrandSection /> */}
        <CtaThree />
        <FooterThree />
      </div>
    </div>
  );
};

export default AboutPage;
