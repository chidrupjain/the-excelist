import React from 'react';

export const RefundPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-navy-800 mb-8 border-b pb-4">Refund Policy</h1>
        
        <div className="space-y-8 text-gray-700 leading-relaxed text-sm text-justify">
          <p>
            Thank you for studying at <span className="font-semibold">www.theexcelist.com</span>. We strive to provide high-quality educational content and a seamless learning experience. Due to the digital nature of our products, all sales are final, and we do not offer refunds or exchanges under any circumstances.
          </p>

          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-3">1. All Sales Are Final</h2>
            <p className="mb-2">
              Once a purchase is made for any course, subscription, or digital material, no refunds will be issued. This includes, but is not limited to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Online courses (pre-recorded or live)</li>
              <li>Downloadable resources (PDFs, videos, templates)</li>
              <li>Subscription/membership fees</li>
              <li>Bundled or discounted offers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-3">2. Before You Purchase</h2>
            <p className="mb-2">We encourage you to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Review course descriptions, previews, and demo materials carefully.</li>
              <li>Contact <a href="mailto:info@theexcelist.com" className="text-blue-600 hover:underline">info@theexcelist.com</a> with any questions before buying.</li>
            </ul>
            <p className="mt-2">By completing a purchase, you acknowledge and agree to this no-refund policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-3">3. Exceptions</h2>
            <p className="mb-2">We do not provide refunds for the following circumstances:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Change of mind or dissatisfaction with the course.</li>
              <li>Partial usage or non-completion of the course.</li>
              <li>Technical issues (contact support for assistance instead).</li>
              <li>Delayed access or personal scheduling conflicts.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-3">4. Dispute Resolution</h2>
            <p>
              If you believe there has been an error in billing, contact us within three days at <a href="mailto:info@theexcelist.com" className="text-blue-600 hover:underline">info@theexcelist.com</a>. Unauthorized charge disputes (chargebacks) may result in permanent account suspension.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-3">5. Policy Updates</h2>
            <p>
              We reserve the right to modify this policy at any time. Continued use of our services constitutes acceptance of these terms.
            </p>
          </section>

          <div className="bg-navy-50 p-6 rounded-lg border border-navy-100 mt-8">
            <h3 className="font-bold text-navy-800 mb-2">Contact Us</h3>
            <p className="mb-2">If you have any questions about our Returns and Refunds Policy, please contact us at:</p>
            <p className="font-medium">Email: <a href="mailto:info@theexcelist.com" className="text-blue-600 hover:underline">info@theexcelist.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};