import React from 'react';
import ServiceCard from './ServiceCard';
import { servicesData } from '../../data/servicesData';

const ServicesList = ({ onBookNow }) => {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {servicesData.map((service, index) => (
        <ServiceCard
          key={index}
          service={service}
          onBookNow={onBookNow}
        />
      ))}
    </div>
  );
};

export default ServicesList;