import React from 'react';
import { CheckCircleIcon } from 'lucide-react';
export const ProcessSection = () => {
  const steps = [{
    number: '01',
    title: 'Application & Assessment',
    description: 'Submit your application and complete our comprehensive skills and language assessment.'
  }, {
    number: '02',
    title: 'German Language Training',
    description: 'Complete our specialized German language program designed for healthcare professionals.'
  }, {
    number: '03',
    title: 'Documentation & Visa',
    description: "We'll help you prepare and submit all necessary documentation for recognition and visa application."
  }, {
    number: '04',
    title: 'Job Placement',
    description: 'Get matched with German healthcare facilities based on your skills and preferences.'
  }, {
    number: '05',
    title: 'Relocation & Integration',
    description: 'Receive support with relocation and settling into your new life in Germany.'
  }];
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Process
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto my-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            A clear path to your new career in Germany
          </p>
        </div>
        <div className="relative">
          {/* Process timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
          <div className="space-y-12">
            {steps.map((step, index) => <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    {step.number}
                  </div>
                </div>
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 md:px-12 mb-6 md:mb-0">
                    <div className="md:hidden flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-3">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {step.title}
                      </h3>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h3 className="hidden md:block text-xl font-bold mb-3 text-gray-800">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                      <ul className="mt-4 space-y-2">
                        {[1, 2, 3].map(item => <li key={item} className="flex items-start">
                            <CheckCircleIcon size={18} className="text-green-500 mr-2 mt-1" />
                            <span className="text-gray-600">
                              Key benefit {item}
                            </span>
                          </li>)}
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};