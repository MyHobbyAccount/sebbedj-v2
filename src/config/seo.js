export const DEFAULT_SEO = {
  siteName: "#sebbedj",
  title: "#sebbedj är bäst på fest",
  description: "Professionell DJ för bröllop, event och fester i södra Sverige. Skapa oförglömliga stunder med #sebbedj.",
  keywords: [
    "DJ",
    "Bröllops-DJ",
    "Event-DJ",
    "Fest-DJ",
    "DJ Växjö",
    "DJ södra Sverige",
    "sebbedj",
    "Professionell DJ"
  ],
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "#sebbedj",
    "url": "https://sebbedj.se",
    "logo": "https://sebbedj.se/dj.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "072-157 14 39",
      "contactType": "customer service",
      "email": "boka@sebbedj.se"
    },
    "sameAs": [
      "https://instagram.com/sebbedj",
      "https://facebook.com/sebbedj",
      "https://open.spotify.com/user/sebbedj"
    ]
  }
};

export const PAGES = {
  home: {
    title: DEFAULT_SEO.title,
    description: "Förvandla ditt event med professionella DJ-tjänster. Specialiserad på bröllop, företagsevent och privata fester.",
    keywords: [...DEFAULT_SEO.keywords, "DJ tjänster", "Musikunderhållning", "Festunderhållning"]
  },
  services: {
    title: "DJ-Tjänster",
    description: "Professionella DJ-tjänster för bröllop, företagsevent och fester. Skräddarsydda paket för alla tillfällen.",
    keywords: [...DEFAULT_SEO.keywords, "DJ-paket", "Bröllopsunderhållning", "Företagsevent"]
  },
  about: {
    title: "Om #sebbedj",
    description: "Lär känna #sebbedj - en passionerad och erfaren DJ som skapar oförglömliga stunder på dansgolvet.",
    keywords: [...DEFAULT_SEO.keywords, "Om DJ", "DJ erfarenhet", "DJ kompetens"]
  }
};