"use client";
import Head from "next/head";

import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import { HeaderFour } from "~/components/Section/Common/Header";

import About from "~/components/Section/Home-1/About";
import Blog from "~/components/Section/Home-1/Blog";
import ChooseUs from "~/components/Section/Home-1/ChooseUs/ChooseUs";
import Cta from "~/components/Section/Home-1/Cta/Cta";
import Fact from "~/components/Section/Home-1/Fact/Fact";
import Faq from "~/components/Section/Home-1/Faq/Faq";
import Hero from "~/components/Section/Home-1/Hero";
import RecentProjects from "~/components/Section/Home-1/RecentProjects";
import RequestService from "~/components/Section/Home-1/RequestService/RequestService";
import Service from "~/components/Section/Home-1/Service";
import Team from "~/components/Section/Home-1/Team";
import Testimonial from "~/components/Section/Home-1/Testimonial";
import Video from "~/components/Section/Home-1/Video";
import WorkingProcess from "~/components/Section/Home-1/WorkingProcess/WorkingProcess";

export default function Home() {
  return (
    <div className="body-dark-bg">
      <Head>
        <title>One Click Handling | Express Logistics & Warehousing UK</title>
        <meta
          name="description"
          content="Same-day transport, secure warehousing, and customs clearance tailored for businesses. Trusted UK courier and ETSF partner."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="One Click Handling | Express Logistics & Warehousing UK"
        />
        <meta
          property="og:description"
          content="Transport, warehousing, and customs handling specialists. Based near Heathrow."
        />
        <meta property="og:image" content="/img/logo.png" />
        <meta
          name="keywords"
          content="logistics, warehousing, customs brokerage, transport, Heathrow, courier, ADR, ETSF"
        />
      </Head>

      <div className="fix">
        <HeaderFour />

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
