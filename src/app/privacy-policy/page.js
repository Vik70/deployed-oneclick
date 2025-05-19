"use client";
import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import PageHeader from "~/components/Section/Common/PageHeader";
import { HeaderFour } from "~/components/Section/Common/Header";
import CtaThree from "~/components/Section/Common/Cta/CtaThree";

const PrivacyPolicyPage = () => {
  return (
    <div className="body-dark-bg">
      <HeaderFour />
      <PageHeader title="Privacy Policy" />

      <section className="legal-content-section" style={{ padding: "80px 20px" }}>
        <div className="container" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px" }}>Privacy Policy</h2>
          <p className="mb-4">
            One Click Handling Ltd is committed to protecting your privacy. This policy explains how we collect,
            use, and protect your information in accordance with UK GDPR and other applicable laws.
          </p>

          <h4 className="mt-5 mb-2">Information We Collect</h4>
          <ul className="list-disc ml-5 mb-4">
            <li>Personal identification information (e.g., name, email, phone number)</li>
            <li>Shipment and logistics details</li>
            <li>Technical and device data (e.g., IP address, browser type)</li>
          </ul>

          <h4 className="mt-5 mb-2">How We Use Your Information</h4>
          <ul className="list-disc ml-5 mb-4">
            <li>To manage and deliver logistics services</li>
            <li>To respond to enquiries and customer support</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h4 className="mt-5 mb-2">Data Sharing</h4>
          <p className="mb-4">
            We do not sell your data. It may be shared with trusted third-party partners or authorities only where
            required to deliver services or comply with the law.
          </p>

          <h4 className="mt-5 mb-2">Data Security</h4>
          <p className="mb-4">
            We use appropriate technical and organizational measures to protect your personal data from unauthorized
            access, alteration, or disclosure.
          </p>

          <h4 className="mt-5 mb-2">Your Rights</h4>
          <ul className="list-disc ml-5 mb-4">
            <li>Access, correct, or delete your personal data</li>
            <li>Withdraw consent or object to data processing</li>
            <li>Submit a complaint to the ICO or relevant authority</li>
          </ul>

          <h4 className="mt-5 mb-2">Contact Us</h4>
          <p className="mb-4">
            Email: info@oneclickhandling.co.uk <br />
            Phone: 0333 404 0298 <br />
            Address: Unit 6 Mercury Centre, Feltham Trading Estate, TW14 0RN
          </p>

          <h4 className="mt-5 mb-2">Policy Updates</h4>
          <p>
            We may update this policy periodically. Any changes will be posted on this page with a revised effective date.
          </p>
        </div>
      </section>

      {/* <CtaThree /> */}
      <FooterThree />
    </div>
  );
};

export default PrivacyPolicyPage;
