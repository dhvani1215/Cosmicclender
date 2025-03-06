
import { useEffect, useRef } from 'react';
import { AstronomyEvent } from '../lib/types';
import { formatDate, formatTime } from '../lib/data';
import { X, MapPin, Clock, Info, CheckCircle2, Calendar } from './icons';
import { MeteorIcon, EclipseIcon, PlanetIcon, Moon } from './icons';

interface EventDetailsProps {
  event: AstronomyEvent;
  onClose: () => void;
}

const EventDetails = ({ event, onClose }: EventDetailsProps) => {
  const detailsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (detailsRef.current && !detailsRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);
  
  const getEventIcon = () => {
    switch (event.type) {
      case 'meteor':
        return <MeteorIcon className="h-6 w-6 text-celestial-meteor" />;
      case 'eclipse':
        return <EclipseIcon className="h-6 w-6 text-celestial-pink" />;
      case 'planet':
        return <PlanetIcon className="h-6 w-6 text-celestial-blue" />;
      case 'moon':
        return <Moon className="h-6 w-6 text-celestial-purple" />;
      default:
        return null;
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
      default:
        return '';
    }
  };

  return (
    <div className="fixed inset-0 bg-space-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div 
        ref={detailsRef}
        className="bg-space-900 border border-space-700 rounded-xl shadow-xl overflow-hidden w-full max-w-3xl max-h-[90vh] flex flex-col animate-scale-in"
      >
        <div className="p-5 border-b border-space-800 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className={`event-type-tag ${getEventTypeClass()} py-1 px-3`}>
              <span className="mr-1">{getEventIcon()}</span>
              <span className="capitalize">{event.type}</span>
            </span>
            <h2 className="text-xl font-semibold">{event.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-space-400 hover:text-white transition-colors p-2 rounded-full hover:bg-space-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">About this event</h3>
                <p className="text-space-300">
                  {event.longDescription || event.description}
                </p>
              </div>
              
              {event.tips && event.tips.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Viewing Tips</h3>
                  <ul className="space-y-2">
                    {event.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-celestial-blue mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-space-300">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div>
              <div className="glass-panel rounded-lg p-4 mb-4">
                <h3 className="text-sm font-medium mb-3 text-space-300">Event Details</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-space-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Date</p>
                      <p className="text-sm text-space-300">{formatDate(event.date)}</p>
                      {event.endDate && (
                        <p className="text-sm text-space-300">
                          to {formatDate(event.endDate)}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {event.peakTime && (
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-space-400 mr-2 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Peak Time</p>
                        <p className="text-sm text-space-300">{formatTime(event.peakTime)}</p>
                      </div>
                    </div>
                  )}
                  
                  {event.location && (
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-space-400 mr-2 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Visibility</p>
                        <p className="text-sm text-space-300">{event.location}</p>
                      </div>
                    </div>
                  )}
                  
                  {event.intensity && (
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-space-400 mr-2 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Intensity</p>
                        <div className="flex space-x-1 mt-1">
                          {Array.from({ length: 10 }).map((_, i) => (
                            <div 
                              key={i} 
                              className={`h-1.5 w-3 rounded-full ${
                                i < event.intensity! 
                                  ? event.type === 'meteor' ? 'bg-celestial-meteor' : 
                                    event.type === 'eclipse' ? 'bg-celestial-pink' :
                                    event.type === 'planet' ? 'bg-celestial-blue' : 
                                    'bg-celestial-purple'
                                  : 'bg-space-700'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="space-y-3">
                <button className="w-full px-4 py-2.5 bg-celestial-blue text-white rounded-lg font-medium hover:bg-celestial-blue/90 transition-colors">
                  Add to My Calendar
                </button>
                <button className="w-full px-4 py-2.5 bg-space-800 text-white rounded-lg font-medium hover:bg-space-700 transition-colors">
                  Set Reminder
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
