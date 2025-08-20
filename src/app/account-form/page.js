"use client";
import Head from "next/head";
import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import PageHeader from "~/components/Section/Common/PageHeader";
import { HeaderFour } from "~/components/Section/Common/Header";

export default function AccountFormPage() {
  return (
    <div className="body-dark-bg">
      <Head>
        <title>Account Form | One Click Handling</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://oneclickhandling.co.uk/account-form" />
      </Head>
      <HeaderFour />
      <PageHeader title="Account Form" />
      <section style={{ padding: "80px 20px" }}>
        <div className="container" style={{ maxWidth: 900, margin: "0 auto" }}>
          <p>
            Download our credit account application form here: {" "}
            <a href="/documents/credit_account_application_och.pdf" target="_blank" rel="noopener noreferrer">Credit Account Application (PDF)</a>
          </p>
          <p>
            Alternatively, email <a href="mailto:operations@oneclickhandling.co.uk">operations@oneclickhandling.co.uk</a> and we&#39;ll assist you.
          </p>
        </div>
      </section>
      <FooterThree />
    </div>
  );
}


