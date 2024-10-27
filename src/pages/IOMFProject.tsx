import { Leaf, Sprout, Beaker, LineChart } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Soil Enhancement',
    description: 'Advanced organic-mineral fertilizers improve soil structure and fertility',
  },
  {
    icon: Sprout,
    title: 'Sustainable Growth',
    description: 'Promotes healthy plant development and increased crop yields',
  },
  {
    icon: Beaker,
    title: 'APION Technology',
    description: 'Innovative fertilizer production and application methods',
  },
  {
    icon: LineChart,
    title: 'Proven Results',
    description: 'Demonstrated improvements in agricultural productivity',
  },
];

const projectImages = [
  {
    url: '/fertilizer-production.jpg',
    caption: 'Fertilizer Production',
    description: 'Team working on organic fertilizer preparation',
  },
  {
    url: '/planting-containers.jpg',
    caption: 'Planting Containers',
    description: 'Eco-friendly biodegradable planting containers',
  },
  {
    url: '/seedling-growth.jpg',
    caption: 'Seedling Growth',
    description: 'Healthy seedling development in IOMF-enriched soil',
  },
  {
    url: '/greenhouse-cultivation.jpg',
    caption: 'Greenhouse Cultivation',
    description: 'Advanced greenhouse cultivation techniques',
  },
];

export default function IOMFProject() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#1e3a8a] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Beaker className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">IOMF & APION Technology</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Advanced fertilizer technology for sustainable agriculture
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-12">
          {/* Overview */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 leading-relaxed">
                  The Integrated Organic-Mineral Fertilizers (IOMF) project combines innovative fertilizer 
                  technology with sustainable agricultural practices. The APION technology represents a 
                  breakthrough in fertilizer production and application methods, offering improved efficiency 
                  and environmental benefits.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="/fertilizer-production.jpg"
                  alt="IOMF Production Process"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Implementation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projectImages.map((image, index) => (
                <div key={index} className="space-y-4">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                      <h3 className="text-white font-semibold mb-1">{image.caption}</h3>
                      <p className="text-white text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Details */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Implementation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">IOMF Production</h3>
                <p className="text-gray-700 mb-4">
                  The production process involves careful integration of organic materials with mineral 
                  components, creating a balanced fertilizer that provides both immediate and long-term 
                  benefits to soil and crops.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Advanced mixing technology</li>
                  <li>Quality control processes</li>
                  <li>Sustainable material sourcing</li>
                  <li>Environmental impact monitoring</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">APION Technology</h3>
                <p className="text-gray-700 mb-4">
                  APION technology optimizes the application and absorption of nutrients, ensuring 
                  maximum efficiency and minimal environmental impact.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Precision application methods</li>
                  <li>Smart nutrient release</li>
                  <li>Soil chemistry optimization</li>
                  <li>Reduced environmental footprint</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Results and Impact */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Results</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Agricultural Benefits</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>30% increase in crop yields</li>
                  <li>Improved soil structure and fertility</li>
                  <li>Enhanced nutrient retention</li>
                  <li>Better water efficiency</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Environmental Impact</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Reduced chemical runoff</li>
                  <li>Lower greenhouse gas emissions</li>
                  <li>Sustainable resource utilization</li>
                  <li>Biodiversity preservation</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}