export const createEventSchema = (event) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": event.title,
  "description": event.description,
  "performer": {
    "@type": "Person",
    "name": "#sebbedj"
  },
  "offers": {
    "@type": "Offer",
    "price": event.price,
    "priceCurrency": "SEK"
  }
});

export const createServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.title,
  "description": service.details,
  "provider": {
    "@type": "Organization",
    "name": "#sebbedj"
  },
  "offers": {
    "@type": "Offer",
    "price": service.price,
    "priceCurrency": "SEK"
  }
});