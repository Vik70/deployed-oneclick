"use client";
import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import PageHeader from "~/components/Section/Common/PageHeader";
import { HeaderFour } from "~/components/Section/Common/Header";
import CtaThree from "~/components/Section/Common/Cta/CtaThree";

const TermsAndConditions = () => {
  return (
    <div className="body-dark-bg">
      <HeaderFour />
      <PageHeader title="Terms & Conditions" />

      <section className="legal-content-section" style={{ padding: "80px 20px" }}>
        <div className="container" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px" }}>Terms & Conditions</h2>
          <p className="mb-4">
            These Terms and Conditions govern your use of One Click Handling Ltd's services and website.
          </p>

          <h4 className="mt-5 mb-2">Services Offered</h4>
          <ul className="list-disc ml-5 mb-4">
            <li>X-Ray Screening</li>
            <li>Time-Critical Deliveries</li>
            <li>ETSF</li>
            <li>Pick and Pack</li>
            <li>Pharmaceutical Logistics</li>
            <li>AOG Support</li>
            <li>On-Board Courier Services</li>
            <li>Warehousing</li>
            <li>European and Domestic Transport</li>
            <li>Customs Brokerage</li>
          </ul>

          <h4 className="mt-5 mb-2">User Obligations</h4>
          <p className="mb-4">Users must provide accurate information and comply with applicable laws.</p>

          <h4 className="mt-5 mb-2">Limitation of Liability</h4>
          <p className="mb-4">
            One Click Handling Ltd is not liable for indirect or consequential damages, except as required by law.
          </p>

          <h4 className="mt-5 mb-2">Intellectual Property</h4>
          <p className="mb-4">All content is the property of One Click Handling Ltd.</p>

          <h4 className="mt-5 mb-2">Termination</h4>
          <p className="mb-4">We reserve the right to terminate service for violations of these terms.</p>

          <h4 className="mt-5 mb-2">Governing Law</h4>
          <p>These terms are governed by the laws of England and Wales.</p>
        </div>
      </section>

      {/* <CtaThree /> */}
      <FooterThree />
    </div>
  );
};

export default TermsAndConditions;
