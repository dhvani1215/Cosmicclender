import { AstronomyEvent, FilterOptions } from './types';
import { fetchAllNasaData } from './nasaService';
import { fetchSpaceAgencyEvents } from './spaceAgencyService';

// Sample data for astronomy events
export const astronomyEvents: AstronomyEvent[] = [
  {
    id: 'quadrantid-meteor-shower-2023',
    title: 'Quadrantid Meteor Shower',
    description: 'One of the best annual meteor showers with up to 40 meteors per hour at its peak.',
    longDescription: 'The Quadrantids is one of the best annual meteor showers and can produce up to 40 meteors per hour at its peak. The shower usually peaks around January 3-4, but the maximum activity only lasts for a few hours. The shower gets its name from the former constellation Quadrans Muralis. The radiant point for this shower is located in the constellation Bootes. This shower is thought to be produced by debris from the extinct comet 2003 EH1, which was discovered in 2003. It is best viewed from the northern hemisphere during the night and early morning.',
    date: '2023-01-03T00:00:00Z',
    endDate: '2023-01-04T23:59:59Z',
    type: 'meteor',
    location: 'Northern Hemisphere',
    peakTime: '2023-01-03T21:00:00Z',
    intensity: 8,
    visibility: 7,
    tips: [
      'Find a dark location away from city lights',
      'Allow 20-30 minutes for your eyes to adjust to the dark',
      'Look at the northeastern sky toward the constellation Bootes',
      'Best viewing after midnight until dawn'
    ]
  },
  {
    id: 'lyrid-meteor-shower-2023',
    title: 'Lyrid Meteor Shower',
    description: 'Annual meteor shower producing up to 20 meteors per hour at its peak.',
    longDescription: 'The Lyrids are an annual meteor shower that peaks around April 21-22. This shower can occasionally produce up to 100 meteors per hour, though 10-20 is more typical. The Lyrids are one of the oldest recorded meteor showers, with observations dating back to 687 BCE in China. The radiant point for this shower is in the constellation Lyra, near the bright star Vega. The meteors are produced by dust particles left behind by comet C/1861 G1 Thatcher, which takes about 415 years to orbit around the sun. The shower is best viewed from the Northern Hemisphere during the dark hours before dawn.',
    date: '2023-04-16T00:00:00Z',
    endDate: '2023-04-25T23:59:59Z',
    type: 'meteor',
    location: 'Northern Hemisphere',
    peakTime: '2023-04-22T08:00:00Z',
    intensity: 6,
    visibility: 7,
    tips: [
      'Find a dark location away from city lights',
      'Allow 20-30 minutes for your eyes to adjust to the dark',
      'Look toward the constellation Lyra',
      'Best viewing after midnight until dawn'
    ]
  },
  {
    id: 'total-solar-eclipse-2023',
    title: 'Total Solar Eclipse',
    description: 'A rare celestial event where the Moon completely blocks the Sun.',
    longDescription: 'A total solar eclipse occurs when the Moon completely blocks the Sun, revealing the Sun\'s outer atmosphere or corona. This particular eclipse will be visible along a narrow path crossing Australia, Timor Leste, Indonesia, and parts of the Pacific Ocean. Areas outside the path of totality will experience a partial solar eclipse. During the few minutes of totality, observers can safely remove their eclipse glasses to observe the Sun\'s corona, prominences, and other features not normally visible. Total solar eclipses provide unique opportunities for scientific observations of the Sun\'s outer layers.',
    date: '2023-04-20T00:00:00Z',
    type: 'eclipse',
    location: 'Path crossing Indonesia, Australia, and Papua New Guinea',
    peakTime: '2023-04-20T04:17:00Z',
    visibility: 10,
    tips: [
      'Use proper solar viewing glasses during partial phases',
      'Never look directly at the Sun without proper eye protection',
      'During totality only, it is safe to view with the naked eye',
      'Consider traveling to the path of totality for the full experience'
    ]
  },
  {
    id: 'perseid-meteor-shower-2023',
    title: 'Perseid Meteor Shower',
    description: 'One of the most popular meteor showers, producing up to 60 meteors per hour.',
    longDescription: 'The Perseids are one of the most popular meteor showers, producing up to 60 meteors per hour at its peak. The shower is associated with the comet Swift-Tuttle and runs annually from July 17 to August 24. The shower peaks around August 12-13 each year. The meteors appear to radiate from the constellation Perseus, giving the shower its name. Perseids are particularly appreciated for their brightness and frequency, often producing spectacular "fireballs" that are brighter and more persistent than an average meteor streak. The shower is best viewed from the Northern Hemisphere during the pre-dawn hours.',
    date: '2023-07-17T00:00:00Z',
    endDate: '2023-08-24T23:59:59Z',
    type: 'meteor',
    location: 'Northern Hemisphere',
    peakTime: '2023-08-12T14:00:00Z',
    intensity: 9,
    visibility: 8,
    tips: [
      'Find a dark location away from city lights',
      'Lie flat on your back and look up',
      'Allow 20-30 minutes for your eyes to adjust to the dark',
      'Best viewing after midnight until dawn'
    ]
  },
  {
    id: 'jupiter-opposition-2023',
    title: 'Jupiter at Opposition',
    description: 'Jupiter will be at its closest approach to Earth, appearing at its brightest.',
    longDescription: 'Jupiter will be at opposition, meaning it will be at its closest approach to Earth and fully illuminated by the Sun. This occurs when Jupiter is on the opposite side of Earth from the Sun, making it appear brighter and larger than at any other time of the year. Jupiter will be visible all night long, rising at sunset and setting at sunrise. This is the best time to view and photograph Jupiter and its moons. A medium-sized telescope should be able to show you Jupiter\'s cloud bands and the Great Red Spot, as well as its four largest moons: Io, Europa, Ganymede, and Callisto.',
    date: '2023-11-03T00:00:00Z',
    type: 'planet',
    location: 'Worldwide',
    peakTime: '2023-11-03T03:00:00Z',
    visibility: 10,
    tips: [
      'Even a small telescope will reveal Jupiter\'s four largest moons',
      'A medium-sized telescope might show the cloud bands and possibly the Great Red Spot',
      'Jupiter will be visible all night long',
      'Best viewing is around midnight when Jupiter is highest in the sky'
    ]
  },
  {
    id: 'geminid-meteor-shower-2023',
    title: 'Geminid Meteor Shower',
    description: 'One of the most reliable and spectacular meteor showers, with up to 120 meteors per hour.',
    longDescription: 'The Geminids are considered one of the most spectacular meteor showers, producing up to 120 multicolored meteors per hour at its peak. Unlike most meteor showers, which originate from comets, the Geminids are produced by an asteroid known as 3200 Phaethon. The shower runs annually from December 7-17 and peaks around December 13-14. The meteors appear to radiate from the constellation Gemini, hence the name. Geminids are often bright and intensely colored, and they tend to be slower than other meteor showers, making them easier to spot. This shower is visible from both hemispheres, though it is better from the Northern Hemisphere.',
    date: '2023-12-07T00:00:00Z',
    endDate: '2023-12-17T23:59:59Z',
    type: 'meteor',
    location: 'Worldwide, but best from Northern Hemisphere',
    peakTime: '2023-12-14T01:00:00Z',
    intensity: 10,
    visibility: 9,
    tips: [
      'Find a dark location away from city lights',
      'Dress warmly for the December cold',
      'Lie flat on your back with feet facing south',
      'Best viewing after midnight until dawn'
    ]
  },
  {
    id: 'supermoon-2023',
    title: 'Super Blue Moon',
    description: 'A rare combination of a supermoon and a blue moon, making the Moon appear larger and brighter.',
    longDescription: 'A Super Blue Moon is a rare celestial event that combines two lunar phenomena: a supermoon and a blue moon. A supermoon occurs when the Moon is at its closest approach to Earth in its orbit, making it appear larger and brighter than usual. A blue moon, in the modern definition, refers to the second full moon in a calendar month, which is relatively rare and happens roughly every 2.5 years. The combination of these two events is even rarer. Despite the name, the Moon won\'t actually appear blue; the term "blue moon" is simply a reference to its rarity. During this event, the Moon will appear about 14% larger and 30% brighter than a typical full moon.',
    date: '2023-08-30T00:00:00Z',
    type: 'moon',
    location: 'Worldwide',
    peakTime: '2023-08-30T17:35:00Z',
    visibility: 9,
    tips: [
      'Best viewed when the Moon is rising or setting',
      'No special equipment needed - the naked eye is sufficient',
      'For photography, use a telephoto lens to capture detail',
      'Consider finding a scenic foreground to enhance photographs'
    ]
  },
  {
    id: 'partial-lunar-eclipse-2023',
    title: 'Partial Lunar Eclipse',
    description: 'A partial lunar eclipse where a portion of the Moon passes through Earth\'s shadow.',
    longDescription: 'A partial lunar eclipse occurs when only a portion of the Moon passes through the darkest part of Earth\'s shadow, known as the umbra. During this event, part of the Moon will darken dramatically, often taking on a reddish-brown color due to sunlight being filtered and refracted by Earth\'s atmosphere. This particular eclipse will be visible from parts of Europe, Asia, Australia, Africa, and eastern South America. Unlike solar eclipses, lunar eclipses are safe to view with the naked eye and require no special equipment. The entire event will last several hours, including the penumbral phases where subtle darkening occurs.',
    date: '2023-10-28T00:00:00Z',
    type: 'eclipse',
    location: 'Europe, Asia, Australia, Africa, Eastern South America',
    peakTime: '2023-10-28T20:14:00Z',
    visibility: 8,
    tips: [
      'No special equipment needed - visible to the naked eye',
      'Binoculars or a small telescope will enhance the view',
      'The eclipse will last for several hours, with maximum coverage at peak time',
      'Dark sky locations will provide the best viewing experience'
    ]
  }
];

// Keep track of NASA events separately
let nasaEvents: AstronomyEvent[] = [];

// Keep track of space agency events
let spaceAgencyEvents: AstronomyEvent[] = [];

// Load NASA data
export const loadNasaEvents = async () => {
  try {
    const events = await fetchAllNasaData();
    nasaEvents = events;
    
    // Add to window object for global access
    if (typeof window !== 'undefined') {
      window.astronomyEvents = [...astronomyEvents, ...nasaEvents, ...spaceAgencyEvents];
    }
    
    return [...astronomyEvents, ...nasaEvents, ...spaceAgencyEvents];
  } catch (error) {
    console.error('Error loading NASA events:', error);
    
    // Fall back to static data
    if (typeof window !== 'undefined') {
      window.astronomyEvents = [...astronomyEvents, ...spaceAgencyEvents];
    }
    
    return [...astronomyEvents, ...spaceAgencyEvents];
  }
};

// Load space agency events
export const loadSpaceAgencyEvents = async () => {
  try {
    const events = await fetchSpaceAgencyEvents();
    spaceAgencyEvents = events;
    
    // Update window object for global access
    if (typeof window !== 'undefined') {
      window.astronomyEvents = [...astronomyEvents, ...nasaEvents, ...spaceAgencyEvents];
    }
    
    return events;
  } catch (error) {
    console.error('Error loading space agency events:', error);
    return [];
  }
};

// Initialize the data when imported
if (typeof window !== 'undefined') {
  window.astronomyEvents = astronomyEvents;
  // Load NASA data in the background
  loadNasaEvents();
  // Load space agency events in the background
  loadSpaceAgencyEvents();
}

export const getFilteredEvents = (
  events: AstronomyEvent[],
  filters: FilterOptions
) => {
  // Get current date to filter out past events
  const currentDate = new Date();
  
  return events.filter((event) => {
    const eventDate = new Date(event.date);
    const eventType = event.type;
    const eventMonth = eventDate.getMonth() + 1; // JavaScript months are 0-indexed
    const eventYear = eventDate.getFullYear();
    
    // Filter out past events
    const isFutureEvent = eventDate >= currentDate;
    
    const typeMatch = filters.type === 'all' || eventType === filters.type;
    const monthMatch = filters.month === 'all' || eventMonth === Number(filters.month);
    const yearMatch = filters.year === 'all' || eventYear === Number(filters.year);
    
    return isFutureEvent && typeMatch && monthMatch && yearMatch;
  });
};

export const getEventById = (id: string): AstronomyEvent | undefined => {
  const allEvents = [...astronomyEvents, ...nasaEvents, ...spaceAgencyEvents];
  return allEvents.find(event => event.id === id) || 
         window.astronomyEvents?.find(event => event.id === id);
};

// Utility function to format dates
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Utility function to format times
export const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  });
};

// Declare window.astronomyEvents for TypeScript
declare global {
  interface Window {
    astronomyEvents: AstronomyEvent[];
  }
}
