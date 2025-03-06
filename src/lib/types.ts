export type EventType = 'meteor' | 'eclipse' | 'planet' | 'moon' | 'other' | 'asteroid' | 'iss' | 'spacewalk';

export interface AstronomyEvent {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  date: string; // ISO date string
  endDate?: string; // ISO date string
  type: EventType;
  location?: string; // Visible from which regions
  image?: string; // URL to an image
  peakTime?: string; // Best viewing time
  intensity?: number; // 1-10 scale
  visibility?: number; // 1-10 scale
  tips?: string[]; // Viewing tips
  relatedEvents?: string[]; // IDs of related events
  nasaId?: string; // NASA's event ID
  nasaUrl?: string; // Link to NASA's event page
  coordinates?: {
    lat: number;
    lng: number;
  }; // Coordinates for viewing
  source?: 'nasa' | 'google' | 'esa' | 'jaxa' | 'csa' | 'roscosmos' | 'other'; // Added source field
}

export interface FilterOptions {
  type: EventType | 'all';
  month: number | 'all'; // 1-12 for months, 'all' for all months
  year: number | 'all';
}

export interface NasaApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: NasaEvent[];
}

export interface NasaEvent {
  id: number;
  title: string;
  description: string;
  location?: string;
  news_type?: string;
  publish_date: string;
  slug: string;
  url: string;
}

export interface NasaAPODResponse {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

export interface NasaAsteroidResponse {
  element_count: number;
  near_earth_objects: {
    [date: string]: NasaAsteroid[];
  };
}

export interface NasaAsteroid {
  id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
  };
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: {
    close_approach_date: string;
    close_approach_date_full: string;
    epoch_date_close_approach: number;
    relative_velocity: {
      kilometers_per_second: string;
      kilometers_per_hour: string;
      miles_per_hour: string;
    };
    miss_distance: {
      astronomical: string;
      lunar: string;
      kilometers: string;
      miles: string;
    };
    orbiting_body: string;
  }[];
}
