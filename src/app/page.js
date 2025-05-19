import Footer from "~/components/Section/Common/Footer";
import Header from "~/components/Section/Common/Header";
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
import FooterThree from "~/components/Section/Common/Footer/FooterThree";


export default function Home() {
  return (
    <div className="body-dark-bg">
      <div className="fix">
        {/* <Header /> */}
        <HeaderFour />

        <Hero />
        <About />
        <Service />
        {/* <Video /> */}
        {/* <WorkingProcess /> */}
        <Cta />
        <ChooseUs />
        {/* <Fact /> */}
        {/* <RecentProjects /> */}
        {/* <RequestService /> */}
        <Testimonial />
        {/* <Team /> */}
        {/* <Faq /> */}
    
        <FooterThree />
      </div>
    </div>
  );
}
