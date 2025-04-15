import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { ContactForm } from '../components/contact/ContactForm';
import { Map } from '../components/contact/Map';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from 'lucide-react';
export const Contact = () => {
  const contactInfo = [{
    icon: <PhoneIcon className="w-6 h-6 text-blue-600" />,
    title: 'Phone',
    details: ['+254 123 456 789', '+254 987 654 321']
  }, {
    icon: <MailIcon className="w-6 h-6 text-blue-600" />,
    title: 'Email',
    details: ['info@velocity-global.com', 'support@velocity-global.com']
  }, {
    icon: <MapPinIcon className="w-6 h-6 text-blue-600" />,
    title: 'Location',
    details: ['123 Business Center', 'Nairobi, Kenya']
  }, {
    icon: <ClockIcon className="w-6 h-6 text-blue-600" />,
    title: 'Office Hours',
    details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM']
  }];
  return <>
      <PageHeader title="Contact Us" subtitle="Get in touch with our team for any questions or inquiries" backgroundImage="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Have questions about our programs or ready to start your journey
                to Germany? Fill out the form below and our team will get back
                to you shortly.
              </p>
              <ContactForm />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      {info.icon}
                      <h3 className="text-xl font-semibold text-gray-800 ml-3">
                        {info.title}
                      </h3>
                    </div>
                    {info.details.map((detail, idx) => <p key={idx} className="text-gray-600">
                        {detail}
                      </p>)}
                  </div>)}
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Find Us
                </h3>
                <Map />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};