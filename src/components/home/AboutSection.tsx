import React from 'react';
export const AboutSection = () => {
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About Velocity
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto my-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We bridge the gap between talented Kenyan healthcare professionals
            and the growing demand in Germany.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Team meeting at Velocity" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            <p className="text-gray-600">
              Velocity was founded with a clear mission: to create life-changing
              opportunities for Kenyan healthcare professionals while addressing
              the critical shortage of skilled nurses in Germany.
            </p>
            <h3 className="text-2xl font-bold text-gray-800">What We Do</h3>
            <p className="text-gray-600">
              We provide comprehensive German language training, professional
              development, and complete migration support to ensure a smooth
              transition from Kenya to Germany.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800">500+</h4>
                <p className="text-gray-600">Professionals Placed</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800">98%</h4>
                <p className="text-gray-600">Success Rate</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800">50+</h4>
                <p className="text-gray-600">Partner Hospitals</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800">5 Years</h4>
                <p className="text-gray-600">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};