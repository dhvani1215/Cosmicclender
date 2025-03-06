
import { useState } from 'react';
import { toast } from 'sonner';
import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      setLoading(false);
      return;
    }

    // Mock form submission - in a real app, this would connect to a backend service
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: 'We will get back to you soon',
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-space-400 max-w-2xl mx-auto">
              Have questions about astronomy events or need help with our cosmic calendar? 
              We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass-panel p-6 rounded-xl flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-celestial-blue/20 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-celestial-blue" />
              </div>
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <p className="text-space-400 mb-3">Our friendly team is here to help.</p>
              <a href="mailto:info@cosmiccalendar.com" className="text-celestial-blue hover:underline">
                info@cosmiccalendar.com
              </a>
            </div>

            <div className="glass-panel p-6 rounded-xl flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-celestial-purple/20 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-celestial-purple" />
              </div>
              <h3 className="text-lg font-medium mb-2">Office</h3>
              <p className="text-space-400 mb-3">Come say hello at our office HQ.</p>
              <p className="text-space-300">
                123 Cosmic Way<br />
                Stargazer City, Universe 42
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-celestial-meteor/20 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-celestial-meteor" />
              </div>
              <h3 className="text-lg font-medium mb-2">Social Media</h3>
              <p className="text-space-400 mb-3">Follow us on social media.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-space-300 hover:text-celestial-blue transition-colors">Twitter</a>
                <a href="#" className="text-space-300 hover:text-celestial-blue transition-colors">Instagram</a>
                <a href="#" className="text-space-300 hover:text-celestial-blue transition-colors">Facebook</a>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-space-300 mb-1">
                    Your Name <span className="text-celestial-pink">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-space-900/50 border border-space-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-celestial-blue/50 focus:border-celestial-blue/50"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-space-300 mb-1">
                    Email Address <span className="text-celestial-pink">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-space-900/50 border border-space-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-celestial-blue/50 focus:border-celestial-blue/50"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-space-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-space-900/50 border border-space-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-celestial-blue/50 focus:border-celestial-blue/50"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-space-300 mb-1">
                  Message <span className="text-celestial-pink">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-space-900/50 border border-space-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-celestial-blue/50 focus:border-celestial-blue/50"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`flex items-center justify-center rounded-lg px-6 py-3 text-white font-medium transition-all ${
                  loading
                    ? "bg-space-700 cursor-not-allowed"
                    : "bg-celestial-blue hover:bg-celestial-blue/90"
                }`}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
