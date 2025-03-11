
import { MapPin, Mountain, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TrailCardProps {
  image: string;
  title: string;
  location: string;
  difficulty: string;
  duration: string;
  description: string;
  index: number;
  id: number;
}

const TrailCard = ({ image, title, location, difficulty, duration, description, index, id }: TrailCardProps) => {
  return (
    <div className="trail-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="relative overflow-hidden h-60">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-forest-700">
          {difficulty}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-forest-800 mb-2">{title}</h3>
        
        <div className="flex items-center text-sm text-forest-600 mb-1">
          <MapPin size={16} className="mr-1" />
          <span>{location}</span>
        </div>
        
        <div className="flex items-center text-sm text-forest-600 mb-4">
          <Timer size={16} className="mr-1" />
          <span>{duration}</span>
        </div>
        
        <p className="text-forest-700 mb-4 line-clamp-3">{description}</p>
        
        <Link 
          to={`/trilha/${id}`} 
          className="w-full py-2 bg-forest-50 text-forest-700 rounded-lg font-medium transition-colors hover:bg-forest-100 border border-forest-200 block text-center"
        >
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
};

export default TrailCard;
