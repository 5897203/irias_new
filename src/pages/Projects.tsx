import { Globe2, Lightbulb, Building2, Rocket, BarChart3, Leaf, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

const majorProjects = [
  {
    icon: Globe2,
    title: 'Economic Transition',
    description: 'Project "Transition from a centralized to a market economy"',
    period: '1990s',
  },
  {
    icon: Lightbulb,
    title: 'Information Technologies',
    description: 'Project "New Information Technologies in Management"',
    period: '1990s-2000s',
  },
  {
    icon: Building2,
    title: 'Development Strategies',
    description: 'Project "Technology - Economy - Society: Alternative Development Strategies"',
    period: '2000s',
  },
  {
    icon: Rocket,
    title: 'OASIS Project',
    description: 'Development of pan-European crisis management system prototype',
    period: '2000s',
  },
  {
    icon: BarChart3,
    title: 'Socio-Economic Systems',
    description: 'Research on managing large socio-economic systems and market monitoring',
    period: '2000s-Present',
  },
  {
    icon: Leaf,
    title: 'Ecological Agriculture',
    description: 'Development of balanced agricultural clusters and ecological rehabilitation of degraded territories',
    period: '2020-Present',
    featured: true,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
        caption: 'Agricultural Innovation',
      },
      {
        url: 'https://images.unsplash.com/photo-1592982537447-6f2a6e0a3023?w=800&q=80',
        caption: 'Sustainable Farming',
      },
    ],
  },
];

interface ProjectsProps {
  onNavigate?: (page: string) => void;
}

export default function Projects({ onNavigate }: ProjectsProps) {
  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#1e3a8a] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Major Projects</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Pioneering research and development initiatives across multiple domains
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-8">
          {majorProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex lg:w-1/3 gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <project.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                    <p className="text-sm text-blue-600 mb-2">{project.period}</p>
                    <p className="text-gray-600">{project.description}</p>
                    {project.featured && (
                      <Button
                        variant="outline"
                        className="mt-4"
                        onClick={() => handleNavigate('ecological-agriculture')}
                      >
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
                {project.images && (
                  <div className="lg:w-2/3 grid grid-cols-2 gap-4">
                    {project.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="relative rounded-lg overflow-hidden">
                        <img
                          src={image.url}
                          alt={image.caption}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                          {image.caption}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Project Impact Section */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Project Impact
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our projects have contributed significantly to various fields, from economic transformation 
            to technological innovation. Through these initiatives, we've fostered international 
            collaboration, developed cutting-edge solutions, and created lasting impact across multiple 
            sectors. Each project represents our commitment to advancing knowledge and creating 
            practical solutions for complex challenges.
          </p>
        </div>
      </div>
    </div>
  );
}