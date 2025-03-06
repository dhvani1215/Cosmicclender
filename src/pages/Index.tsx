import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Calendar from '../components/Calendar';
import { astronomyEvents } from '../lib/data';
import { Star } from '../components/icons';
import { AstronomyEvent } from '../lib/types';

const createStars = () => {
  const stars = [];
  for (let i = 0; i < 100; i++) {
    const size = Math.random() * 2.5;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = 3 + Math.random() * 3;
    
    stars.push(
      <div
        key={i}
        className="star animate-star-pulse"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      />
    );
  }
  return stars;
};

const Index = () => {
  useEffect(() => {
    // Make events available globally
    window.astronomyEvents = astronomyEvents;
  }, []);

  return (
    <div className="min-h-screen w-full">
      <div className="stars-container">
        {createStars()}
      </div>
      
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <section className="mb-20 text-center">
          <div className="inline-block mb-2">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-celestial-blue/10 text-celestial-blue border border-celestial-blue/20">
              <Star className="h-4 w-4 mr-1 animate-star-pulse" />
              Discover the Cosmos
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Explore the Universe's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-celestial-blue to-celestial-purple">
              Greatest Celestial Events
            </span>
          </h1>
          <p className="text-lg md:text-xl text-space-300 max-w-3xl mx-auto mb-8">
            Never miss a meteor shower, eclipse, or planetary alignment with our comprehensive astronomy calendar.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-celestial-blue text-white rounded-full font-medium hover:bg-celestial-blue/90 transition-all duration-300 hover:shadow-lg hover:shadow-celestial-blue/20">
              Get Started
            </button>
            <button className="px-6 py-3 bg-space-800 text-white rounded-full font-medium hover:bg-space-700 transition-all duration-300">
              Learn More
            </button>
          </div>
        </section>
        
        <section id="events" className="mb-20 scroll-mt-20">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">Upcoming Events</h2>
              <p className="text-space-400">Discover and track celestial events happening this year</p>
            </div>
          </div>
          
          <Calendar />
        </section>
        
        <section id="about" className="mb-20 glass-panel rounded-xl p-8 md:p-12 scroll-mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-celestial-purple/10 text-celestial-purple border border-celestial-purple/20 mb-4">
                About Cosmic Calendar
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Your Guide to the Celestial Wonders</h2>
              <p className="text-space-300 mb-4">
                Cosmic Calendar is a comprehensive astronomy event tracker designed for both amateur stargazers and professional astronomers. We provide detailed information about upcoming celestial events, from meteor showers and eclipses to planetary alignments and moon phases.
              </p>
              <p className="text-space-300 mb-6">
                Our mission is to make astronomy accessible to everyone by providing accurate, detailed, and easy-to-understand information about celestial events.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-celestial-blue mb-1">50+</div>
                  <div className="text-sm text-space-400">Annual Events</div>
                </div>
                <div className="glass-card rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-celestial-purple mb-1">100%</div>
                  <div className="text-sm text-space-400">Accuracy</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1013&q=80" 
                  alt="Night sky with stars" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card rounded-xl p-4 max-w-xs animate-float">
                <div className="flex items-start space-x-3">
                  <div className="bg-celestial-blue/20 rounded-full p-2 mt-1">
                    <Star className="h-5 w-5 text-celestial-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Expert Insights</h3>
                    <p className="text-sm text-space-400">Get detailed information and viewing tips from astronomy experts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="resources" className="scroll-mt-20">
          <div className="text-center mb-10">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-celestial-pink/10 text-celestial-pink border border-celestial-pink/20 mb-4">
              Resources
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Enhance Your Stargazing Experience</h2>
            <p className="text-space-300 max-w-2xl mx-auto">
              Explore our collection of resources to help you get the most out of your astronomy adventures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-celestial-blue/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-6 w-6 text-celestial-blue"
                >
                  <path d="M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z" />
                  <path d="M8 4H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2" />
                  <path d="M2 9h20" />
                  <path d="M2 14h20" />
                  <path d="M2 19h20" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Astronomy Guides</h3>
              <p className="text-space-300 mb-4">
                Comprehensive guides for beginners and experts to enhance your astronomical knowledge.
              </p>
              <a href="https://www.google.com/search?q=astronomy+guides" target="_blank" rel="noopener noreferrer" className="text-celestial-blue hover:underline inline-flex items-center">
                Browse Guides
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-4 w-4 ml-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-celestial-purple/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-6 w-6 text-celestial-purple"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Equipment Reviews</h3>
              <p className="text-space-300 mb-4">
                Detailed reviews of telescopes, binoculars, and other astronomy equipment for all budgets.
              </p>
              <a href="https://www.google.com/search?q=astronomy+equipment+reviews" target="_blank" rel="noopener noreferrer" className="text-celestial-purple hover:underline inline-flex items-center">
                Read Reviews
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-4 w-4 ml-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-celestial-pink/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-6 w-6 text-celestial-pink"
                >
                  <path d="M20 6H4V4h16v2z" />
                  <path d="M14 12H4v-2h10v2z" />
                  <path d="M16 18H4v-2h12v2z" />
                  <line x1="18" y1="9" x2="9" y2="18" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Photography Tips</h3>
              <p className="text-space-300 mb-4">
                Learn how to capture stunning photographs of the night sky, celestial events, and more.
              </p>
              <a href="https://www.google.com/search?q=astrophotography+tips" target="_blank" rel="noopener noreferrer" className="text-celestial-pink hover:underline inline-flex items-center">
                Learn Photography
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-4 w-4 ml-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t border-space-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Star className="h-5 w-5 text-celestial-blue" />
              <div className="text-lg font-semibold">Cosmic Calendar</div>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-space-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-space-400 hover:text-white transition-colors">
                Terms
              </a>
            </div>
          </div>
          <div className="mt-6 text-center md:text-left text-space-500 text-sm">
            © {new Date().getFullYear()} Cosmic Calendar. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

declare global {
  interface Window {
    astronomyEvents: AstronomyEvent[];
  }
}

export default Index;
