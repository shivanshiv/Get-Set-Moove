import React from 'react';
import './Services.css';

const services = [
  {
    icon: "🏠",
    title: "Residential Moving",
    description:
      "Professional residential moving services for your home. We handle everything from packing to unpacking with care and attention to detail."
  },
  {
    icon: "🏢",
    title: "Local & Long Distance Moving",
    description:
      "Reliable local and long-distance moving solutions designed to transport your belongings safely and efficiently across cities or provinces."
  },
  {
    icon: "💼",
    title: "Office Moving",
    description:
      "Minimize downtime with our efficient office moving services. We specialize in commercial relocations with minimal disruption to your business."
  },
  {
    icon: "📦",
    title: "Packing Services",
    description:
      "Proper packing is a crucial part of a successful move. Our trained professionals are available to provide full or selective packing services tailored to your needs."
  },
  {
    icon: "🗑️",
    title: "Dump Run",
    description:
      "Fast and hassle-free dump run services to help you remove unwanted items, debris, or clutter from your home or business."
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="section-title">Our Services</h2>

      {/* Company Info Banner */}
      <div className="company-banner">
        <p>Get Set Moove is a moving company serving those in British Columbia and Alberta. They are Canada based and offer the following services:</p>
      </div>

      <div className="services-grid">
        {services.map(({ icon, title, description }) => (
          <div className="service-card" key={title}>
            <div className="service-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;