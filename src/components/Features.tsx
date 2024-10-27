import React from 'react';
import { BookOpen, Users, Network, Globe2 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      name: 'Research Excellence',
      description: 'Leading research in systems science, cybernetics, and advanced technologies.',
      icon: BookOpen,
    },
    {
      name: 'Global Collaboration',
      description: 'International partnerships with leading research institutions worldwide.',
      icon: Globe2,
    },
    {
      name: 'Expert Team',
      description: 'World-class researchers and scientists pushing boundaries of knowledge.',
      icon: Users,
    },
    {
      name: 'Innovation Network',
      description: 'Cutting-edge facilities and advanced research infrastructure.',
      icon: Network,
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Advancing Systems Science
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our commitment to excellence in research and innovation
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;