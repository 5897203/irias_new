import { useState } from 'react';
import { TopBar } from './components/layout/TopBar';
import { MainNav } from './components/layout/MainNav';
import { Hero } from './components/home/Hero';
import { NewsSection } from './components/home/NewsSection';
import { Footer } from './components/layout/Footer';
import AboutIRIAS from './pages/AboutIRIAS';
import Centers from './pages/Centers';
import History from './pages/History';
import Projects from './pages/Projects';
import EcologicalAgriculture from './pages/EcologicalAgriculture';
import IOMFProject from './pages/IOMFProject';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about-irias':
        return <AboutIRIAS />;
      case 'centers':
        return <Centers />;
      case 'history-creation':
        return <History />;
      case 'projects':
        return <Projects onNavigate={setCurrentPage} />;
      case 'ecological-agriculture':
        return <EcologicalAgriculture />;
      case 'iomf-project':
        return <IOMFProject />;
      default:
        return (
          <>
            <Hero />
            <NewsSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <MainNav 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        onNavigate={setCurrentPage}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;