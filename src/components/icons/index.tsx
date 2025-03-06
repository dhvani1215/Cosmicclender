import { Star, Moon, Sun, Calendar, Filter, Search, MapPin, Clock, ArrowRight, ArrowLeft, X, ChevronRight, ChevronLeft, Info, CalendarDays, CheckCircle2, Rocket, Satellite } from "lucide-react";

export {
  Star,
  Moon,
  Sun,
  Calendar,
  Filter,
  Search,
  MapPin,
  Clock,
  ArrowRight,
  ArrowLeft,
  X,
  ChevronRight,
  ChevronLeft,
  Info,
  CalendarDays,
  CheckCircle2,
  Rocket,
  Satellite
};

export const MeteorIcon = ({ className = "", ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={`lucide lucide-meteor ${className}`}
    {...props}
  >
    <path d="M21 3L3 21l5.5-5.5" />
    <path d="M18.5 5.5l-3-3" />
    <path d="M13.77 10.23c1.25 1.25 1.62 3 .7 4.6a4.14 4.14 0 0 1-6.8 1.4c-1.25-1.25-1.62-3-.7-4.6 1.03-1.84 3.18-2.29 6.8-1.4Z" />
  </svg>
);

export const EclipseIcon = ({ className = "", ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={`lucide lucide-eclipse ${className}`}
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a8 8 0 0 0 0 16" />
  </svg>
);

export const PlanetIcon = ({ className = "", ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={`lucide lucide-planet ${className}`}
    {...props}
  >
    <circle cx="12" cy="12" r="8" />
    <ellipse cx="12" cy="12" rx="11" ry="4" />
    <ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(90 12 12)" />
  </svg>
);

export const AsteroidIcon = ({ className = "", ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={`lucide lucide-asteroid ${className}`}
    {...props}
  >
    <path d="M4 12a9 9 0 0 1 9 9" />
    <path d="M14.5 19.5A9 9 0 0 1 19 14" />
    <path d="M8.4 8.4A9 9 0 0 1 14 4" />
    <path d="M3 15c.5-1.7 1.5-3 3-4" />
    <path d="M9 20a9 9 0 0 0 1-3" />
    <path d="M12 9a5 5 0 0 0-1 3" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const ISSIcon = ({ className = "", ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={`lucide lucide-iss ${className}`}
    {...props}
  >
    <path d="M5 12h14" />
    <path d="M5 12a2 2 0 0 0-2-2" />
    <path d="M19 12a2 2 0 0 1 2-2" />
    <path d="M5 12a2 2 0 0 1-2 2" />
    <path d="M19 12a2 2 0 0 0 2 2" />
    <path d="M12 2v20" />
    <path d="M12 2a2 2 0 0 0-2 2" />
    <path d="M12 2a2 2 0 0 1 2 2" />
    <path d="M12 22a2 2 0 0 0-2-2" />
    <path d="M12 22a2 2 0 0 1 2-2" />
  </svg>
);
