
import { useState, useEffect } from 'react';
import { AstronomyEvent, FilterOptions } from '../lib/types';
import { getFilteredEvents, getEventById, loadSpaceAgencyEvents } from '../lib/data';
import EventCard from './EventCard';
import EventDetails from './EventDetails';
import EventFilter from './EventFilter';
import { ChevronLeft, ChevronRight } from './icons';
import { toast } from "sonner";

const Calendar = () => {
  const [events, setEvents] = useState<AstronomyEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<AstronomyEvent | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({ type: 'all', month: 'all', year: 'all' });
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const eventsPerPage = 6;
  
  useEffect(() => {
    const loadEvents = async () => {
      setLoading(true);
      
      try {
        // Fetch fresh space agency events daily
        await loadSpaceAgencyEvents();
        
        const filteredEvents = getFilteredEvents(
          window.astronomyEvents || [],
          filters
        );
        setEvents(filteredEvents);
        setPage(0);
        
        if (filteredEvents.length === 0) {
          toast("No events found matching your filters", {
            description: "Try adjusting your filters to see more events",
            position: "top-center",
          });
        } else {
          const googleEvents = filteredEvents.filter(event => 
            event.source === 'google'
          ).length;
          
          if (googleEvents > 0) {
            toast.success(`Found ${googleEvents} events from Google`, {
              description: "Fresh events loaded from Google space research collaborations",
              position: "top-center",
            });
          }
          
          const spaceAgencyCount = filteredEvents.filter(event => 
            event.source === 'esa' || 
            event.source === 'jaxa' || 
            event.source === 'csa' || 
            event.source === 'google'
          ).length;
          
          if (spaceAgencyCount > 0 && spaceAgencyCount !== googleEvents) {
            toast.success(`Loaded ${spaceAgencyCount} space agency events`, {
              description: "Including events from ESA, JAXA, CSA and Google collaborations",
              position: "top-center",
            });
          }
        }
      } catch (error) {
        console.error("Error filtering events:", error);
        toast.error("There was an error loading events");
      } finally {
        setLoading(false);
      }
    };
    
    loadEvents();
    
    // Set up a refresh interval to fetch new events daily (simulating real API behavior)
    const intervalId = setInterval(() => {
      loadEvents();
      toast.info("Refreshed event data", {
        description: "Checking for new astronomy events",
        position: "top-center",
      });
    }, 3600000); // Refresh every hour (in ms) - in a real app this might be daily
    
    return () => clearInterval(intervalId);
  }, [filters]);

  const handleEventSelect = (id: string) => {
    const event = getEventById(id);
    if (event) {
      setSelectedEvent(event);
    }
  };
  
  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };
  
  const closeEventDetails = () => {
    setSelectedEvent(null);
  };
  
  const handleNextPage = () => {
    if ((page + 1) * eventsPerPage < events.length) {
      setPage(page + 1);
    }
  };
  
  const handlePrevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  
  const totalPages = Math.ceil(events.length / eventsPerPage);
  
  const currentEvents = events.slice(page * eventsPerPage, (page + 1) * eventsPerPage);

  return (
    <div className="w-full">
      <EventFilter onFilterChange={handleFilterChange} />
      
      <div className="mt-8">
        {loading ? (
          <div className="glass-panel rounded-xl p-8 text-center">
            <h3 className="text-lg font-medium mb-2">Loading events...</h3>
          </div>
        ) : events.length === 0 ? (
          <div className="glass-panel rounded-xl p-8 text-center">
            <h3 className="text-lg font-medium mb-2">No events found</h3>
            <p className="text-space-400">Try adjusting your filters to see more events.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentEvents.map(event => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  onSelect={handleEventSelect}
                />
              ))}
            </div>
            
            {totalPages > 1 && (
              <div className="flex justify-center mt-8 space-x-1">
                <button 
                  onClick={handlePrevPage}
                  disabled={page === 0}
                  className={`p-2 rounded-full ${
                    page === 0 
                      ? 'text-space-600 cursor-not-allowed' 
                      : 'text-space-300 hover:text-white hover:bg-space-800'
                  }`}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setPage(i)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${
                      page === i 
                        ? 'bg-celestial-blue text-white' 
                        : 'text-space-300 hover:bg-space-800 hover:text-white'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                
                <button 
                  onClick={handleNextPage}
                  disabled={(page + 1) * eventsPerPage >= events.length}
                  className={`p-2 rounded-full ${
                    (page + 1) * eventsPerPage >= events.length 
                      ? 'text-space-600 cursor-not-allowed' 
                      : 'text-space-300 hover:text-white hover:bg-space-800'
                  }`}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
      
      {selectedEvent && (
        <EventDetails 
          event={selectedEvent} 
          onClose={closeEventDetails} 
        />
      )}
    </div>
  );
};

export default Calendar;
