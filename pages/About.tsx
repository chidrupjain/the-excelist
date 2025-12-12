import React, { useState } from 'react';
import { Mail, Phone, Youtube, Loader2 } from 'lucide-react';

interface AboutProps {
  onFormSuccess: () => void;
}

export const About: React.FC<AboutProps> = ({ onFormSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xblnqjql", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        form.reset();
        onFormSuccess();
      } else {
        alert("There was a problem submitting the form. Please try again.");
      }
    } catch (error) {
      alert("There was a network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Bio Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-start">
                
                {/* Image Placeholder */}
                <div className="md:w-1/3 w-full">
                    <div className="aspect-[3/4] bg-gray-200 rounded-lg shadow-lg overflow-hidden relative">
                         <img 
                            src="chidrup-jain.png" 
                            alt="Chidrup Jain"
                            className="w-full h-full object-cover" 
                         />
                         <div className="absolute bottom-0 left-0 right-0 bg-navy-900 bg-opacity-90 p-4 text-white">
                            <h2 className="text-xl font-bold">Chidrup Jain</h2>
                            <p className="text-sm text-gray-300">Founder & Director</p>
                         </div>
                    </div>
                    
                    <div className="mt-8 space-y-3">
                         <ul className="text-sm text-gray-700 space-y-1">
                             <li>• Certified Financial Planner (CFP)</li>
                             <li>• Chartered Trust & Estate Planner (CTEP)</li>
                             <li>• NISM-CPFA Certified</li>
                             <li>• NCMP (NSE Certified Market Professional)</li>
                         </ul>
                    </div>
                </div>

                {/* Bio Text */}
                <div className="md:w-2/3 w-full">
                    <h1 className="text-4xl font-bold text-navy-800 mb-6">Founder</h1>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                        <p>
                            Chidrup Jain is a seasoned financial professional with over 20 years of rich experience in the financial services industry. As the Director and Founder of The Excelist, he has dedicated his career to empowering Mutual Fund Distributors (MFDs) and investors alike through consultancy and education.
                        </p>
                        <p>
                            His deep domain expertise spans across Financial Planning, Wealth Management, Mutual Funds, Equity, Derivatives, Commodities, and SME IPOs. Chidrup is not just a consultant but a mentor who believes in the power of financial literacy.
                        </p>
                        <p>
                            Throughout his illustrious career, Chidrup has achieved significant milestones:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-navy-900 font-medium">
                            <li>Managed operations for BSE STAR MF in Rajasthan, optimizing processes for countless distributors.</li>
                            <li>Personally trained over 3,500 IFAs, helping them scale their practices and navigate regulatory landscapes.</li>
                            <li>Played a pivotal role in expanding Fintech services across the North India region.</li>
                            <li>Led major Investment Awareness Workshops (IAPs) as a recognized NISM CPE & SEBI SMART Trainer.</li>
                        </ul>
                        <p>
                            At The Excelist, Chidrup combines his operational acumen with his passion for teaching to solve compliance hurdles for MFDs and deliver world-class financial education.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy-50 py-16 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-4">Contact Us</h2>
              <p className="text-gray-600">Reach out for consultancy services or workshop inquiries.</p>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-8">
                  
                  {/* Contact Info Cards */}
                  <div className="lg:w-1/3 space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                        <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className="text-navy-800" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                        <p className="text-gray-600">info@theexcelist.com</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                        <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className="text-navy-800" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                        <p className="text-gray-600">+91 94144 28749</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                        <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Youtube className="text-navy-800" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Social</h3>
                        <a 
                          href="https://www.youtube.com/@The_Excelist" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-navy-800 hover:text-navy-600 font-medium underline"
                        >
                          Visit YouTube Channel
                        </a>
                        <p className="text-gray-500 text-sm mt-2">Watch our latest insights</p>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-sm">
                      <h3 className="text-2xl font-bold text-navy-800 mb-6">Send us a Message</h3>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                            <input 
                              type="text" 
                              name="name" 
                              id="name" 
                              required 
                              placeholder="John Doe" 
                              className="w-full bg-white rounded-md border border-gray-300 p-3 shadow-sm focus:border-navy-800 focus:ring-1 focus:ring-navy-800 outline-none transition" 
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input 
                              type="email" 
                              name="email" 
                              id="email" 
                              required 
                              placeholder="john@example.com" 
                              className="w-full bg-white rounded-md border border-gray-300 p-3 shadow-sm focus:border-navy-800 focus:ring-1 focus:ring-navy-800 outline-none transition" 
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                          <input 
                            type="tel" 
                            name="phone" 
                            id="phone" 
                            placeholder="+91 98765 43210" 
                            className="w-full bg-white rounded-md border border-gray-300 p-3 shadow-sm focus:border-navy-800 focus:ring-1 focus:ring-navy-800 outline-none transition" 
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                          <textarea 
                            name="message" 
                            id="message" 
                            rows={5} 
                            required 
                            placeholder="How can we help you?" 
                            className="w-full bg-white rounded-md border border-gray-300 p-3 shadow-sm focus:border-navy-800 focus:ring-1 focus:ring-navy-800 outline-none transition"
                          ></textarea>
                        </div>
                        <button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full bg-navy-800 text-white font-bold py-3 px-6 rounded-md hover:bg-navy-900 transition duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                              Sending...
                            </>
                          ) : 'Send Message'}
                        </button>
                      </form>
                  </div>

              </div>
          </div>
      </section>
    </div>
  );
};