import React from 'react';
import { BookOpenIcon, GlobeIcon, ClipboardIcon, HomeIcon } from 'lucide-react';
export const ServicesSection = () => {
  const services = [{
    icon: <BookOpenIcon size={48} className="text-blue-600" />,
    title: 'German Language Training',
    description: 'Comprehensive German language courses designed specifically for healthcare professionals, focusing on medical terminology and everyday communication.'
  }, {
    icon: <GlobeIcon size={48} className="text-blue-600" />,
    title: 'Visa & Migration Support',
    description: 'End-to-end assistance with visa applications, work permits, and all necessary documentation for a smooth transition to Germany.'
  }, {
    icon: <ClipboardIcon size={48} className="text-blue-600" />,
    title: 'Job Placement',
    description: 'Direct connections with German hospitals and healthcare facilities actively seeking skilled nurses and healthcare professionals.'
  }, {
    icon: <HomeIcon size={48} className="text-blue-600" />,
    title: 'Settlement Assistance',
    description: 'Support with finding accommodation, opening bank accounts, and navigating daily life in a new country.'
  }];
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto my-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We provide comprehensive support throughout your journey from Kenya
            to Germany
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};