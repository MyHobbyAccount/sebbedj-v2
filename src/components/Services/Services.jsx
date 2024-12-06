import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import ContactPopup from '../Contact/ContactPopup';
import { servicesData } from '../../data/servicesData';

const Services = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleBookNow = (service) => {
    setSelectedService(service);
    setIsContactOpen(true);
  };

  return (
    <section className="section-height animated-bg py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 section-header">
          Våra Tjänster
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              onBookNow={handleBookNow}
            />
          ))}
        </div>
      </div>
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        service={selectedService}
      />
    </section>
  );
};

export default Services;