import React from 'react';
import { LinkedinIcon, TwitterIcon, MailIcon } from 'lucide-react';
interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}
export const TeamCard: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
  bio,
  linkedin,
  twitter,
  email
}) => {
  return <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-cover object-center" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-blue-600 font-medium mb-4">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        <div className="flex space-x-4">
          {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <LinkedinIcon size={20} />
            </a>}
          {twitter && <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <TwitterIcon size={20} />
            </a>}
          {email && <a href={`mailto:${email}`} className="text-gray-600 hover:text-blue-600">
              <MailIcon size={20} />
            </a>}
        </div>
      </div>
    </div>;
};