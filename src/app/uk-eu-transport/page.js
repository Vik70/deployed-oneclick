import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import PageHeader from "~/components/Section/Common/PageHeader";
import Cta from "~/components/Section/Common/Cta";
import ServiceDetails from "~/components/Section/Common/ServiceDetails";
import { HeaderFour } from "~/components/Section/Common/Header";

export const metadata = {
  alternates: { canonical: "https://oneclickhandling.co.uk/uk-eu-transport" },
};

export default function UKEUTransportPage() {
  return (
    <div className="body-dark-bg">
      <div className="fix">
        <HeaderFour />
        <PageHeader title="UK & EU Transport" />
        <ServiceDetails title="UK & EU Transport" transportType="uk-eu-transport" />
        <Cta />
        <FooterThree />
      </div>
    </div>
  );
}


