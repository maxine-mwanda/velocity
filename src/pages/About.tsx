import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { CheckCircleIcon, UsersIcon, HeartHandshakeIcon, GlobeIcon } from 'lucide-react';
export const About = () => {
  const values = [{
    icon: <HeartHandshakeIcon size={40} className="text-blue-600" />,
    title: 'Empowerment',
    description: 'We believe in empowering healthcare professionals to achieve their international career aspirations.'
  }, {
    icon: <CheckCircleIcon size={40} className="text-blue-600" />,
    title: 'Excellence',
    description: 'We maintain the highest standards in our training programs and support services.'
  }, {
    icon: <UsersIcon size={40} className="text-blue-600" />,
    title: 'Community',
    description: 'We foster a supportive community of healthcare professionals helping each other succeed.'
  }, {
    icon: <GlobeIcon size={40} className="text-blue-600" />,
    title: 'Global Impact',
    description: 'We contribute to addressing global healthcare workforce challenges through ethical recruitment.'
  }];
  return <>
      <PageHeader title="About Velocity" subtitle="Building bridges between Kenyan talent and German healthcare opportunities" backgroundImage="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2018, Velocity emerged from a vision to address two
                  critical challenges: the shortage of healthcare professionals
                  in Germany and the limited international opportunities for
                  skilled Kenyan nurses.
                </p>
                <p>
                  Our founders, having experienced both the German healthcare
                  system and the potential of Kenyan talent, created a
                  comprehensive program that bridges the gap between these two
                  worlds.
                </p>
                <p>
                  Today, we have successfully helped hundreds of healthcare
                  professionals transform their careers while contributing to
                  better healthcare delivery in Germany.
                </p>
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Velocity team meeting" className="rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do at Velocity, from our
              training programs to our support services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>
    </>;
};