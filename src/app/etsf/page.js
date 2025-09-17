import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import PageHeader from "~/components/Section/Common/PageHeader";
import ServiceDetails from "~/components/Section/Common/ServiceDetails";
import { HeaderFour } from "~/components/Section/Common/Header";

export const metadata = {
  alternates: {
    canonical: "https://oneclickhandling.co.uk/etsf",
  },
};

export default function ETSFPage() {
  return (
    <div className="body-dark-bg">
      <div className="fix">
      <HeaderFour/>
        <PageHeader title="ETSF" />
        <ServiceDetails title="ETSF Services" transportType="etsf"
        thumbnailOne="/img/service/services-details-img1.jpg"
        thumbnailTwo="/img/service/services-details-img2.jpg"
        />
        
        <FooterThree />
      </div>
    </div>
  );
} 