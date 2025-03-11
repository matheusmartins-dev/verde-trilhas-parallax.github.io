
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-full bg-forest-500 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3v3a2 2 0 0 1-2 2H3" />
              <path d="M21 8V5a2 2 0 0 0-2-2h-5" />
              <path d="M3 16v3a2 2 0 0 0 2 2h5" />
              <path d="M16 21h5a2 2 0 0 0 2-2v-3" />
              <path d="M7 12v-2l4-4 4 4v2" />
            </svg>
          </span>
          <span className="text-xl font-bold text-forest-800">VerdeTrials</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#sobre" className="text-forest-800 hover:text-forest-600 font-medium transition-colors">Sobre</a>
          <a href="#trilhas" className="text-forest-800 hover:text-forest-600 font-medium transition-colors">Trilhas</a>
          <a href="#videos" className="text-forest-800 hover:text-forest-600 font-medium transition-colors">Vídeos</a>
          <a href="#contato" className="text-forest-800 hover:text-forest-600 font-medium transition-colors">Contato</a>
        </div>

        <button className="hidden md:block btn-primary">Explorar Trilhas</button>

        <button 
          className="md:hidden text-forest-800" 
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-white glass shadow-lg transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0 overflow-hidden'}`}>
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          <a href="#sobre" className="text-forest-800 hover:text-forest-600 font-medium py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Sobre</a>
          <a href="#trilhas" className="text-forest-800 hover:text-forest-600 font-medium py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Trilhas</a>
          <a href="#videos" className="text-forest-800 hover:text-forest-600 font-medium py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Vídeos</a>
          <a href="#contato" className="text-forest-800 hover:text-forest-600 font-medium py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contato</a>
          <button className="btn-primary self-start">Explorar Trilhas</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
