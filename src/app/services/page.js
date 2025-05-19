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
    <div className="body-dark-bg">
      <div className="fix">
        <HeaderFour/>
        <PageHeader title="Our Services" />
        <Services />
        {/* <WorkProcess /> */}
        {/* <ChooseUs /> */}
        {/* <Pricing /> */}
        <CtaThree />
        <FooterThree />
      </div>
    </div>
  );
}
