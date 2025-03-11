
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="h-8 w-8 rounded-full bg-forest-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3v3a2 2 0 0 1-2 2H3" />
                  <path d="M21 8V5a2 2 0 0 0-2-2h-5" />
                  <path d="M3 16v3a2 2 0 0 0 2 2h5" />
                  <path d="M16 21h5a2 2 0 0 0 2-2v-3" />
                  <path d="M7 12v-2l4-4 4 4v2" />
                </svg>
              </span>
              <span className="text-xl font-bold">VerdeTrials</span>
            </div>
            <p className="text-forest-100 mb-6">
              Sua plataforma de descoberta das melhores trilhas e experiências ao ar livre no Brasil.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center hover:bg-forest-700 transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center hover:bg-forest-700 transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center hover:bg-forest-700 transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Links Úteis</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-forest-100 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-forest-100 hover:text-white transition-colors">Trilhas Populares</a></li>
              <li><a href="#" className="text-forest-100 hover:text-white transition-colors">Dicas de Segurança</a></li>
              <li><a href="#" className="text-forest-100 hover:text-white transition-colors">Equipamentos</a></li>
              <li><a href="#" className="text-forest-100 hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Regiões</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-forest-100 hover:text-white transition-colors">Sul</a></li>
              <li><a href="#" className="text-forest-100 hover:text-white transition-colors">Sudeste</a></li>
              <li><a href="#" className="text-forest-100 hover:text-white transition-colors">Centro-Oeste</a></li>
              <li><a href="#" className="text-forest-100 hover:text-white transition-colors">Nordeste</a></li>
              <li><a href="#" className="text-forest-100 hover:text-white transition-colors">Norte</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0" />
                <span className="text-forest-100">Av. Brasil, 1500, São Paulo - SP, Brasil</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 flex-shrink-0" />
                <span className="text-forest-100">(11) 9999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 flex-shrink-0" />
                <span className="text-forest-100">contato@verdetrials.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-forest-800 mt-12 pt-8 text-center text-forest-400 text-sm">
          <p>&copy; 2023 VerdeTrials. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
