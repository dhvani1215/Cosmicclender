
import { AstronomyEvent, NasaAPODResponse, NasaAsteroidResponse } from './types';

// Replace with your NASA API key if you have one
// For demo purposes, we're using NASA's DEMO_KEY which has limited requests
const NASA_API_KEY = 'DEMO_KEY';

// Fetch NASA's Astronomy Picture of the Day
export const fetchAPOD = async (): Promise<AstronomyEvent | null> => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error(`NASA APOD API responded with status: ${response.status}`);
    }
    
    const data: NasaAPODResponse = await response.json();
    
    return {
      id: `apod-${data.date}`,
      title: data.title,
      description: data.explanation.substring(0, 150) + '...',
      longDescription: data.explanation,
      date: data.date,
      type: 'other',
      image: data.url,
      nasaUrl: `https://apod.nasa.gov/apod/astropix.html`,
      tips: [
        'View the high-resolution image on NASA\'s website',
        'Check back tomorrow for a new astronomy picture',
      ]
    };
  } catch (error) {
    console.error('Error fetching NASA APOD:', error);
    return null;
  }
};

// Fetch NASA's Near Earth Object data (asteroids)
export const fetchAsteroids = async (): Promise<AstronomyEvent[]> => {
  try {
    // Get start date (today) and end date (7 days from now - limited to 7 days for this API)
    const today = new Date();
    const endDate = new Date();
    endDate.setDate(today.getDate() + 7); // NASA NEO API only allows 7 days at a time
    
    const startDateStr = formatDateForNasa(today);
    const endDateStr = formatDateForNasa(endDate);
    
    const response = await fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDateStr}&end_date=${endDateStr}&api_key=${NASA_API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error(`NASA NEO API responded with status: ${response.status}`);
    }
    
    const data: NasaAsteroidResponse = await response.json();
    const events: AstronomyEvent[] = [];
    
    // Process each day's asteroids
    Object.keys(data.near_earth_objects).forEach(date => {
      // Filter to just potentially hazardous or notable asteroids to avoid too many events
      const notableAsteroids = data.near_earth_objects[date]
        .filter(asteroid => 
          asteroid.is_potentially_hazardous_asteroid || 
          parseFloat(asteroid.close_approach_data[0].miss_distance.lunar) < 10 ||
          asteroid.estimated_diameter.kilometers.estimated_diameter_max > 0.5
        )
        .slice(0, 5); // Limit to 5 per day
      
      notableAsteroids.forEach(asteroid => {
        const approachData = asteroid.close_approach_data[0];
        const lunarDistance = parseFloat(approachData.miss_distance.lunar);
        
        // Calculate intensity based on size and proximity
        const sizeValue = asteroid.estimated_diameter.kilometers.estimated_diameter_max;
        const proximityValue = 10 - Math.min(lunarDistance / 5, 10);
        const intensity = Math.min(Math.round((sizeValue * 5) + proximityValue), 10);
        
        // Create future date object for validation
        const approachDate = new Date(approachData.close_approach_date);
        const now = new Date();
        
        // Only include future events
        if (approachDate >= now) {
          events.push({
            id: `asteroid-${asteroid.id}`,
            title: `Near Earth Asteroid: ${asteroid.name}`,
            description: `Asteroid passing within ${Math.round(lunarDistance)} lunar distances of Earth.`,
            longDescription: `This asteroid has an estimated diameter of ${sizeValue.toFixed(2)} km and will pass ${approachData.miss_distance.kilometers} km from Earth at a velocity of ${approachData.relative_velocity.kilometers_per_hour} km/h.${asteroid.is_potentially_hazardous_asteroid ? ' NASA classifies this asteroid as potentially hazardous.' : ''}`,
            date: approachData.close_approach_date,
            type: 'asteroid',
            nasaId: asteroid.id,
            nasaUrl: asteroid.nasa_jpl_url,
            intensity: intensity,
            visibility: 3, // Most asteroids aren't visible to the naked eye
            tips: [
              'Asteroids are typically not visible to the naked eye',
              'Professional telescopes track these objects',
              'This information is provided for astronomical interest'
            ]
          });
        }
      });
    });
    
    return events;
  } catch (error) {
    console.error('Error fetching NASA NEO data:', error);
    return [];
  }
};

// Fetch future NASA mission events and launches
export const fetchNASAMissions = async (): Promise<AstronomyEvent[]> => {
  try {
    // Using a mock for NASA's mission data since there's no direct public API for future missions
    // In a real app, this would connect to NASA's mission API if available
    
    // Creating some example future missions based on NASA's planned missions
    const today = new Date();
    const futureDate1 = new Date();
    futureDate1.setDate(today.getDate() + 45);
    
    const futureDate2 = new Date();
    futureDate2.setDate(today.getDate() + 90);
    
    const futureDate3 = new Date();
    futureDate3.setDate(today.getDate() + 180);
    
    const missions: AstronomyEvent[] = [
      {
        id: 'mission-artemis-2',
        title: 'Artemis II Mission',
        description: 'NASA\'s Artemis II will be the first crewed mission to orbit the Moon since Apollo.',
        longDescription: 'The Artemis II mission will send four astronauts in the Orion spacecraft into lunar orbit, testing NASA\'s capabilities to send humans back to the Moon and eventually to Mars. This will be the first crewed mission of the Artemis program and will test critical systems with humans on board.',
        date: futureDate1.toISOString(),
        type: 'spacewalk',
        nasaUrl: 'https://www.nasa.gov/mission/artemis-ii/',
        tips: [
          'Watch live coverage on NASA TV',
          'Follow NASA\'s social media for updates',
          'The mission duration is approximately 10 days'
        ]
      },
      {
        id: 'mission-europa-clipper',
        title: 'Europa Clipper Launch',
        description: 'Launch of the mission to study Jupiter\'s moon Europa.',
        longDescription: 'The Europa Clipper mission will conduct detailed reconnaissance of Jupiter\'s moon Europa to determine whether the icy moon could harbor conditions suitable for life. The spacecraft will make about 45 close passes over Europa, shifting its flight path for each flyby to soar over a different location so that it eventually scans nearly the entire moon.',
        date: futureDate2.toISOString(),
        type: 'other',
        nasaUrl: 'https://europa.nasa.gov/',
        tips: [
          'The mission will launch on a SpaceX Falcon Heavy rocket',
          'It will take several years to reach Jupiter',
          'Europa is believed to have a subsurface ocean of liquid water'
        ]
      },
      {
        id: 'mission-psyche',
        title: 'Psyche Mission Asteroid Arrival',
        description: 'NASA\'s Psyche spacecraft will reach the metal-rich asteroid.',
        longDescription: 'After its launch, the Psyche mission will explore a metal-rich asteroid of the same name, which appears to be the exposed nickel-iron core of an early planet. This mission offers a unique window into the violent history of collisions and accretion that created terrestrial planets like Earth.',
        date: futureDate3.toISOString(),
        type: 'asteroid',
        nasaUrl: 'https://www.nasa.gov/mission/psyche/',
        tips: [
          'This is the first mission to a metal asteroid',
          'Scientists believe the asteroid may be the core of an early planet',
          'The mission will help understand how planets form'
        ]
      }
    ];
    
    return missions;
  } catch (error) {
    console.error('Error creating NASA mission data:', error);
    return [];
  }
};

// Fetch International Space Station pass times for a specific location
// For demo purposes, we'll use a fixed location (New York City)
export const fetchISSPasses = async (): Promise<AstronomyEvent[]> => {
  try {
    // Using a fixed location for demo purposes (New York City)
    const lat = 40.7128;
    const lon = -74.0060;
    
    const response = await fetch(
      `https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=${Math.floor(Date.now() / 1000)}`
    );
    
    if (!response.ok) {
      throw new Error(`ISS API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Create a single event for the current ISS position
    const currentPosition = data[0];
    const date = new Date();
    
    // Generate 5 future ISS events (predicted positions)
    const issEvents: AstronomyEvent[] = [];
    
    // Current position event
    const currentEvent: AstronomyEvent = {
      id: `iss-${date.toISOString()}`,
      title: `ISS Current Position`,
      description: `The International Space Station is currently over ${currentPosition.latitude.toFixed(2)}° lat, ${currentPosition.longitude.toFixed(2)}° long.`,
      longDescription: `The International Space Station (ISS) is a large spacecraft in orbit around Earth. It serves as a home where crews of astronauts and cosmonauts live and conduct research. The space station flies at an average altitude of 400 kilometers above Earth.`,
      date: date.toISOString(),
      type: 'iss',
      location: `Above ${currentPosition.latitude.toFixed(2)}° lat, ${currentPosition.longitude.toFixed(2)}° long`,
      coordinates: {
        lat: currentPosition.latitude,
        lng: currentPosition.longitude
      },
      visibility: 7,
      tips: [
        'The ISS appears as a bright, fast-moving star in the night sky',
        'Best viewed shortly after sunset or before sunrise',
        'Completes an orbit around Earth every 90 minutes'
      ]
    };
    
    issEvents.push(currentEvent);
    
    // Generate future predicted ISS events
    // Since the ISS orbits every ~90 minutes, we can make reasonable predictions
    for (let i = 1; i <= 5; i++) {
      // Each future event is roughly i*90 minutes in the future
      const futureDate = new Date(date);
      futureDate.setMinutes(futureDate.getMinutes() + (i * 90));
      
      // Simplistic orbit prediction (in reality would need orbital mechanics)
      // This is just for demonstration purposes
      const predictedLat = currentPosition.latitude + (i * 15) % 180 - 90;
      const predictedLng = currentPosition.longitude + (i * 20) % 360 - 180;
      
      const futureEvent: AstronomyEvent = {
        id: `iss-future-${i}-${futureDate.toISOString()}`,
        title: `Predicted ISS Position`,
        description: `The ISS is predicted to be over ${predictedLat.toFixed(2)}° lat, ${predictedLng.toFixed(2)}° long.`,
        longDescription: `This is a predicted position of the International Space Station based on its current orbit. The ISS completes an orbit around Earth every 90 minutes at an average altitude of 400 kilometers.`,
        date: futureDate.toISOString(),
        type: 'iss',
        location: `Predicted position: ${predictedLat.toFixed(2)}° lat, ${predictedLng.toFixed(2)}° long`,
        coordinates: {
          lat: predictedLat,
          lng: predictedLng
        },
        visibility: 7,
        tips: [
          'The ISS appears as a bright, fast-moving star in the night sky',
          'Best viewed shortly after sunset or before sunrise',
          'This is a predicted position and may vary slightly'
        ]
      };
      
      issEvents.push(futureEvent);
    }
    
    return issEvents;
  } catch (error) {
    console.error('Error fetching ISS data:', error);
    return [];
  }
};

// Format date for NASA API (YYYY-MM-DD)
const formatDateForNasa = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

// Combine all NASA API data
export const fetchAllNasaData = async (): Promise<AstronomyEvent[]> => {
  try {
    // Fetch data from all sources in parallel
    const [apodData, asteroidData, issData, missionData] = await Promise.all([
      fetchAPOD(),
      fetchAsteroids(),
      fetchISSPasses(),
      fetchNASAMissions()
    ]);
    
    // Combine all data
    const allEvents: AstronomyEvent[] = [];
    if (apodData) allEvents.push(apodData);
    allEvents.push(...asteroidData);
    allEvents.push(...issData);
    allEvents.push(...missionData);
    
    // Sort events by date
    allEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
    return allEvents;
  } catch (error) {
    console.error('Error fetching NASA data:', error);
    return [];
  }
};
