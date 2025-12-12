import React from 'react';
import { ShieldCheck, BookOpen, Users, BarChart } from 'lucide-react';
import { PageState } from '../types';

interface HomeProps {
  onNavigate: (page: PageState) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-navy-800 text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80" 
            alt="Corporate Meeting Room" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-900 opacity-90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Empowering Financial Professionals with Compliance & Knowledge
            </h1>
            <p className="text-lg md:text-xl text-navy-100 mb-8 leading-relaxed">
              The Excelist is your trusted partner for end-to-end consultancy for Mutual Fund Distributors (MFDs) and advanced financial education. Led by industry veteran Chidrup Jain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate(PageState.CONSULTANCY)}
                className="px-8 py-3 bg-white text-navy-800 font-semibold rounded hover:bg-navy-50 transition"
              >
                Explore Services
              </button>
              <button 
                onClick={() => onNavigate(PageState.KEY_LEARNINGS)}
                className="px-8 py-3 bg-navy-900 border border-navy-700 text-white font-semibold rounded hover:bg-navy-700 transition"
              >
                View Key Learnings
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Why Choose The Excelist?</h2>
            <p className="text-gray-600">
              We bridge the gap between regulatory complexity and operational efficiency. Whether you are an established MFD or a budding financial advisor, our expertise ensures your business remains compliant and competitive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-navy-50 rounded-lg text-center hover:shadow-lg transition">
              <ShieldCheck className="w-12 h-12 text-navy-800 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy-800 mb-2">Regulatory Compliance</h3>
              <p className="text-gray-600 text-sm">Expert guidance on AMFI/SEBI regulations, ensuring your documentation and filings are always up to date.</p>
            </div>
            <div className="p-6 bg-navy-50 rounded-lg text-center hover:shadow-lg transition">
              <BookOpen className="w-12 h-12 text-navy-800 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy-800 mb-2">Expert Education</h3>
              <p className="text-gray-600 text-sm">Deep-dive workshops and courses on wealth management, derivatives, and mutual funds personally trained by Chidrup Jain.</p>
            </div>
            <div className="p-6 bg-navy-50 rounded-lg text-center hover:shadow-lg transition">
              <Users className="w-12 h-12 text-navy-800 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy-800 mb-2">Operational Support</h3>
              <p className="text-gray-600 text-sm">Streamline your business operations with our tailored support for back-office management and audits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1600880292205-07f764e6a8e5?auto=format&fit=crop&w=800&q=80" 
                alt="Indian Professional Consultants Meeting" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">Comprehensive Consultancy for MFDs</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-navy-800 text-white flex items-center justify-center text-xs mt-1 mr-3">✓</div>
                  <p className="text-gray-700">End-to-end Compliance Documentation & Filing</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-navy-800 text-white flex items-center justify-center text-xs mt-1 mr-3">✓</div>
                  <p className="text-gray-700">Operational Guidance for efficient back-office management</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-navy-800 text-white flex items-center justify-center text-xs mt-1 mr-3">✓</div>
                  <p className="text-gray-700">Audit Support and Regulatory Updates</p>
                </li>
              </ul>
              <button 
                onClick={() => onNavigate(PageState.CONSULTANCY)}
                className="text-navy-800 font-bold border-b-2 border-navy-800 hover:text-navy-600 transition"
              >
                Learn More About Our Services &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Highlight */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Learn from a Master Trainer</h2>
          <p className="text-navy-100 max-w-2xl mx-auto mb-10">
            Chidrup Jain brings over 20 years of experience to the classroom. Our programs are designed to transform you from a distributor to a holistic wealth manager.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {['Financial Planning', 'Wealth Management', 'Derivatives', 'SME IPOs'].map((topic) => (
               <div key={topic} className="bg-navy-900 p-4 rounded border border-navy-700">
                 <p className="font-semibold">{topic}</p>
               </div>
             ))}
          </div>
          <div className="mt-10">
             <button 
              onClick={() => onNavigate(PageState.KEY_LEARNINGS)}
              className="bg-white text-navy-900 px-6 py-3 rounded font-bold hover:bg-gray-100 transition"
            >
              Explore Key Learnings
             </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 text-center mb-12">Trusted by Professionals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-navy-800">
              <p className="text-gray-600 italic mb-4">"The Excelist helped streamline my entire compliance process. I can now focus on my clients while Chidrup Sir's team handles the regulatory complexities."</p>
              <p className="font-bold text-navy-900">- Senior MFD, Jaipur</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-navy-800">
              <p className="text-gray-600 italic mb-4">"Attending the wealth management workshop was a game changer. The practical insights into SME IPOs and derivatives were outstanding."</p>
              <p className="font-bold text-navy-900">- Certified Financial Planner, Delhi</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};