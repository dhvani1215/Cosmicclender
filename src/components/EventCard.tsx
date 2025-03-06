import { useState } from 'react';
import { AstronomyEvent } from '../lib/types';
import { formatDate } from '../lib/data';
import { MeteorIcon, EclipseIcon, PlanetIcon, Moon, AsteroidIcon, ISSIcon, MapPin, Clock, ChevronRight, Rocket, Satellite } from './icons';
import { Star } from 'lucide-react';

interface EventCardProps {
  event: AstronomyEvent;
  onSelect: (id: string) => void;
}

const EventCard = ({ event, onSelect }: EventCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getEventIcon = () => {
    switch (event.type) {
      case 'meteor':
        return <MeteorIcon className="h-5 w-5 text-celestial-meteor" />;
      case 'eclipse':
        return <EclipseIcon className="h-5 w-5 text-celestial-pink" />;
      case 'planet':
        return <PlanetIcon className="h-5 w-5 text-celestial-blue" />;
      case 'moon':
        return <Moon className="h-5 w-5 text-celestial-purple" />;
      case 'asteroid':
        return <AsteroidIcon className="h-5 w-5 text-yellow-500" />;
      case 'iss':
        return <Satellite className="h-5 w-5 text-blue-400" />;
      case 'spacewalk':
        return <Rocket className="h-5 w-5 text-green-400" />;
      default:
        return <Star className="h-5 w-5 text-amber-400" />;
    }
  };
  
  const getEventTypeClass = () => {
    switch (event.type) {
      case 'meteor':
        return 'event-badge-meteor';
      case 'eclipse':
        return 'event-badge-eclipse';
      case 'planet':
        return 'event-badge-planet';
      case 'moon':
        return 'event-badge-moon';
      case 'asteroid':
        return 'bg-yellow-500/20 text-yellow-500';
      case 'iss':
        return 'bg-blue-500/20 text-blue-400';
      case 'spacewalk':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-amber-500/20 text-amber-400';
    }
  };

  return (
    <div 
      className="event-card glass-card rounded-xl p-5 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(event.id)}
    >
      <div className="mb-4 flex justify-between items-start">
        <span className={`event-type-tag ${getEventTypeClass()}`}>
          <span className="mr-1">{getEventIcon()}</span>
          <span className="capitalize">{event.type}</span>
        </span>
        <div className="text-right">
          <div className="text-xs text-space-400">{formatDate(event.date)}</div>
          {event.peakTime && (
            <div className="text-xs text-space-300 flex items-center justify-end mt-1">
              <Clock className="inline-block h-3 w-3 mr-1" />
              Peak: {new Date(event.peakTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          )}
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mb-2 group-hover:text-celestial-blue transition-colors">
        {event.title}
      </h3>
      
      <p className="text-sm text-space-300 mb-4 line-clamp-2">
        {event.description}
      </p>
      
      {event.location && (
        <div className="flex items-center text-xs text-space-400 mb-4">
          <MapPin className="h-3 w-3 mr-1" />
          <span>Visible from: {event.location}</span>
        </div>
      )}
      
      <div className="mt-auto flex justify-between items-center">
        <div className="flex space-x-1">
          {Array.from({ length: Math.min(event.intensity || 5, 5) }).map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 w-6 rounded-full ${
                event.type === 'meteor' ? 'bg-celestial-meteor/60' : 
                event.type === 'eclipse' ? 'bg-celestial-pink/60' :
                event.type === 'planet' ? 'bg-celestial-blue/60' : 
                event.type === 'moon' ? 'bg-celestial-purple/60' :
                event.type === 'asteroid' ? 'bg-yellow-500/60' :
                event.type === 'iss' ? 'bg-blue-400/60' :
                event.type === 'spacewalk' ? 'bg-green-400/60' :
                'bg-amber-400/60'
              }`}
            />
          ))}
        </div>
        
        <button 
          className={`flex items-center text-sm font-medium transition-all duration-300 ${
            isHovered 
              ? 'text-white translate-x-1' 
              : 'text-space-300'
          }`}
        >
          Details
          <ChevronRight className={`h-4 w-4 ml-1 transition-transform duration-300 ${
            isHovered ? 'translate-x-1' : ''
          }`} />
        </button>
      </div>
    </div>
  );
};

export default EventCard;
