import React from 'react';
import { GraduationCap, Award, Video, Users } from 'lucide-react';

export const Courses: React.FC = () => {
  const features = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Expert-Led Training",
      desc: "All courses are designed and delivered by Chidrup Jain, bringing 20+ years of practical market experience."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Practical Certification",
      desc: "Programs aligned with NISM standards and practical industry requirements for real-world application."
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Hybrid Learning",
      desc: "Access to both physical workshops and digital sessions to suit your schedule and learning preference."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Mentorship",
      desc: "Post-training support and mentorship to help you implement concepts in your daily practice."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-navy-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-navy-800 mb-4">Key Learnings</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Elevate your financial expertise with specialized training programs designed for MFDs, students, and financial enthusiasts.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="bg-navy-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-navy-800">
                {f.icon}
              </div>
              <h3 className="font-bold text-navy-800 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Course Offerings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <h2 className="text-3xl font-bold text-navy-800 mb-10">Our Programs</h2>
        
        <div className="space-y-8">
          {/* Program 1 */}
          <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
            <div className="md:w-1/3 bg-navy-800 p-8 flex flex-col justify-center text-white">
              <h3 className="text-2xl font-bold mb-2">Wealth Management Masterclass</h3>
              <span className="inline-block bg-navy-700 text-xs px-2 py-1 rounded w-fit mb-4">Advanced Level</span>
              <p className="text-navy-200 text-sm">Comprehensive training on asset allocation, portfolio construction, and risk management strategies.</p>
            </div>
            <div className="md:w-2/3 p-8">
              <h4 className="font-bold text-lg text-navy-800 mb-3">What You Will Learn:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Strategic vs. Tactical Asset Allocation</li>
                  <li>• Evaluating Client Risk Profiles</li>
                  <li>• Advanced Portfolio Rebalancing</li>
                </ul>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Tax Efficient Investing</li>
                  <li>• Estate Planning Basics</li>
                  <li>• Goal-based Financial Planning</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Program 2 */}
          <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
            <div className="md:w-1/3 bg-navy-800 p-8 flex flex-col justify-center text-white">
              <h3 className="text-2xl font-bold mb-2">Derivatives & Equity</h3>
              <span className="inline-block bg-navy-700 text-xs px-2 py-1 rounded w-fit mb-4">Intermediate Level</span>
              <p className="text-navy-200 text-sm">Understanding the mechanics of Futures & Options and direct equity analysis.</p>
            </div>
            <div className="md:w-2/3 p-8">
              <h4 className="font-bold text-lg text-navy-800 mb-3">What You Will Learn:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Futures Pricing & Hedging</li>
                  <li>• Options Strategies (Calls & Puts)</li>
                  <li>• Technical Analysis Basics</li>
                </ul>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Fundamental Analysis of Stocks</li>
                  <li>• Reading Balance Sheets</li>
                  <li>• Risk Management in Trading</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Program 3 */}
          <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
            <div className="md:w-1/3 bg-navy-800 p-8 flex flex-col justify-center text-white">
              <h3 className="text-2xl font-bold mb-2">MFD Business Growth</h3>
              <span className="inline-block bg-navy-700 text-xs px-2 py-1 rounded w-fit mb-4">Professional Development</span>
              <p className="text-navy-200 text-sm">Strategies to scale your distribution business, acquire clients, and manage operations.</p>
            </div>
            <div className="md:w-2/3 p-8">
              <h4 className="font-bold text-lg text-navy-800 mb-3">What You Will Learn:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Client Acquisition Strategies</li>
                  <li>• Building a Brand as an MFD</li>
                  <li>• Leveraging Technology (BSE STAR MF)</li>
                </ul>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Regulatory Compliance Best Practices</li>
                  <li>• Soft Skills & Client Communication</li>
                  <li>• Creating Niche Markets (SME IPOs etc)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};