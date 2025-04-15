import React from 'react';
import { StarIcon } from 'lucide-react';
export const TestimonialsSection = () => {
  const testimonials = [{
    name: 'Jane Mwangi',
    role: 'Registered Nurse',
    location: 'Now working in Berlin',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    quote: 'Velocity transformed my career. From struggling to find opportunities in Kenya to now working in a top Berlin hospital with 3x my previous salary. The German language training was excellent.'
  }, {
    name: 'John Kamau',
    role: 'ICU Specialist',
    location: 'Now working in Munich',
    image: 'https://randomuser.me/api/portraits/men/42.jpg',
    quote: "I never thought moving to Germany would be possible until I found Velocity. Their step-by-step guidance made the complex process manageable. I'm now settled in Munich with my family."
  }, {
    name: 'Sarah Odhiambo',
    role: 'Pediatric Nurse',
    location: 'Now working in Hamburg',
    image: 'https://randomuser.me/api/portraits/women/64.jpg',
    quote: 'The language training at Velocity was specifically designed for healthcare professionals. This made all the difference in my interviews and now in my daily work at the hospital.'
  }];
  return <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Success Stories
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto my-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Hear from healthcare professionals who have successfully relocated
            to Germany with our help
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map(star => <StarIcon key={star} size={18} className="text-yellow-400" fill="currentColor" />)}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-blue-600 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};