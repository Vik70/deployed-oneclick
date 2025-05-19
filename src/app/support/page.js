"use client";
import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import PageHeader from "~/components/Section/Common/PageHeader";
import { HeaderFour } from "~/components/Section/Common/Header";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
import Faq from "~/components/Section/Home-1/Faq";

const SupportPage = () => {
  return (
    <div className="body-dark-bg">
      <HeaderFour />
      <PageHeader title="Support" />

      <section className="legal-content-section" style={{ padding: "80px 20px" }}>
        <div className="container" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px" }}>
            Contact Support
          </h2>
          <p className="mb-4">
            If you need assistance with any of our services or have general enquiries, please reach out to us. Our
            team is here to help.
          </p>

          <h4 className="mt-5 mb-2">Contact Information</h4>
          <ul className="list-disc ml-5 mb-4">
            <li>📞 Phone: <Link href="tel:03334040298">0333 404 0298</Link></li>
            <li>✉️ Email: <Link href="mailto:operations@oneclickhandling.co.uk">info@oneclickhandling.co.uk</Link></li>
            <li>🏢 Address: Unit 6 Mercury Centre, Feltham Trading Estate, TW14 0RN</li>
          </ul>

          <h4 className="mt-5 mb-2">Business Hours: 24/7</h4>
        

          

         
        </div>
      </section>
        <Faq />

      <FooterThree />
    </div>
  );
};

export default SupportPage;
