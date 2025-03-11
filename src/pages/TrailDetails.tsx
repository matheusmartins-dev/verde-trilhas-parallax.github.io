
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoPlayer from '@/components/VideoPlayer';
import { MapPin, Timer, ArrowLeft, ThermometerSun, Cloud, Droplets, Award, Map, Camera, Shield } from 'lucide-react';

const trailsData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1544084944-15c0696583cd?q=80&w=1974&auto=format&fit=crop',
    title: 'Trilha da Pedra do Telégrafo',
    location: 'Rio de Janeiro, RJ',
    difficulty: 'Moderada',
    duration: '3-4 horas',
    description: 'Famosa pelas fotos de ilusão de ótica à beira do penhasco, esta trilha oferece vistas deslumbrantes da costa do Rio de Janeiro. A Pedra do Telégrafo é um dos pontos turísticos mais procurados por quem gosta de tirar fotos radicais com a vista da praia de Grumari ao fundo. Embora a foto pareça mostrar uma pessoa pendurada em um penhasco, na verdade existe uma pequena plataforma logo abaixo, tornando-a segura.',
    elevation: '354 metros',
    bestSeason: 'Outono e Inverno (Abril a Setembro)',
    weather: 'Temperaturas médias entre 18°C e 28°C',
    waterNeeded: '2 litros por pessoa',
    attractions: [
      'Vista panorâmica para as praias selvagens', 
      'Fotos na famosa "pedra pendurada"', 
      'Vegetação de Mata Atlântica',
      'Observação de pássaros'
    ],
    tips: [
      'Chegue cedo para evitar filas para fotos',
      'Use protetor solar e boné',
      'Leve um lanche leve e água',
      'Use tênis com bom grip'
    ],
    videoSrc: 'https://player.vimeo.com/external/517090025.hd.mp4?s=89d7b736b59c9a913c2a1d81d96aea843c798a9a&profile_id=175&oauth2_token_id=57447761',
    posterSrc: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1527611431516-d3ef9a2ea48a?q=80&w=1965&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615460083562-eef32e67b855?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520715992802-d131b25df5d3?q=80&w=1950&auto=format&fit=crop'
    ]
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1536244753933-affb402aef31?q=80&w=1974&auto=format&fit=crop',
    title: 'Chapada Diamantina',
    location: 'Bahia, BA',
    difficulty: 'Difícil',
    duration: '2-3 dias',
    description: 'A Chapada Diamantina é um dos destinos mais incríveis do Brasil, com cachoeiras, cavernas, montanhas e paisagens de tirar o fôlego. O Parque Nacional da Chapada Diamantina abriga formações geológicas únicas, rios de águas cristalinas, grutas profundas e uma biodiversidade impressionante. As trilhas mais procuradas incluem o Vale do Pati, considerado o "Grand Canyon brasileiro", e o Morro do Pai Inácio, com vista panorâmica de 360 graus.',
    elevation: 'Varia de 400 a 1.700 metros',
    bestSeason: 'Seca (Maio a Outubro)',
    weather: 'Temperaturas médias entre 15°C e 28°C',
    waterNeeded: '3 litros por pessoa/dia',
    attractions: [
      'Cachoeira da Fumaça', 
      'Poço Azul e Poço Encantado', 
      'Vale do Pati',
      'Morro do Pai Inácio',
      'Grutas e cavernas'
    ],
    tips: [
      'Contrate um guia local credenciado',
      'Prepare-se para longas caminhadas',
      'Leve roupas de banho para as cachoeiras',
      'Reservas são necessárias para algumas atrações'
    ],
    videoSrc: 'https://player.vimeo.com/external/531812777.hd.mp4?s=ba57683f6b5e8c681f3d750ce9b4a97b2ce9d05b&profile_id=175&oauth2_token_id=57447761',
    posterSrc: 'https://images.unsplash.com/photo-1635126568156-7adc5cde5d66?q=80&w=2069&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1635126568156-7adc5cde5d66?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1537551080512-fb7dd14fbf90?q=80&w=2070&auto=format&fit=crop', 
      'https://images.unsplash.com/photo-1508035460735-d439ddf21be9?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1635397273876-5623a60f6d2a?q=80&w=1974&auto=format&fit=crop'
    ]
  },
  // ... outros trails podem ser adicionados com o mesmo formato
];

// Estendendo para outros trails com informações básicas
for (let i = 3; i <= 6; i++) {
  const baseTrail = trailsData.find(t => t.id === (i <= 2 ? i : 1)) || trailsData[0];
  
  if (i > 2) {
    trailsData.push({
      ...baseTrail,
      id: i,
      title: `Trilha ${i}`,
      location: 'Brasil',
      description: 'Descrição detalhada da trilha será adicionada em breve.',
      gallery: baseTrail.gallery.slice(0, 2),
    });
  }
}

const TrailDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [trail, setTrail] = useState<any>(null);
  const [activeImage, setActiveImage] = useState<string>('');
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const trailId = parseInt(id || '1');
    const foundTrail = trailsData.find(t => t.id === trailId);
    
    if (foundTrail) {
      setTrail(foundTrail);
      setActiveImage(foundTrail.image);
    }
  }, [id]);
  
  if (!trail) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-forest-50">
        <div className="w-16 h-16 border-4 border-forest-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-forest-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh]">
        <div className="absolute inset-0">
          <img 
            src={activeImage} 
            alt={trail.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        </div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-end pb-16">
          <Link to="/" className="absolute top-8 left-6 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
            <ArrowLeft size={24} className="text-white" />
          </Link>
          
          <div className="max-w-4xl">
            <span className="bg-forest-500 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-3">
              {trail.difficulty}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{trail.title}</h1>
            
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span>{trail.location}</span>
              </div>
              
              <div className="flex items-center">
                <Timer size={20} className="mr-2" />
                <span>{trail.duration}</span>
              </div>
              
              <div className="flex items-center">
                <Award size={20} className="mr-2" />
                <span>{trail.difficulty}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md mb-8">
              <h2 className="text-2xl font-bold text-forest-800 mb-4">Sobre a Trilha</h2>
              <p className="text-forest-700 whitespace-pre-line mb-8">
                {trail.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <Map className="text-forest-600" size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-forest-800 mb-1">Elevação</h3>
                    <p className="text-forest-600">{trail.elevation}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <ThermometerSun className="text-forest-600" size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-forest-800 mb-1">Melhor Época</h3>
                    <p className="text-forest-600">{trail.bestSeason}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <Cloud className="text-forest-600" size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-forest-800 mb-1">Clima</h3>
                    <p className="text-forest-600">{trail.weather}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <Droplets className="text-forest-600" size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-forest-800 mb-1">Água Necessária</h3>
                    <p className="text-forest-600">{trail.waterNeeded}</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-forest-800 mb-4">Atrações Principais</h3>
              <ul className="list-disc pl-5 space-y-2 mb-8">
                {trail.attractions?.map((item: string, index: number) => (
                  <li key={index} className="text-forest-700">{item}</li>
                ))}
              </ul>
              
              <h3 className="text-xl font-bold text-forest-800 mb-4">Dicas para a Trilha</h3>
              <ul className="list-disc pl-5 space-y-2">
                {trail.tips?.map((item: string, index: number) => (
                  <li key={index} className="text-forest-700">{item}</li>
                ))}
              </ul>
            </div>
            
            {/* Gallery Section */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md mb-8">
              <div className="flex items-center mb-6">
                <Camera size={24} className="text-forest-600 mr-3" />
                <h2 className="text-2xl font-bold text-forest-800">Galeria de Fotos</h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {trail.gallery?.map((image: string, index: number) => (
                  <div 
                    key={index} 
                    className={`relative rounded-lg overflow-hidden cursor-pointer ${activeImage === image ? 'ring-2 ring-forest-500' : ''}`}
                    onClick={() => setActiveImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`${trail.title} - Imagem ${index + 1}`}
                      className="w-full h-24 object-cover" 
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Video Section */}
            {trail.videoSrc && (
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
                <h2 className="text-2xl font-bold text-forest-800 mb-6">Vídeo da Trilha</h2>
                <VideoPlayer 
                  videoSrc={trail.videoSrc}
                  posterSrc={trail.posterSrc}
                  title={trail.title}
                />
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md mb-8 sticky top-8">
              <div className="flex items-center mb-6">
                <Shield size={24} className="text-forest-600 mr-3" />
                <h2 className="text-xl font-bold text-forest-800">Precauções de Segurança</h2>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-forest-700 font-medium">1</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-forest-700">Informe alguém sobre seus planos de trilha, incluindo rota e horário esperado de retorno.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-forest-700 font-medium">2</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-forest-700">Verifique a previsão do tempo antes de partir e esteja preparado para mudanças climáticas.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-forest-700 font-medium">3</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-forest-700">Leve kit de primeiros socorros, lanterna, mapa, bússola e comida extra.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-forest-700 font-medium">4</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-forest-700">Mantenha-se na trilha marcada e respeite as sinalizações de segurança.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-forest-700 font-medium">5</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-forest-700">Conheça seus limites e não hesite em voltar se as condições forem desfavoráveis.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <button className="w-full py-3 bg-forest-500 text-white rounded-lg font-medium transition-colors hover:bg-forest-600 mb-4">
                  Reservar Guia
                </button>
                
                <button className="w-full py-3 bg-white text-forest-700 rounded-lg font-medium transition-colors hover:bg-forest-50 border border-forest-200">
                  Baixar Mapa da Trilha
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TrailDetails;
