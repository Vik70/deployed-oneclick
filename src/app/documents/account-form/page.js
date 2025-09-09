"use client";
import Head from "next/head";

export default function AccountFormDocument() {
  return (
    <html lang="en">
      <Head>
        <title>Account Form PDF</title>
        <meta name="robots" content="noindex,follow" />
        <link rel="icon" href="/img/logo/ochlogopng.png" />
        <link rel="apple-touch-icon" href="/img/logo/ochlogopng.png" />
        <link rel="shortcut icon" href="/img/logo/ochlogopng.png" />
        <meta property="og:image" content="/img/logo/ochlogopng.png" />
      </Head>
      <body style={{ margin: 0, padding: 0 }}>
        <iframe
          src="/documents/One Click Handling - Customer Credit Account Application V2.1 August 2025.pdf"
          title="Account Form"
          style={{ border: 0, width: "100vw", height: "100vh" }}
        />
      </body>
    </html>
  );
}


