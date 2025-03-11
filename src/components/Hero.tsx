
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    const contentElement = document.getElementById('sobre');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="parallax h-screen flex items-center justify-center">
      <div 
        ref={parallaxRef} 
        className="parallax-bg"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2053&auto=format&fit=crop")',
        }}
      />
      
      <div className="container px-6 relative z-10 flex flex-col items-center">
        <div className="glass px-8 py-10 rounded-2xl max-w-3xl mx-auto text-center animate-fade-in">
          <span className="bg-forest-100 text-forest-800 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
            Explore o Brasil
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-forest-900 mb-4">
            Descubra as Melhores Trilhas do Brasil
          </h1>
          <p className="text-lg md:text-xl text-forest-700 mb-8 max-w-2xl mx-auto">
            Um guia completo com as trilhas mais incríveis para você se conectar com a natureza brasileira
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Explorar Trilhas
            </button>
            <button className="px-6 py-3 bg-white/80 text-forest-800 rounded-full font-medium transition-all duration-300 hover:bg-white hover:shadow-lg">
              Assistir Vídeo
            </button>
          </div>
        </div>
        
        <button 
          onClick={scrollToContent}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white/30 hover:bg-white/50 rounded-full p-3 animate-float transition-all duration-300"
          aria-label="Veja mais"
        >
          <ChevronDown className="text-forest-800" size={24} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
