import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Consultancy } from './pages/Consultancy';
import { Courses } from './pages/Courses';
import { FinancialCalculators } from './pages/Calculator';
import { About } from './pages/About';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { RefundPolicy } from './pages/RefundPolicy';
import { PageState } from './types';

function App() {
  const [activePage, setActivePage] = useState<PageState>(PageState.HOME);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const handleFormSuccess = () => {
    setActivePage(PageState.HOME);
    setShowSuccessPopup(true);
  };

  const renderContent = () => {
    switch (activePage) {
      case PageState.HOME:
        return <Home onNavigate={setActivePage} />;
      case PageState.CONSULTANCY:
        return <Consultancy />;
      case PageState.KEY_LEARNINGS:
        return <Courses />;
      case PageState.CALCULATORS:
        return <FinancialCalculators />;
      case PageState.ABOUT:
        return <About onFormSuccess={handleFormSuccess} />;
      case PageState.PRIVACY:
        return <PrivacyPolicy />;
      case PageState.TERMS:
        return <TermsOfUse />;
      case PageState.REFUND:
        return <RefundPolicy />;
      default:
        return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-white relative">
      <Header activePage={activePage} onNavigate={setActivePage} />
      <main>
        {renderContent()}
      </main>
      <Footer onNavigate={setActivePage} />

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black bg-opacity-50 p-4 transition-opacity">
          <div className="bg-white rounded-lg shadow-2xl max-w-sm w-full p-8 text-center transform transition-all scale-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-navy-800 mb-2">Success!</h3>
            <p className="text-gray-600 mb-8">The form has been submitted we will contact you soon.</p>
            <button 
              onClick={() => setShowSuccessPopup(false)}
              className="w-full bg-navy-800 text-white px-6 py-3 rounded-md font-bold hover:bg-navy-900 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;