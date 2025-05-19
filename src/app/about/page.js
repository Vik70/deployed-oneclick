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
