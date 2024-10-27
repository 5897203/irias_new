import { Button } from "../ui/button";

const footerSections = {
  about: {
    title: 'About IRIAS',
    content: 'Leading research institution dedicated to advancing knowledge in complex systems and technological innovation.',
  },
  quickLinks: {
    title: 'Quick Links',
    links: [
      { title: 'Publications', href: '/publications' },
      { title: 'Events', href: '/events' },
      { title: 'News', href: '/news' },
      { title: 'Contacts', href: '/contacts' },
    ],
  },
  contact: {
    title: 'Contact',
    items: [
      '123 Research Avenue',
      'Advanced City, AC 12345',
      'Phone: +1 234 567 890',
      'Email: info@irias.org',
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">{footerSections.about.title}</h3>
            <p className="text-sm">{footerSections.about.content}</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">{footerSections.quickLinks.title}</h3>
            <ul className="space-y-2 text-sm">
              {footerSections.quickLinks.links.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">{footerSections.contact.title}</h3>
            <ul className="space-y-2 text-sm">
              {footerSections.contact.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for updates</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded bg-gray-800 text-white text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          © {new Date().getFullYear()} International Research Institute for Advanced Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}