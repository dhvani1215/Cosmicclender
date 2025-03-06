
import { FileText, Shield, Check, Info } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-celestial-blue/20 mb-4">
              <FileText className="w-8 h-8 text-celestial-blue" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
            <p className="text-space-400">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>

          <div className="glass-panel rounded-xl p-8 space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Info className="mr-2 h-5 w-5 text-celestial-blue" />
                Introduction
              </h2>
              <p className="text-space-300 mb-4">
                Welcome to Cosmic Calendar! These terms and conditions outline the rules and regulations for the use of our website.
              </p>
              <p className="text-space-300">
                By accessing this website, we assume you accept these terms and conditions. Do not continue to use Cosmic Calendar 
                if you do not agree to take all of the terms and conditions stated on this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Check className="mr-2 h-5 w-5 text-celestial-blue" />
                Definitions
              </h2>
              <p className="text-space-300 mb-4">
                The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-space-300">
                <li>
                  <strong>"Client", "You" and "Your"</strong> refers to you, the person accessing this website and accepting these terms and conditions.
                </li>
                <li>
                  <strong>"The Company", "Ourselves", "We", "Our" and "Us"</strong>, refers to Cosmic Calendar.
                </li>
                <li>
                  <strong>"Party", "Parties", or "Us"</strong>, refers to both the Client and ourselves, or either the Client or ourselves.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Shield className="mr-2 h-5 w-5 text-celestial-blue" />
                License
              </h2>
              <p className="text-space-300 mb-4">
                Unless otherwise stated, Cosmic Calendar and/or its licensors own the intellectual property rights for all material on the website.
                All intellectual property rights are reserved. You may access this from Cosmic Calendar for your own personal use 
                subjected to restrictions set in these terms and conditions.
              </p>
              <p className="text-space-300 font-medium">You must not:</p>
              <ul className="list-disc pl-6 space-y-2 text-space-300">
                <li>Republish material from Cosmic Calendar</li>
                <li>Sell, rent or sub-license material from Cosmic Calendar</li>
                <li>Reproduce, duplicate or copy material from Cosmic Calendar</li>
                <li>Redistribute content from Cosmic Calendar</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Info className="mr-2 h-5 w-5 text-celestial-blue" />
                User Accounts
              </h2>
              <p className="text-space-300 mb-4">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
                Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our website.
              </p>
              <p className="text-space-300 mb-4">
                You are responsible for safeguarding the password that you use to access the website and for any activities or actions under your password.
                You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or 
                unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Shield className="mr-2 h-5 w-5 text-celestial-blue" />
                Content Accuracy
              </h2>
              <p className="text-space-300">
                The information about astronomical events provided on this website is for general informational purposes only. 
                While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, 
                express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website 
                or the information, products, services, or related graphics contained on the website for any purpose.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <FileText className="mr-2 h-5 w-5 text-celestial-blue" />
                Changes to Terms
              </h2>
              <p className="text-space-300">
                We reserve the right to modify these terms of service at any time. If we make changes to these terms, we will post the updated 
                terms on the website and update the "Last updated" date at the top of these terms. If we make significant changes to these terms, 
                we may provide you with notice as appropriate under the circumstances, such as by sending you an email or displaying a prominent 
                notice on our website. Your continued use of our website after any such changes constitutes your acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Info className="mr-2 h-5 w-5 text-celestial-blue" />
                Contact Us
              </h2>
              <p className="text-space-300">
                If you have any questions about these Terms, please contact us at:
                <a href="mailto:terms@cosmiccalendar.com" className="text-celestial-blue hover:underline ml-1">
                  terms@cosmiccalendar.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
