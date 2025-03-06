
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { UserPlus, Mail, Lock, Check } from 'lucide-react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.password) {
      toast.error('Please fill in all required fields');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      setLoading(false);
      return;
    }

    // Mock signup success - in a real app, this would connect to a backend service
    setTimeout(() => {
      toast.success('Account created successfully!', {
        description: 'You can now receive astronomy event alerts',
      });
      setLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto glass-panel rounded-xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-celestial-blue bg-opacity-20 mb-4">
              <UserPlus className="w-8 h-8 text-celestial-blue" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Sign Up for Cosmic Alerts</h1>
            <p className="text-space-400">Get notified about upcoming astronomical events</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-space-300 mb-1">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-space-900/50 border border-space-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-celestial-blue/50 focus:border-celestial-blue/50"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-space-300 mb-1">
                Email Address
              </label>
              <div className="relative">
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
              <label htmlFor="password" className="block text-sm font-medium text-space-300 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-space-900/50 border border-space-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-celestial-blue/50 focus:border-celestial-blue/50"
                  placeholder="Create a password"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-space-300 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full bg-space-900/50 border border-space-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-celestial-blue/50 focus:border-celestial-blue/50"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-celestial-blue focus:ring-celestial-blue border-space-700 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-space-300">
                I agree to the{" "}
                <a href="/terms" className="text-celestial-blue hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-celestial-blue hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center rounded-lg px-4 py-3 text-white font-medium transition-all ${
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
                  Processing...
                </span>
              ) : (
                <span className="flex items-center">
                  Create Account
                  <Check className="ml-2 h-4 w-4" />
                </span>
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-space-400">
            Already have an account?{" "}
            <a href="#" className="text-celestial-blue hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
