
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrailCard from '@/components/TrailCard';
import VideoPlayer from '@/components/VideoPlayer';
import Footer from '@/components/Footer';
import { ChevronRight, ArrowRight, Leaf, Mountain, Shield } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger the check on initial load
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const trails = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1544084944-15c0696583cd?q=80&w=1974&auto=format&fit=crop',
      title: 'Trilha da Pedra do Telégrafo',
      location: 'Rio de Janeiro, RJ',
      difficulty: 'Moderada',
      duration: '3-4 horas',
      description: 'Famosa pelas fotos de ilusão de ótica à beira do penhasco, esta trilha oferece vistas deslumbrantes da costa do Rio de Janeiro.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1536244753933-affb402aef31?q=80&w=1974&auto=format&fit=crop',
      title: 'Chapada Diamantina',
      location: 'Bahia, BA',
      difficulty: 'Difícil',
      duration: '2-3 dias',
      description: 'Um dos destinos mais incríveis do Brasil, com cachoeiras, cavernas, montanhas e paisagens de tirar o fôlego.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1622651723839-35c2e10f87c4?q=80&w=1887&auto=format&fit=crop',
      title: 'Trilha das Prainhas',
      location: 'Arraial do Cabo, RJ',
      difficulty: 'Fácil',
      duration: '1-2 horas',
      description: 'Trilha curta que leva a praias paradisíacas de águas cristalinas. Perfeita para iniciantes e famílias.'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1629227071576-1c474e4c3ad5?q=80&w=1974&auto=format&fit=crop',
      title: 'Trilha do Pico da Neblina',
      location: 'Amazonas, AM',
      difficulty: 'Extrema',
      duration: '5-7 dias',
      description: 'A trilha para o ponto mais alto do Brasil exige preparo físico e mental. Uma aventura inesquecível na Amazônia.'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1534247555660-d4b8e9c4bd34?q=80&w=1940&auto=format&fit=crop',
      title: 'Trilha da Janela do Céu',
      location: 'Minas Gerais, MG',
      difficulty: 'Moderada',
      duration: '6-8 horas',
      description: 'Localizada no Parque Estadual do Ibitipoca, esta trilha leva a uma piscina natural de onde se tem uma vista incrível do céu.'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=2067&auto=format&fit=crop',
      title: 'Trilha das 7 Praias',
      location: 'Santa Catarina, SC',
      difficulty: 'Moderada',
      duration: '4-5 horas',
      description: 'Um percurso que passa por sete praias paradisíacas, cada uma com sua beleza única. Uma das melhores trilhas do litoral brasileiro.'
    }
  ];

  return (
    <div className="min-h-screen bg-forest-50">
      <Navbar />
      <Hero />
      
      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <span className="bg-forest-100 text-forest-700 px-4 py-1 rounded-full text-sm font-medium">Sobre Nós</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-forest-900">Descubra a Natureza Brasileira</h2>
            <p className="text-lg text-forest-700 mb-10">
              Somos apaixonados por trilhas e comprometidos em mostrar as belezas naturais do Brasil. 
              Nossa missão é conectar amantes da natureza com as melhores experiências ao ar livre, 
              promovendo o turismo sustentável e a preservação ambiental.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-forest-100 animate-on-scroll">
              <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="text-forest-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-forest-800 mb-3">Sustentabilidade</h3>
              <p className="text-forest-700">
                Promovemos práticas de turismo sustentável, respeitando a natureza e as comunidades locais.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-forest-100 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center mb-4">
                <Mountain className="text-forest-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-forest-800 mb-3">Aventura</h3>
              <p className="text-forest-700">
                Conectamos aventureiros com experiências únicas em meio à natureza brasileira.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-forest-100 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-forest-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-forest-800 mb-3">Segurança</h3>
              <p className="text-forest-700">
                Fornecemos informações detalhadas para garantir trilhas seguras e bem preparadas.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trails Section */}
      <section id="trilhas" className="py-20 bg-forest-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <span className="bg-forest-200 text-forest-700 px-4 py-1 rounded-full text-sm font-medium">Trilhas Incríveis</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-forest-900">As Melhores Trilhas do Brasil</h2>
            <p className="text-lg text-forest-700">
              Selecionamos as trilhas mais deslumbrantes de todas as regiões do Brasil, 
              desde caminhadas leves até expedições desafiadoras.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trails.map((trail, index) => (
              <div key={trail.id} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <TrailCard 
                  image={trail.image}
                  title={trail.title}
                  location={trail.location}
                  difficulty={trail.difficulty}
                  duration={trail.duration}
                  description={trail.description}
                  index={index}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center text-forest-700 font-medium hover:text-forest-500 transition-colors">
              Ver todas as trilhas <ChevronRight size={18} className="ml-1" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Parallax Section */}
      <section className="parallax h-[60vh] relative flex items-center">
        <div 
          className="parallax-bg"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1565118531796-763e5082d113?q=80&w=2070&auto=format&fit=crop")',
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-md">
              Sinta a Liberdade da Natureza
            </h2>
            <p className="text-xl text-white/90 mb-8 drop-shadow-md">
              Conecte-se com a natureza e descubra lugares incríveis pelo Brasil
            </p>
            <button className="btn-primary">
              Comece Sua Aventura
            </button>
          </div>
        </div>
      </section>
      
      {/* Video Section */}
      <section id="videos" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <span className="bg-forest-100 text-forest-700 px-4 py-1 rounded-full text-sm font-medium">Vídeos</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-forest-900">Trilhas em Movimento</h2>
            <p className="text-lg text-forest-700">
              Assista a vídeos incríveis das melhores trilhas e aventuras pelo Brasil.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-on-scroll">
              <VideoPlayer 
                videoSrc="https://player.vimeo.com/external/517090025.hd.mp4?s=89d7b736b59c9a913c2a1d81d96aea843c798a9a&profile_id=175&oauth2_token_id=57447761"
                posterSrc="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop"
                title="Trilha da Pedra do Telégrafo - Rio de Janeiro"
              />
            </div>
            
            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <VideoPlayer 
                videoSrc="https://player.vimeo.com/external/531812777.hd.mp4?s=ba57683f6b5e8c681f3d750ce9b4a97b2ce9d05b&profile_id=175&oauth2_token_id=57447761"
                posterSrc="https://images.unsplash.com/photo-1635126568156-7adc5cde5d66?q=80&w=2069&auto=format&fit=crop"
                title="Chapada Diamantina - Bahia"
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center text-forest-700 font-medium hover:text-forest-500 transition-colors">
              Ver mais vídeos <ChevronRight size={18} className="ml-1" />
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="contato" className="py-20 bg-forest-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-forest-100 rounded-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-forest-100 rounded-full opacity-50"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <span className="bg-forest-100 text-forest-700 px-4 py-1 rounded-full text-sm font-medium">Junte-se a nós</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-forest-900">Receba Dicas de Trilhas</h2>
                <p className="text-lg text-forest-700 max-w-2xl mx-auto">
                  Inscreva-se para receber as melhores dicas de trilhas, guias e ofertas especiais.
                </p>
              </div>
              
              <div className="max-w-lg mx-auto">
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Seu nome" 
                      className="w-full px-4 py-3 border border-forest-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Seu e-mail" 
                      className="w-full px-4 py-3 border border-forest-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    />
                  </div>
                  <button type="submit" className="w-full btn-primary flex items-center justify-center group">
                    Inscrever-se 
                    <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <p className="text-sm text-forest-500 text-center">
                    Prometemos não enviar spam. Você pode cancelar a qualquer momento.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
