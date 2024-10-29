import React from 'react';
import { Leaf, Sprout, TreePine, Droplets } from 'lucide-react';

const features = [
  {
    icon: Sprout,
    title: 'Sustainable Farming',
    description: 'Implementation of sustainable agricultural practices that maintain ecosystem balance.',
  },
  {
    icon: TreePine,
    title: 'Land Rehabilitation',
    description: 'Restoration of degraded territories through ecological rehabilitation methods.',
  },
  {
    icon: Droplets,
    title: 'Resource Optimization',
    description: 'Efficient use of water and natural resources in agricultural processes.',
  },
];

const projectImages = [
  {
    url: 'https://i.imgur.com/Pp7tI7a.jpeg',
    caption: 'Desert Rehabilitation',
    description: 'Innovative tree protection methods in desert conditions for sustainable growth',
  },
  {
    url: 'https://i.imgur.com/dTdrqA5.jpeg',
    caption: 'Expert Field Inspection',
    description: 'Agricultural expert examining fruit tree development and growth progress',
  },
  {
    url: 'https://i.imgur.com/3fp7hgO.jpeg',
    caption: 'Field Assessment',
    description: 'Specialists conducting field assessments of agricultural development',
  },
  {
    url: 'https://i.imgur.com/fl0dH02.jpeg',
    caption: 'Sustainable Wheat Production',
    description: 'Large-scale sustainable wheat cultivation with natural border vegetation',
  },
  {
    url: 'https://i.imgur.com/WgsFjLp.jpeg',
    caption: 'Advanced Sugarcane Growth',
    description: 'Demonstration of exceptional sugarcane growth achievement',
  },
  {
    url: 'https://i.imgur.com/dGnQDYJ.jpeg',
    caption: 'Modern Hydroponic Systems',
    description: 'Advanced hydroponic cultivation facility for sustainable urban farming',
  },
  {
    url: 'https://i.imgur.com/6dH1YOe.jpeg',
    caption: 'Crop Performance Analysis',
    description: 'Comparative study showing the effectiveness of agricultural innovations',
  },
];

export default function EcologicalAgriculture() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#1e3a8a] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 mix-blend-multiply" />
          <img
            src="https://i.imgur.com/dTdrqA5.jpeg"
            alt="Sustainable Agriculture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Leaf className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Ecological Agriculture</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Developing balanced agricultural clusters and ecological rehabilitation of degraded territories
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-12">
          {/* Overview */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <p className="text-gray-700 leading-relaxed">
                The Ecological Agriculture project represents IRIAS's commitment to sustainable development 
                and environmental restoration. Through this initiative, we focus on creating balanced 
                agricultural clusters that harmonize productivity with ecological preservation, while 
                simultaneously working to rehabilitate degraded territories through innovative methods.
              </p>
              <img
                src="https://i.imgur.com/Pp7tI7a.jpeg"
                alt="Desert Rehabilitation"
                className="rounded-lg shadow-md"
              />
            </div>
          </section>

          {/* Key Features */}
          <section className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </section>

          {/* Project Gallery */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Project Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectImages.map((image, index) => (
                <div key={index} className="space-y-4">
                  <div className="relative rounded-lg overflow-hidden aspect-video">
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{image.caption}</h3>
                    <p className="text-sm text-gray-600">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Implementation */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hydroponic Innovation</h3>
              <img
                src="https://i.imgur.com/dGnQDYJ.jpeg"
                alt="Hydroponic Facility"
                className="rounded-lg shadow-md mb-4"
              />
              <p className="text-gray-700">
                Our state-of-the-art hydroponic facilities demonstrate the potential of sustainable 
                urban farming, maximizing yield while minimizing resource consumption.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Field Research</h3>
              <img
                src="https://i.imgur.com/6dH1YOe.jpeg"
                alt="Crop Comparison"
                className="rounded-lg shadow-md mb-4"
              />
              <p className="text-gray-700">
                Ongoing field research and comparative studies help us optimize growing conditions 
                and develop more effective agricultural practices.
              </p>
            </div>
          </section>

          {/* Project Goals & Impact */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Goals</h2>
              <div className="space-y-4">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Creating balanced agricultural clusters that optimize resource usage</li>
                  <li>Implementing ecological rehabilitation techniques for degraded lands</li>
                  <li>Developing sustainable irrigation and water management systems</li>
                  <li>Promoting biodiversity and ecosystem health</li>
                  <li>Training local communities in sustainable agricultural practices</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Impact & Results</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Rehabilitated over 1,000 hectares of degraded agricultural land</li>
                <li>Established sustainable farming practices in multiple regions</li>
                <li>Improved water efficiency in agricultural operations by 40%</li>
                <li>Created new opportunities for local farming communities</li>
                <li>Developed innovative methods for land restoration</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}