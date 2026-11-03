const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://carrya.ac.id";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "CARRYA",
        url: siteUrl,
        logo: `${siteUrl}/carrya-logo.png`,
        description:
          "CARRYA adalah brand totebag denim upcycle yang fungsional, stylish, dan berkelanjutan.",
        sameAs: [
          "https://www.instagram.com/carrya.id/",
          "https://www.tiktok.com/@carrya.id",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "CARRYA",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "id-ID",
      },
      {
        "@type": "Product",
        name: "CARRYA Tote - Crafted Edition",
        image: `${siteUrl}/tote-1.jpeg`,
        description:
          "Totebag denim upcycle dengan saku depan dan patch logo CARRYA, muat laptop hingga 15.6 inci.",
        brand: { "@id": `${siteUrl}/#organization` },
        offers: {
          "@type": "Offer",
          price: "200000",
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/#products`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
