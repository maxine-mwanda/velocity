import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { TeamCard } from '../components/team/TeamCard';
import { Button } from '../components/common/Button';
export const Team = () => {
  const leadership = [{
    name: 'Dr. Sarah Kimani',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    bio: 'Former healthcare professional with 15 years of experience in Germany. Passionate about creating opportunities for African healthcare workers.',
    linkedin: '#',
    twitter: '#',
    email: 'sarah@velocity-global.com'
  }, {
    name: 'Michael Weber',
    role: 'German Operations Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    bio: '20+ years in German healthcare administration. Expertise in healthcare recruitment and placement.',
    linkedin: '#',
    email: 'michael@velocity-global.com'
  }, {
    name: 'Grace Ochieng',
    role: 'Training Program Director',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    bio: 'Language education specialist with focus on medical German. Developed our comprehensive training program.',
    linkedin: '#',
    twitter: '#',
    email: 'grace@velocity-global.com'
  }];
  return <>
      <PageHeader title="Our Team" subtitle="Meet the passionate individuals behind Velocity" backgroundImage="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Leadership Team
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our leadership team brings together expertise from healthcare,
              education, and international recruitment to provide the best
              possible support for your journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {leadership.map((member, index) => <TeamCard key={index} {...member} />)}
          </div>
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Join Our Team
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              We're always looking for passionate individuals to join our
              mission of connecting talented healthcare professionals with
              opportunities in Germany.
            </p>
            <Button size="lg">View Open Positions</Button>
          </div>
        </div>
      </section>
    </>;
};