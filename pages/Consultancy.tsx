import React from 'react';
import { FileText, Settings, ClipboardCheck, Book } from 'lucide-react';

export const Consultancy: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Consultancy Services</h1>
          <p className="text-navy-100 text-lg max-w-2xl">
            Specialized support for Mutual Fund Distributors to ensure seamless compliance, robust operations, and business growth.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-sm p-8 border-t-4 border-navy-800">
            <div className="flex items-start">
              <div className="bg-navy-50 p-3 rounded-full mr-6">
                <FileText className="w-8 h-8 text-navy-800" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy-800 mb-3">Compliance & Documentation</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Navigating the regulatory landscape of AMFI and SEBI can be daunting. We take the burden off your shoulders by managing all necessary documentation and filings.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-navy-600 rounded-full mr-2"></span>
                    ARN Registration & Renewal Assistance
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-navy-600 rounded-full mr-2"></span>
                    KYC Norms & Implementation
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-navy-600 rounded-full mr-2"></span>
                    Mandatory Disclosure Filings
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-navy-600 rounded-full mr-2"></span>
                    Due Diligence Report Preparation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-sm p-8 border-t-4 border-navy-800">
            <div className="flex items-start">
              <div className="bg-navy-50 p-3 rounded-full mr-6">
                <Settings className="w-8 h-8 text-navy-800" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy-800 mb-3">Operational Guidance</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Efficiency is key to scaling your advisory practice. We analyze your current workflow and implement best practices to streamline your back-office operations.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-navy-600 rounded-full mr-2"></span>
                    Platform Onboarding (BSE STAR MF / MF Utility)
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-navy-600 rounded-full mr-2"></span>
                    Transaction Processing Workflows
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-navy-600 rounded-full mr-2"></span>
                    Client Data Management Systems
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-navy-600 rounded-full mr-2"></span>
                    Digital Onboarding Solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-sm p-8 border-t-4 border-navy-800">
            <div className="flex items-start">
              <div className="bg-navy-50 p-3 rounded-full mr-6">
                <ClipboardCheck className="w-8 h-8 text-navy-800" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy-800 mb-3">Audit & Regulatory Support</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Stay audit-ready at all times. The Excelist provides mock audits and ongoing support to ensure you are never caught off guard by regulatory changes.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-navy-600 rounded-full mr-2"></span>
                    Internal Process Audits
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-navy-600 rounded-full mr-2"></span>
                    Circular Interpretations & Updates
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-navy-600 rounded-full mr-2"></span>
                    Grievance Redressal Mechanism Setup
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-navy-600 rounded-full mr-2"></span>
                    Code of Conduct Training
                  </li>
                </ul>
              </div>
            </div>
          </div>

           {/* Call to Action */}
           <div className="bg-navy-900 text-white rounded-lg p-8 text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Need Personalized Support?</h3>
            <p className="mb-6 text-navy-100">Contact us today to schedule a consultation regarding your practice's specific needs.</p>
            <button className="bg-white text-navy-900 font-bold py-3 px-8 rounded hover:bg-gray-100 transition">
              Get in Touch
            </button>
           </div>
        </div>
      </div>
    </div>
  );
};
