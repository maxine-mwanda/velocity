import React, { useState } from 'react';
import { Button } from '../../components/common/Button';
import { PlusIcon, PencilIcon, TrashIcon, StarIcon } from 'lucide-react';
interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  image: string;
  quote: string;
  rating: number;
  status: 'published' | 'draft';
}
export const AdminTestimonials = () => {
  const [testimonials] = useState<Testimonial[]>([{
    id: '1',
    name: 'Jane Mwangi',
    role: 'Registered Nurse',
    location: 'Berlin',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    quote: 'Velocity transformed my career. From struggling to find opportunities in Kenya to now working in a top Berlin hospital...',
    rating: 5,
    status: 'published'
  }]);
  return <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Testimonials</h1>
        <Button>
          <PlusIcon size={20} className="mr-2" />
          Add Testimonial
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map(testimonial => <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-1 text-blue-600 hover:text-blue-800">
                  <PencilIcon size={18} />
                </button>
                <button className="p-1 text-red-600 hover:text-red-800">
                  <TrashIcon size={18} />
                </button>
              </div>
            </div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, index) => <StarIcon key={index} size={16} className={`${index < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />)}
            </div>
            <p className="text-gray-600 mb-3 line-clamp-3">
              {testimonial.quote}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                {testimonial.location}
              </span>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${testimonial.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {testimonial.status}
              </span>
            </div>
          </div>)}
      </div>
    </div>;
};