
import { Shield, Lock, FileText } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-celestial-purple/20 mb-4">
              <Shield className="w-8 h-8 text-celestial-purple" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-space-400">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>

          <div className="glass-panel rounded-xl p-8 space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Lock className="mr-2 h-5 w-5 text-celestial-blue" />
                Introduction
              </h2>
              <p className="text-space-300 mb-4">
                At Cosmic Calendar, we respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit our website 
                and tell you about your privacy rights and how the law protects you.
              </p>
              <p className="text-space-300">
                Please read this privacy policy carefully before using our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <FileText className="mr-2 h-5 w-5 text-celestial-blue" />
                Information We Collect
              </h2>
              <p className="text-space-300 mb-4">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-space-300">
                <li>
                  <strong>Identity Data</strong> includes first name, last name, username or similar identifier.
                </li>
                <li>
                  <strong>Contact Data</strong> includes email address and telephone numbers.
                </li>
                <li>
                  <strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, 
                  time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology 
                  on the devices you use to access this website.
                </li>
                <li>
                  <strong>Usage Data</strong> includes information about how you use our website and services.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Lock className="mr-2 h-5 w-5 text-celestial-blue" />
                How We Use Your Information
              </h2>
              <p className="text-space-300 mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-space-300">
                <li>To register you as a new user.</li>
                <li>To provide you with astronomy event notifications that you have subscribed to.</li>
                <li>To manage our relationship with you.</li>
                <li>To improve our website, products/services, marketing, and customer relationships.</li>
                <li>To recommend content that may be of interest to you.</li>
                <li>To administer and protect our business and this website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Shield className="mr-2 h-5 w-5 text-celestial-blue" />
                Data Security
              </h2>
              <p className="text-space-300">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, 
                or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those 
                employees, agents, contractors, and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <FileText className="mr-2 h-5 w-5 text-celestial-blue" />
                Your Legal Rights
              </h2>
              <p className="text-space-300 mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-space-300">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Lock className="mr-2 h-5 w-5 text-celestial-blue" />
                Contact Us
              </h2>
              <p className="text-space-300">
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
                <a href="mailto:privacy@cosmiccalendar.com" className="text-celestial-blue hover:underline ml-1">
                  privacy@cosmiccalendar.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
