import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import PageHeader from "~/components/Section/Common/PageHeader";
import Cta from "~/components/Section/Common/Cta";
import ServiceDetails from "~/components/Section/Common/ServiceDetails";
import { HeaderFour } from "~/components/Section/Common/Header";

export default function AirTransportPage() {
  return (
    <div className="body-dark-bg">
       <HeaderFour/>
      <div className="fix">
        <PageHeader
          title="Air Transport"
        />
        <ServiceDetails
          title="Air Transport Services"
          transportType="air"
          thumbnailOne="/img/service/services-details-img1.jpg"
          thumbnailTwo="/img/service/services-details-img2.jpg"
        />
        <Cta />
        <FooterThree />
      </div>
    </div>
  );
}
