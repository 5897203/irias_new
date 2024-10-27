import { Lightbulb, GitBranch, Building2, Globe2, Leaf, Coins, BarChart3, Trees, GraduationCap, Heart } from 'lucide-react';

const centers = [
  {
    icon: Lightbulb,
    name: 'Center for the Introduction of Advanced Technologies',
    description: 'Leading the implementation of cutting-edge technological solutions across various sectors.',
  },
  {
    icon: GitBranch,
    name: 'International Center for Project Management',
    description: 'Coordinating and managing complex international projects with multiple stakeholders.',
  },
  {
    icon: Building2,
    name: 'Center for the Management of Large Socio-Economic Systems',
    description: 'Developing strategies and solutions for complex socio-economic challenges.',
  },
  {
    icon: Globe2,
    name: 'International Center for Strategic Partnership',
    description: 'Fostering international collaboration and strategic alliances between organizations.',
  },
  {
    icon: Leaf,
    name: 'Center on Sustainable Development Projects',
    description: 'Promoting and implementing sustainable development initiatives worldwide.',
  },
  {
    icon: Coins,
    name: 'Center for Problem of Asset Management',
    description: 'Providing expertise in effective asset management and optimization.',
  },
  {
    icon: BarChart3,
    name: 'Center of Foreign Exchange Control Problems of the Markets',
    description: 'Analyzing and addressing challenges in international market operations.',
  },
  {
    icon: Trees,
    name: 'Center for Ecological and Technological Problems',
    description: 'Researching and developing solutions for environmental challenges.',
  },
  {
    icon: GraduationCap,
    name: 'Center of International Educational Projects and Innovative Youth Programs',
    description: 'Developing educational initiatives and fostering youth innovation.',
  },
  {
    icon: Heart,
    name: 'Center for Health and Longevity Management',
    description: 'Advancing research and solutions in healthcare and longevity.',
  },
];

export default function Centers() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#1e3a8a] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research Centers</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Our network of specialized centers forms the backbone of IRIAS's international research system
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {centers.map((center, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <center.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {center.name}
                  </h3>
                  <p className="text-gray-600">
                    {center.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            International Research Network
          </h2>
          <p className="text-gray-700 leading-relaxed">
            These centers play a crucial role in IRIAS's international system, each focusing on specific 
            areas of expertise while maintaining strong interconnections. Through this network, we facilitate 
            global collaboration, knowledge exchange, and the development of innovative solutions to complex 
            challenges. Our centers are staffed by leading experts and maintain active partnerships with 
            research institutions, industries, and organizations worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}