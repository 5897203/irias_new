import { Button } from "../ui/button";

const newsItems = [
  {
    date: 'March 15, 2024',
    title: 'Breakthrough in Quantum Computing Research',
    description: 'Our team has achieved a significant milestone in quantum computing algorithms...',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop',
  },
  {
    date: 'March 10, 2024',
    title: 'New International Collaboration Announced',
    description: 'IRIAS partners with leading institutions to advance AI research...',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop',
  },
  {
    date: 'March 5, 2024',
    title: 'Advanced Systems Symposium 2024',
    description: 'Join us for our annual symposium featuring renowned speakers...',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&h=300&fit=crop',
  },
];

export function NewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest News</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button variant="outline">Read More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}