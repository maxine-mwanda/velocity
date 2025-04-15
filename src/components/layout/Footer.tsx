import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Velocity</h3>
            <p className="text-gray-300 mb-4">
              Connecting talented Kenyan nurses with opportunities in Germany
              through language training and professional development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400">
                  Apply Now
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400">
                  German Language Training
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400">
                  Career Placement
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400">
                  Visa Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400">
                  Cultural Integration
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon size={20} className="mr-2 mt-1 text-blue-400" />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={20} className="mr-2 text-blue-400" />
                <span className="text-gray-300">+254 123 456 789</span>
              </li>
              <li className="flex items-center">
                <MailIcon size={20} className="mr-2 text-blue-400" />
                <span className="text-gray-300">info@velocity-global.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Velocity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};