import { Menu, Search } from 'lucide-react';
import { Button } from "../ui/button";

const navItems = [
  { title: 'HOME', href: 'home' },
  {
    title: 'INSTITUTE',
    items: [
      { title: 'About IRIAS', href: 'about-irias' },
      { title: 'Council members', href: 'council-members' },
      { title: 'Structure and management', href: 'structure-management' },
      { title: 'Centers', href: 'centers' },
      { title: 'Partners', href: 'partners' },
      { title: 'International cooperation', href: 'international-cooperation' },
    ],
  },
  {
    title: 'HISTORY',
    items: [
      { title: 'History of creation', href: 'history-creation' },
      { title: 'Management history', href: 'management-history' },
    ],
  },
  {
    title: 'PROJECTS',
    items: [
      { title: 'All Projects', href: 'projects' },
      { title: 'Ecological Agriculture', href: 'ecological-agriculture' },
      { title: 'IOMF & APION Technology', href: 'iomf-project' },
    ],
  },
  { title: 'PUBLICATIONS', href: 'publications' },
  { title: 'EVENTS', href: 'events' },
  { title: 'NEWS', href: 'news' },
  { title: 'CONTACTS', href: 'contacts' },
];

interface MainNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  onNavigate: (page: string) => void;
}

export function MainNav({ isMenuOpen, setIsMenuOpen, onNavigate }: MainNavProps) {
  const handleNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (href && href !== '#') {
      onNavigate(href);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" onClick={(e) => handleNavigation('home', e)}>
              <img 
                src="/irias-logo.png" 
                alt="IRIAS Logo" 
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.title} className="relative group">
                  {item.items ? (
                    <>
                      <button
                        className="inline-flex items-center h-20 text-sm font-medium text-gray-700 hover:text-blue-600"
                      >
                        {item.title}
                        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className="absolute left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-50">
                        <div className="py-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                          {item.items.map((subItem) => (
                            <a
                              key={subItem.title}
                              href="#"
                              onClick={(e) => handleNavigation(subItem.href, e)}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                            >
                              {subItem.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a
                      href="#"
                      onClick={(e) => handleNavigation(item.href, e)}
                      className="inline-flex items-center h-20 text-sm font-medium text-gray-700 hover:text-blue-600"
                    >
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <div key={item.title}>
                {item.items ? (
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-sm font-medium text-gray-900">
                      {item.title}
                    </div>
                    <div className="pl-4 space-y-1">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.title}
                          href="#"
                          onClick={(e) => handleNavigation(subItem.href, e)}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href="#"
                    onClick={(e) => handleNavigation(item.href, e)}
                    className="block px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600"
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}