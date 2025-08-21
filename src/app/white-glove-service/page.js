import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import PageHeader from "~/components/Section/Common/PageHeader";
import Cta from "~/components/Section/Common/Cta";
import ServiceDetails from "~/components/Section/Common/ServiceDetails";
import { HeaderFour } from "~/components/Section/Common/Header";

export const metadata = {
  alternates: { canonical: "https://oneclickhandling.co.uk/white-glove-service" },
};

export default function WhiteGloveServicePage() {
  return (
    <div className="body-dark-bg">
      <div className="fix">
        <HeaderFour />
        <PageHeader title="White Glove Service" />
        <ServiceDetails title="White Glove Service" transportType="white-glove-service" />
        <Cta />
        <FooterThree />
      </div>
    </div>
  );
}


