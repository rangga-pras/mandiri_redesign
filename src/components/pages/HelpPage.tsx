import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import LiveChat from '../sections/LiveChat';

interface FAQSectionProps {
  title: string;
  items: string[];
  sectionKey: string;
  expandedFAQ: string | null;
  toggleFAQ: (key: string) => void;
}

const FAQSection: React.FC<FAQSectionProps> = ({ 
  title, 
  items, 
  sectionKey, 
  expandedFAQ, 
  toggleFAQ 
}) => (
  <div className="mb-8">
    <div className="bg-blue-900 text-white px-6 py-4 rounded-t-lg">
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
    <div className="border border-gray-200 rounded-b-lg">
      {items.map((item, index) => {
        const faqKey = `${sectionKey}-${index}`;
        return (
          <div key={index} className="border-b border-gray-200 last:border-b-0">
            <button
              onClick={() => toggleFAQ(faqKey)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-800">{item}</span>
              <ChevronDown 
                className={`w-5 h-5 text-blue-600 transition-transform ${
                  expandedFAQ === faqKey ? 'rotate-180' : ''
                }`} 
              />
            </button>
            {expandedFAQ === faqKey && (
              <div className="px-6 pb-4 text-sm text-gray-600">
                <p>
                  {sectionKey === 'debit' 
                    ? 'Please contact our customer service immediately or visit the nearest branch for assistance with your debit card issue.'
                    : 'For credit card related issues, please contact our credit card customer service or visit our website for detailed information.'
                  }
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
);

const HelpPage: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const toggleFAQ = (index: string): void => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const debitCardItems = [
    'Lost Mandiri Debit Card',
    'Blocked Mandiri Debit Card',
    'Mandiri Debit Card Retained by ATM',
    'Forgotten ATM PIN'
  ];

  const creditCardItems = [
    'Lost Mandiri Credit Card',
    'Over Limit Following Temporary Card Limit Increase',
    'Change of Telephone Number',
    'Failure of SMS Request for Conversion to Installment'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-gray-200 to-gray-300">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <img 
          src="/assets/herohelp.jpg" 
          alt="Customer Service" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="text-white">
              <div className="flex items-center text-sm mb-4">
                <span>HOME</span>
                <span className="mx-2"></span>
                <span>HELP</span>
              </div>
              <h1 className="text-3xl font-light mb-2">Help & FAQ</h1>
              <p className="text-lg opacity-90">Ready to serve and solve your question</p>
            </div>
          </div>
        </div>
      </div>
      
      <LiveChat/>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <FAQSection 
          title="Lost Debit Card?"
          items={debitCardItems}
          sectionKey="debit"
          expandedFAQ={expandedFAQ}
          toggleFAQ={toggleFAQ}
        />

        <FAQSection 
          title="Lost Credit Card?"
          items={creditCardItems}
          sectionKey="credit"
          expandedFAQ={expandedFAQ}
          toggleFAQ={toggleFAQ}
        />

        {/* Additional Help Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-80 h-64 mb-6 flex items-center justify-center">
              <img 
                src="/assets/pengaduan.png" 
                alt="Customer Service" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="max-w-sm">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Media Penyampaian Pengaduan Nasabah
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Bank Mandiri menyediakan Mekanisme Penyampaian Pengaduan jika nasabah mengalami kendala ketika bertransaksi.
              </p>
              <button className="text-orange-500 hover:text-orange-600 font-medium transition-colors uppercase tracking-wide">
                SELENGKAPNYA →
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-80 h-64 mb-6 flex items-center justify-center">
              <img 
                src="/assets/edukasi.png" 
                alt="Security Education" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="max-w-sm">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Edukasi Keamanan Transaksi
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Bank Mandiri senantiasa memberikan edukasi mengenai keamanan transaksi dan jaga data rahasia
              </p>
              <button className="text-orange-500 hover:text-orange-600 font-medium transition-colors uppercase tracking-wide">
                SELENGKAPNYA →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;