import React, { useState } from 'react';
import { Button } from '../../components/common/Button';
import { PlusIcon, PencilIcon, TrashIcon, GripVerticalIcon } from 'lucide-react';
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  order: number;
}
export const AdminServices = () => {
  const [services] = useState<Service[]>([{
    id: '1',
    title: 'German Language Training',
    description: 'Comprehensive German language courses designed specifically for healthcare professionals...',
    icon: 'BookOpen',
    features: ['Medical German vocabulary', 'Conversation practice', 'Cultural integration modules', 'Exam preparation'],
    order: 1
  }]);
  return <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Services</h1>
        <Button>
          <PlusIcon size={20} className="mr-2" />
          Add Service
        </Button>
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <p className="text-sm text-gray-600">
            Drag and drop services to reorder them. Click edit to modify service
            details.
          </p>
        </div>
        <ul className="divide-y divide-gray-200">
          {services.map(service => <li key={service.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center">
                <div className="cursor-move text-gray-400 hover:text-gray-600">
                  <GripVerticalIcon size={20} />
                </div>
                <div className="ml-4 flex-grow">
                  <h3 className="text-lg font-medium text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-1">
                    {service.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {service.features.map((feature, index) => <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {feature}
                      </span>)}
                  </div>
                </div>
                <div className="ml-4 flex items-center space-x-2">
                  <button className="p-2 text-blue-600 hover:text-blue-800">
                    <PencilIcon size={18} />
                  </button>
                  <button className="p-2 text-red-600 hover:text-red-800">
                    <TrashIcon size={18} />
                  </button>
                </div>
              </div>
            </li>)}
        </ul>
      </div>
    </div>;
};