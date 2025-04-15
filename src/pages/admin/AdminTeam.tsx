import React, { useState } from 'react';
import { Button } from '../../components/common/Button';
import { PlusIcon, PencilIcon, TrashIcon } from 'lucide-react';
interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
  linkedin?: string;
  twitter?: string;
}
export const AdminTeam = () => {
  const [members] = useState<TeamMember[]>([{
    id: '1',
    name: 'Dr. Sarah Kimani',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df',
    bio: 'Former healthcare professional with 15 years of experience in Germany...',
    email: 'sarah@velocity-global.com',
    linkedin: '#',
    twitter: '#'
  }]);
  return <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Team Members</h1>
        <Button>
          <PlusIcon size={20} className="mr-2" />
          Add Team Member
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map(member => <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-blue-600">{member.role}</p>
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
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                {member.bio}
              </p>
              <p className="text-gray-500 text-sm">{member.email}</p>
            </div>
          </div>)}
      </div>
    </div>;
};