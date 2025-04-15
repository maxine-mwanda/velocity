import React from 'react';
import { Button } from '../common/Button';
export const HeroSection = () => {
  return <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Career Journey from Kenya to Germany
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              Velocity connects talented Kenyan nurses with opportunities in
              Germany through comprehensive language training and professional
              development.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button size="lg">Apply Now</Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Nurses working in a modern hospital" className="rounded-lg shadow-xl w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>;
};