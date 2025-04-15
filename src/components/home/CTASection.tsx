import React from 'react';
import { Button } from '../common/Button';
export const CTASection = () => {
  return <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey to Germany?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of healthcare professionals who have successfully
            relocated and transformed their careers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Apply Now</h3>
              <p className="text-blue-100 mb-6">
                Start your application process today and take the first step
                toward your new career in Germany.
              </p>
              <Button size="lg">Begin Application</Button>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Join Waiting List</h3>
              <p className="text-blue-100 mb-6">
                Not ready to apply yet? Join our waiting list to stay updated on
                future opportunities.
              </p>
              <Button variant="outline" size="lg">
                Join Waiting List
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};