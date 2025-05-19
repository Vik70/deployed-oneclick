
import CtaThree from "~/components/Section/Common/Cta/CtaThree";
import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import { HeaderFour } from "~/components/Section/Common/Header";
import PageHeader from "~/components/Section/Common/PageHeader";
import ErrorSection from "~/components/Section/ErrorSection";

const NotFoundPage = () => {
  return (
    <>
     <HeaderFour/>
      <PageHeader title="404" />
      <ErrorSection />
      <CtaThree />
      <FooterThree />
    </>
  );
};

export default NotFoundPage;
