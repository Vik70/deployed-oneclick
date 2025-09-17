import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import PageHeader from "~/components/Section/Common/PageHeader";
import Cta from "~/components/Section/Common/Cta";
import ServiceDetails from "~/components/Section/Common/ServiceDetails";
import { HeaderFour } from "~/components/Section/Common/Header";

export const metadata = {
  alternates: { canonical: "https://oneclickhandling.co.uk/security-screening" },
};

export default function SecurityScreeningPage() {
  return (
    <div className="body-dark-bg">
      <div className="fix">
        <HeaderFour />
        <PageHeader title="Security Screening" />
        <ServiceDetails title="Security Screening" transportType="security-screening" />
        <Cta />
        <FooterThree />
      </div>
    </div>
  );
}


