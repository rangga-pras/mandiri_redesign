import React from 'react';
import SmartComparison from "../sections/SmartComparison";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
  isExternal?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  link, 
  isExternal = false 
}) => {
  const handleClick = () => {
    if (isExternal) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = link;
    }
  };

  return (
    <div 
      className="group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
      onClick={handleClick}
    >
      {/* Header Section */}
      <div className="p-6 pb-4 flex-grow">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <h3 className="text-xl font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
              {title}
            </h3>
            <span className="ml-2 text-xl font-semibold text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all duration-300">
              &gt;
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image Section */}
      <div className="relative overflow-hidden flex-shrink-0">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

const IndividualPage: React.FC = () => {
  const services = [
    {
      title: "Saving Account",
      description: "Make life easier with our range of savings solutions",
      imageSrc: "/assets/simpanan.jpg",
      imageAlt: "Saving Account",
      link: "https://www.bankmandiri.co.id/en/web/guest/mandiri-tabungan",
      isExternal: true
    },
    {
      title: "Loan",
      description: "Loan solutions that offer greater transactional convenience and flexibility",
      imageSrc: "/assets/loan.jpg",
      imageAlt: "Loan",
      link: "https://www.bankmandiri.co.id/en/web/guest/pinjaman",
      isExternal: true
    },
    {
      title: "Credit Card",
      description: "Enjoy the advantages and conveniences offered by Mandiri credit cards for all your needs",
      imageSrc: "/assets/creditcard.jpg",
      imageAlt: "Credit Card",
      link: "https://www.mandirikartukredit.com/",
      isExternal: true
    },
    {
      title: "Debit Card",
      description: "Get your Mandiri Debit Card and enjoy convenience, control and security in transacting at home and abroad and...",
      imageSrc: "/assets/debit.jpg",
      imageAlt: "Debit Card",
      link: "https://www.bankmandiri.co.id/en/web/guest/mandiri-debit",
      isExternal: true
    },
    {
      title: "Investment & Insurance",
      description: "Protect yourself and your family, and enjoy the benefits of investing with our range of Insurance and investment products",
      imageSrc: "/assets/investment.jpg",
      imageAlt: "Investment",
      link: "https://www.bankmandiri.co.id/en/web/guest/investasi-asuransi",
      isExternal: true
    },
    {
      title: "E-Banking",
      description: "Banking services that make life easier",
      imageSrc: "/assets/ebanking.jpg",
      imageAlt: "E-Banking",
      link: "https://www.bankmandiri.co.id/en/web/guest/digital-banking",
      isExternal: true
    },
    {
      title: "Money Transfer",
      description: "Enjoy seamless money transfer from and to any country all over the world",
      imageSrc: "/assets/transfer.jpg",
      imageAlt: "Money Transfer",
      link: "https://www.bankmandiri.co.id/en/web/guest/remittance",
      isExternal: true
    },
    {
      title: "Smart Branch",
      description: "Bank Mandiri's dedication to its beloved customers by continuing to increase comfort and provide the best banking experience...",
      imageSrc: "/assets/ag-smart-branch.png",
      imageAlt: "Smart Branch",
      link: "https://www.bankmandiri.co.id/en/web/guest/smart-branch",
      isExternal: true
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-gray-200 to-gray-300">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <img 
          src="/assets/hero.jpg" 
          alt="Woman writing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="text-white">
              <h1 className="text-3xl font-light mb-2">For a better life</h1>  
              <p className="text-lg opacity-90">Dedicated service and consistent understanding of your needs and lifestyle.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
      
      <SmartComparison/>

      {/* Dream Home Section */}
      <div className="relative h-64 bg-gray-800">
        <img 
          src="/assets/hero-perseorangan.jpg" 
          alt="Dream Home" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="text-white">
              <h2 className="text-2xl font-light mb-2">Your Dream Home, No Longer A Dream</h2>
              <p className="text-sm mb-4">
                Get subsidy KPR new and KPR take over to 5,000 IDR per month for 1 year & 6.25% p.a off fixed 2 years
              </p>
              <button className="text-sm text-yellow-400 hover:text-yellow-300 font-medium transition-colors">
                MORE →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Loyalty Program */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center space-x-6">
          <div className="w-48 h-32">
            <img src="/assets/livinpoin.jpeg" alt="Livin Point" className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Mandiri Loyalty</h3>
            <p className="text-sm text-gray-600 mb-4">
              Enjoy banking services in Bank Mandiri and get the benefits with Livin'point
            </p>
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
              MORE →
            </button>
          </div>
        </div>
      </div>

      {/* Agent Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-6">
            <div className="w-48 h-32">
              <img src="/assets/agen bank mandiri.jpeg" alt="Bank Agent" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Bank Mandiri Agent</h3>
              <p className="text-sm text-gray-600 mb-4">
                Enjoy our attractive banking services through Bank Mandiri Agent Public cheap and easy
              </p>
              <button className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
                MORE →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualPage;