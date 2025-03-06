
import { useState } from 'react';
import { Filter, Search } from './icons';
import { MeteorIcon, EclipseIcon, PlanetIcon, Moon } from './icons';

interface EventFilterProps {
  onFilterChange: (filters: { type: string; month: string | number; year: string | number }) => void;
}

const EventFilter = ({ onFilterChange }: EventFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState({
    type: 'all',
    month: 'all',
    year: 'all'
  });
  
  const months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' }
  ];
  
  const years = [2023, 2024, 2025];
  
  const eventTypes = [
    { value: 'all', label: 'All Types', icon: null },
    { value: 'meteor', label: 'Meteor Showers', icon: <MeteorIcon className="h-4 w-4 text-celestial-meteor" /> },
    { value: 'eclipse', label: 'Eclipses', icon: <EclipseIcon className="h-4 w-4 text-celestial-pink" /> },
    { value: 'planet', label: 'Planetary Events', icon: <PlanetIcon className="h-4 w-4 text-celestial-blue" /> },
    { value: 'moon', label: 'Moon Events', icon: <Moon className="h-4 w-4 text-celestial-purple" /> }
  ];
  
  const handleFilterChange = (key: string, value: string | number) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  const handleReset = () => {
    const resetFilters = { type: 'all', month: 'all', year: 'all' };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="glass-panel rounded-xl overflow-hidden transition-all duration-300">
      <div 
        className="p-4 flex items-center justify-between cursor-pointer"
        onClick={toggleExpand}
      >
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-space-300" />
          <h3 className="font-medium">Filter Events</h3>
        </div>
        <div className="flex items-center space-x-2">
          {filters.type !== 'all' || filters.month !== 'all' || filters.year !== 'all' ? (
            <span className="text-xs px-2 py-1 bg-space-800 rounded-full text-space-300">
              Filters Applied
            </span>
          ) : null}
          <button 
            className={`h-6 w-6 flex items-center justify-center rounded-full transition-transform duration-300 ${
              isExpanded ? 'rotate-180 bg-space-700' : 'bg-space-800'
            }`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-4 w-4"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="p-4 border-t border-space-800 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-space-300">Event Type</label>
              <div className="space-y-2">
                {eventTypes.map(type => (
                  <label 
                    key={type.value} 
                    className={`flex items-center space-x-2 p-2 rounded cursor-pointer transition-colors ${
                      filters.type === type.value ? 'bg-space-800' : 'hover:bg-space-800/50'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="type" 
                      value={type.value} 
                      checked={filters.type === type.value}
                      onChange={() => handleFilterChange('type', type.value)}
                      className="hidden"
                    />
                    <div 
                      className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                        filters.type === type.value ? 'border-celestial-blue bg-celestial-blue/20' : 'border-space-600'
                      }`}
                    >
                      {filters.type === type.value && (
                        <div className="h-2 w-2 rounded-full bg-celestial-blue" />
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      {type.icon}
                      <span>{type.label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-space-300">Month</label>
              <select 
                value={filters.month} 
                onChange={(e) => handleFilterChange('month', e.target.value)}
                className="w-full bg-space-800 border border-space-700 rounded-lg p-2 text-space-200 focus:outline-none focus:ring-1 focus:ring-celestial-blue"
              >
                <option value="all">All Months</option>
                {months.map(month => (
                  <option key={month.value} value={month.value}>{month.label}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-space-300">Year</label>
              <select 
                value={filters.year} 
                onChange={(e) => handleFilterChange('year', e.target.value)}
                className="w-full bg-space-800 border border-space-700 rounded-lg p-2 text-space-200 focus:outline-none focus:ring-1 focus:ring-celestial-blue"
              >
                <option value="all">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="flex justify-end space-x-3">
            <button 
              onClick={handleReset}
              className="px-4 py-2 rounded text-space-300 hover:text-white transition-colors text-sm"
            >
              Reset Filters
            </button>
            <button 
              onClick={toggleExpand}
              className="px-4 py-2 bg-celestial-blue hover:bg-celestial-blue/90 text-white rounded text-sm transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventFilter;
