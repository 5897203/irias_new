import React from 'react';
import { Wind, Trees, Shield, Leaf } from 'lucide-react';
import { SEOHelmet } from '../components/SEOHelmet';

const features = [
  {
    icon: Wind,
    title: 'Wind Protection',
    description: 'Strategic placement of trees and shrubs to reduce wind speed and protect agricultural lands.',
  },
  {
    icon: Trees,
    title: 'Biodiversity Enhancement',
    description: 'Integration of various plant species to create diverse ecological corridors.',
  },
  {
    icon: Shield,
    title: 'Soil Conservation',
    description: 'Prevention of soil erosion and improvement of microclimate conditions.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Design',
    description: 'Long-term environmental protection through natural barrier systems.',
  },
];

const projectImages = [
  {
    url: 'https://i.imgur.com/t1IPaZn.jpeg',
    caption: 'Windbreak Implementation',
    description: 'Strategic placement of trees creating effective wind protection zones',
  },
  {
    url: 'https://i.imgur.com/btDJn8e.jpeg',
    caption: 'Apion Species Selection',
    description: 'Careful selection and cultivation of appropriate tree species',
  },
  {
    url: 'https://i.imgur.com/ICxH5gJ.jpeg',
    caption: 'Growth Progress',
    description: 'Monitoring and documentation of windbreak development stages',
  },
  {
    url: 'https://i.imgur.com/A3xXp67.jpeg',
    caption: 'Established Windbreaks',
    description: 'Mature windbreak system providing effective protection',
  },
];

export default function WindbreaksProject() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHelmet 
        title="Creating Windbreaks with Apions - IRIAS"
        description="Implementation of innovative windbreak systems using Apion species for agricultural protection and environmental sustainability"
      />

      {/* Hero Section */}
      <div className="relative bg-green-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-800 mix-blend-multiply" />
          <img
            src="https://i.imgur.com/t1IPaZn.jpeg"
            alt="Windbreak System"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Creating Windbreaks with Apions</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Innovative approach to agricultural protection through strategic windbreak implementation
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
                The Windbreaks with Apions project focuses on creating effective natural barriers 
                against wind erosion while promoting biodiversity and sustainable agriculture. 
                Through careful selection and strategic placement of Apion species, we establish 
                robust windbreak systems that protect agricultural lands and enhance local ecosystems.
              </p>
              <img
                src="https://i.imgur.com/btDJn8e.jpeg"
                alt="Apion Species"
                className="rounded-lg shadow-md"
              />
            </div>
          </section>

          {/* Key Features */}
          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-green-600" />
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

          {/* Implementation Process */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Implementation Process</h2>
            <div className="grid md:grid-cols-2 gap-8">
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

          {/* Technical Details */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Strategic placement based on wind pattern analysis</li>
                <li>Multi-row design for maximum protection</li>
                <li>Integration of various Apion species for resilience</li>
                <li>Optimal spacing for proper growth and effectiveness</li>
                <li>Sustainable irrigation systems implementation</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits & Impact</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Reduction in wind erosion by up to 80%</li>
                <li>Enhanced crop yields in protected areas</li>
                <li>Improved soil moisture retention</li>
                <li>Creation of wildlife corridors</li>
                <li>Long-term environmental sustainability</li>
              </ul>
            </div>
          </section>

          {/* Monitoring & Maintenance */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Monitoring & Maintenance</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Regular Assessment</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Quarterly growth monitoring</li>
                  <li>Soil quality assessment</li>
                  <li>Wind reduction effectiveness measurement</li>
                  <li>Biodiversity impact studies</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Maintenance Protocol</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Regular pruning and shaping</li>
                  <li>Irrigation system maintenance</li>
                  <li>Pest and disease management</li>
                  <li>Gap filling and reinforcement</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}