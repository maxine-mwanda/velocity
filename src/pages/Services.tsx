import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { BookOpenIcon, GraduationCapIcon, PlaneIcon, BuildingIcon, HeartPulseIcon, ScrollTextIcon } from 'lucide-react';
import { Button } from '../components/common/Button';
export const Services = () => {
  const services = [{
    icon: <BookOpenIcon size={40} className="text-blue-600" />,
    title: 'German Language Training',
    description: 'Specialized language courses designed for healthcare professionals, focusing on medical terminology and daily communication.',
    features: ['Medical German vocabulary', 'Conversation practice', 'Cultural integration modules', 'Exam preparation']
  }, {
    icon: <GraduationCapIcon size={40} className="text-blue-600" />,
    title: 'Professional Development',
    description: 'Comprehensive training to ensure your skills meet German healthcare standards.',
    features: ['Healthcare system orientation', 'Professional ethics', 'Documentation practices', 'Team collaboration skills']
  }, {
    icon: <PlaneIcon size={40} className="text-blue-600" />,
    title: 'Migration Support',
    description: 'Complete assistance with the migration process from documentation to arrival.',
    features: ['Visa application support', 'Document translation', 'Qualification recognition', 'Travel arrangements']
  }, {
    icon: <BuildingIcon size={40} className="text-blue-600" />,
    title: 'Settlement Services',
    description: 'Helping you settle into your new life in Germany with comprehensive support.',
    features: ['Housing assistance', 'Bank account setup', 'Insurance guidance', 'Local registration support']
  }, {
    icon: <HeartPulseIcon size={40} className="text-blue-600" />,
    title: 'Job Placement',
    description: 'Connecting you with leading German healthcare facilities that match your skills and preferences.',
    features: ['Hospital matching', 'Interview preparation', 'Contract review', 'Workplace orientation']
  }, {
    icon: <ScrollTextIcon size={40} className="text-blue-600" />,
    title: 'Ongoing Support',
    description: 'Continuous assistance throughout your journey in Germany.',
    features: ['Regular check-ins', 'Career development advice', 'Cultural adaptation support', 'Professional networking']
  }];
  return <>
      <PageHeader title="Our Services" subtitle="Comprehensive support for your journey to working in Germany" backgroundImage="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2091&q=80" />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => <li key={idx} className="flex items-start">
                      <CheckCircleIcon size={20} className="text-green-500 mr-2 mt-1" />
                      <span className="text-gray-600">{feature}</span>
                    </li>)}
                </ul>
              </div>)}
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Take the first step towards your career in Germany. Apply now or
              contact us to learn more about our services.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Apply Now</Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>;
};